/*function myFlat(arr) {
  return arr.flat(Infinity);
}
*/
console.log(myFlat([5, 7, 8, [2, 1]]));

function myFlat(arr) {
  return arr.reduce(myFunc, []);
  function myFunc(totla, item) {
    return total.concat(Array.isArray(item) ? myFlat(item) : item);
  }
}
