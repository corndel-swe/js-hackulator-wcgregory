/**
 * Uses Heron's formula to calculate the area of a triangle
 * with sides of length a, b, c
 * https://en.wikipedia.org/wiki/Heron%27s_formula
 */
function heron(a, b, c) {
  const semiarea = (a + b + c) / 2
  return Math.sqrt(semiarea * (semiarea - a) * (semiarea - b) * (semiarea - c))
}

export default heron
