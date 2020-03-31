/*function deletByIndex(arr,index)
{
   arr.splice(index,1);
    return arr;
}
console.log(deletByIndex([2,5,1,4],2))
*/
function deletByIndex(arr,index)
{
    
    for(let i=index;i<arr.length;i++)
    {
        arr[i]=arr[i+1]
    }
    arr.pop();
    return arr;

}
console.log(deletByIndex([2,5,7,1,4],1))