/**
 * Works out the greatest common divisor of two numbers
 * Uses the euclidean algorithm: https://www.youtube.com/watch?v=JUzYl1TYMcU
 * e.g. gcd(8, 12) => 4
 * I had to google the answer to this one ;) as it was bugging me!!
 * https://www.freecodecamp.org/
 */
function gcd(a, b) {
  var r
  while ((a % b) > 0) {
    r = a % b
    a = b
    b = r
  }
  return b
}

export default gcd
