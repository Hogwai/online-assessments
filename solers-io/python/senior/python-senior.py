import ast


def find_variable_assignments(source, target_var_names):
    # Parse the source code into an AST
    tree = ast.parse(source)

    # Helper function to extract variable names from assignment targets
    def extract_variable_names(node):
        if isinstance(node, ast.Name):
            return [node.id]
        elif isinstance(node, ast.Tuple):
            return [elt.id for elt in node.elts if isinstance(elt, ast.Name)]
        return []

    # Helper function to traverse function/class definitions for variable assignments
    def traverse_definitions(node):
        assigned_vars = set()
        for inner_node in ast.walk(node):
            if isinstance(inner_node, ast.Assign):
                for target in inner_node.targets:
                    assigned_vars.update(extract_variable_names(target))
            elif isinstance(inner_node, ast.arguments):
                for arg in inner_node.args:
                    assigned_vars.add(arg.arg)
        return assigned_vars

    # Helper function to traverse class definitions for method names
    def traverse_class(node):
        assigned_vars = set()
        for class_node in ast.walk(node):
            if isinstance(class_node, ast.FunctionDef):
                assigned_vars.add(class_node.name)
                assigned_vars.update(traverse_definitions(class_node))
        return assigned_vars

    # Traverse the AST to find variable assignments, function arguments, class names, and method names
    assigned_vars = set()
    for node in ast.walk(tree):
        if isinstance(node, ast.Assign):
            for target in node.targets:
                assigned_vars.update(extract_variable_names(target))
        elif isinstance(node, ast.FunctionDef):
            assigned_vars.add(node.name)
            assigned_vars.update(traverse_definitions(node))
        elif isinstance(node, ast.ClassDef):
            assigned_vars.add(node.name)
            assigned_vars.update(traverse_class(node))

    # Filter out variables that are not in the target_var_names list
    result = [var for var in assigned_vars if var in target_var_names]

    # Filter out built-in names from the result
    result = [var for var in result if var not in dir(__builtins__)]

    return result
