fun decode(roman: String): Int {
    val romanMap = mapOf(
        'I' to 1,
        'V' to 5,
        'X' to 10,
        'L' to 50,
        'C' to 100,
        'D' to 500,
        'M' to 1000
    )
    
    var result = 0
    var previousValue = 0
  
    for (i in roman.length - 1 downTo 0){
      val value = romanMap[roman[i]] ?: 0

      if (value >= previousValue){
        result += value
      } else  {
        result -= value
      }
      previousValue = value
  }
  return result
}