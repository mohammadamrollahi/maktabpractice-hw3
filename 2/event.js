/*function myConcat(firstArr, secondArray, thirdArray) {
  let newArray = [...firstArr, ...secondArray, ...thirdArray];
  return newArray;
}
console.log(myConcat([1, 5], [2, 6], [3, 7]));
*/
function myConcat(firstArr, secondArr) {
  let counter = 0;
  let mynewArray = [];
  for (let i = 0; i < firstArr.length; i++) {
    mynewArray[counter] = firstArr[i];
    counter++;
  }
  for (let i = 0; i < secondArr.length; i++) {
    mynewArray[counter] = secondArr[i];
    counter++;
  }
  return mynewArray;
}
console.log(myConcat([1, 5], [7, 8]));
