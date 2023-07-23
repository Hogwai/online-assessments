func mostDigits(_ integers: Array<Int>) -> Int {
    var maxDigitsNumber = integers[0]
    
    for number in integers {
        let numberString = String(number)
        let currentDigitsCount = numberString.count
        
        if currentDigitsCount > String(maxDigitsNumber).count {
            maxDigitsNumber = number
        }
    }
    
    return maxDigitsNumber
}