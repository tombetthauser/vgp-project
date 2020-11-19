/*

  Write a function that accepts two arguments, a two-dimensional array containing [x,y] coordinate pairs and a single [x,y] coordinate array. The function should return a boolean indicating if the second argument's coordinates fall within a shape defined by the first arguments.

*/

function validator(poly, p) {
  let inside = false;

  let minX = poly[0][0];
  let maxX = poly[0][0];
  
  let minY = poly[0][1];
  let maxY = poly[0][1];

  for (let i = 1; i < poly.length; i++) {
    let q = poly[i];

    minX = Math.min(q[0], minX);
    maxX = Math.max(q[0], maxX);

    minY = Math.min(q[1], minY);
    maxY = Math.max(q[1], maxY);
  }

  if (p[0] < minX) return false;
  if (p[0] > maxX) return false;
  if (p[1] < minY) return false;
  if (p[1] > maxY) return false;

  let i = 0;
  let j = poly.length - 1;

  for (i, j; i < poly.length; j = i++) {
    if ((poly[i][1] > p[1]) !== (poly[j][1] > p[1]) &&
      p[0] < (poly[j][0] - poly[i][0]) * (p[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0]) {
        inside = !inside;
      }
  }

  return inside;
}

let square = [[0,0], [2,0], [2,-2], [0,-2]]

console.log(validator(square, [0,0])) // true
console.log(validator(square, [1,-1])) // true
console.log(validator(square, [-1,-3])) // false


let triangle = [[1,0], [2,-2], [0,-2]]

console.log(validator(square, [0,0])) // false
console.log(validator(square, [-1,-1])) // true
console.log(validator(square, [-3,-1])) // false





