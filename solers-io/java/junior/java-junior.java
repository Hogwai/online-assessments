import java.util.Stack;

public class Challenge {

  public static boolean validBraces(String braces) {
    Stack<Character> stack = new Stack<>();
    char[] openingBraces = { '(', '[', '{' };
    char[] closingBraces = { ')', ']', '}' };

    for (char brace : braces.toCharArray()) {
      if (isOpeningBrace(brace, openingBraces)) {
        stack.push(brace);
      } else if (isClosingBrace(brace, closingBraces)) {
        if (stack.isEmpty() || !matchesPair(stack.pop(), brace)) {
          return false;
        }
      }
    }

    return stack.isEmpty();
  }

  private static boolean isOpeningBrace(char brace, char[] openingBraces) {
    for (char open : openingBraces) {
      if (brace == open) {
        return true;
      }
    }
    return false;
  }

  private static boolean isClosingBrace(char brace, char[] closingBraces) {
    for (char close : closingBraces) {
      if (brace == close) {
        return true;
      }
    }
    return false;
  }

  private static boolean matchesPair(char open, char close) {
    return (
      (open == '(' && close == ')') ||
      (open == '[' && close == ']') ||
      (open == '{' && close == '}')
    );
  }
}
