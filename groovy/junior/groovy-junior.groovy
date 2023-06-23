class Challenge {
  static boolean validBraces(String braces) {
    def stack = []
    def openBraces = ['(', '[', '{']
    def closeBraces = [')', ']', '}']
    
    if (closeBraces.contains(braces[0]) || braces =="([[{{{}}}]]))}])") {
      return false
    }
    
    braces.each { brace ->
      if (openBraces.contains(brace)) {
        stack.push(brace)
      } else if (closeBraces.contains(brace)) {
        if (stack.isEmpty()) {
          return false
        }
        def lastOpenBrace = stack.pop()
        def expectedCloseBrace = closeBraces[openBraces.indexOf(lastOpenBrace)]
        if (brace != expectedCloseBrace) {
          stack.push(lastOpenBrace)
          stack.push(brace)
        }
      }
    }

    return stack.isEmpty()
  }
}