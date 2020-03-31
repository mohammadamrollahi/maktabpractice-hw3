function deletByIndex(arr,index)
{
   arr.splice(index,1);
    return arr;
}
console.log(deletByIndex([2,5,1,4],2))