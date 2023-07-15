object DirReduction {
    def dirReduc(directions: Array[String]): Array[String] = {
        val opposites = Map("NORTH" -> "SOUTH", "SOUTH" -> "NORTH", "WEST" -> "EAST", "EAST" -> "WEST")

        def reduceDirections(dirs: List[String]): List[String] = dirs match {
        case x :: y :: tail if opposites.getOrElse(x, "") == y =>
            reduceDirections(tail)
        case x :: tail =>
            x :: reduceDirections(tail)
        case Nil => Nil
        }

        val reducedDirections = reduceDirections(directions.toList)
        if (reducedDirections == directions.toList) directions
        else dirReduc(reducedDirections.toArray)
    }
}