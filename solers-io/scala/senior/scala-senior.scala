object Main {
  def main(args: Array[String]) {
    println(GameChallenge(scala.io.StdIn.readLine()))
  }

  def GameChallenge(str: String): Int = {
    val pattern = "\\((\\d+) (\\d+)\\)".r
    str match {
      case pattern(x, y) =>
        val knightX = x.toInt
        val knightY = y.toInt
        val possibleMoves = List(
          (knightX + 2, knightY + 1), (knightX + 2, knightY - 1),
          (knightX - 2, knightY + 1), (knightX - 2, knightY - 1),
          (knightX + 1, knightY + 2), (knightX + 1, knightY - 2),
          (knightX - 1, knightY + 2), (knightX - 1, knightY - 2)
        )
        possibleMoves.count { case (x, y) => x >= 1 && x <= 8 && y >= 1 && y <= 8 }
      case _ => 0
    }
  }
}