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


// JavaScript approach by M. Katz based on W. Randolph Franklin's approach (Rensselaer Polytechnic Institute).
// https://stackoverflow.com/questions/217578/how-can-i-determine-whether-a-2d-point-is-within-a-polygon
// https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html

// function pointIsInPoly(p, polygon) {
//     var isInside = false;
//     var minX = polygon[0].x, maxX = polygon[0].x;
//     var minY = polygon[0].y, maxY = polygon[0].y;
//     for (var n = 1; n < polygon.length; n++) {
//         var q = polygon[n];
//         minX = Math.min(q.x, minX);
//         maxX = Math.max(q.x, maxX);
//         minY = Math.min(q.y, minY);
//         maxY = Math.max(q.y, maxY);
//     }

//     if (p.x < minX || p.x > maxX || p.y < minY || p.y > maxY) {
//         return false;
//     }

//     var i = 0, j = polygon.length - 1;
//     for (i, j; i < polygon.length; j = i++) {
//         if ( (polygon[i].y > p.y) != (polygon[j].y > p.y) &&
//                 p.x < (polygon[j].x - polygon[i].x) * (p.y - polygon[i].y) / (polygon[j].y - polygon[i].y) + polygon[i].x ) {
//             isInside = !isInside;
//         }
//     }

//     return isInside;
// }