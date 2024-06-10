function maxOfThree(x, y, z) {
  if (x > y && x > z) {
    return x
  }

  if (y > z && y > x) {
    return y
  }

  if (z > x && z > y) {
    return z
  }

  if (x == y && x == z) {
    return x
  }

  if (x == y && x > z || x == z && x > y ) {
    return x
  }

  if (y == z && y > x) {
    return y
  }
}

export default maxOfThree
