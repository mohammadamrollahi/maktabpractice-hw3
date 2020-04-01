/*function myReplace(arr, oldItem,newItem) {
arr.splice((arr.indexOf(oldItem)),1,newItem)
    return arr;
  }*/
function myReplace(arr, oldItem,newItem) {
  let index = null;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == oldItem) {
      arr[i]=newItem
    }
  }

  return arr;
}
console.log(myReplace([3, 2, 1, 5, 4], 2,9));
