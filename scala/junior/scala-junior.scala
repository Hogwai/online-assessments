object Challenge {
  def findOutlier(integers: List[Int]): Int = {
    // Count the number of even and odd integers
    val (evenCount, oddCount) = integers.foldLeft((0, 0)) {
      case ((even, odd), num) =>
        if (num % 2 == 0) (even + 1, odd)
        else (even, odd + 1)
    }

    // Determine the outlier based on the counts
    if (evenCount > oddCount) {
      // The outlier is an odd number
      integers.find(_ % 2 != 0).getOrElse(throw new NoSuchElementException("No outlier found."))
    } else {
      // The outlier is an even number
      integers.find(_ % 2 == 0).getOrElse(throw new NoSuchElementException("No outlier found."))
    }
  }
}