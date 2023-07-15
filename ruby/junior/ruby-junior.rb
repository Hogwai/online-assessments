def valid_braces(braces)
    stack = []
    opening_braces = ['(', '[', '{']
    closing_braces = [')', ']', '}']
    brace_pairs = {
        ')' => '(',
        ']' => '[',
        '}' => '{'
    }

    braces.chars.each do |brace|
        if opening_braces.include?(brace)
        stack.push(brace)
        elsif closing_braces.include?(brace)
        if stack.empty? || stack.pop != brace_pairs[brace]
            return false
        end
        end
    end

    return stack.empty?
end