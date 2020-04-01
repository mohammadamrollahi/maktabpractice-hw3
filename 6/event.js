/*function myExtract(myString)
{
    return myString.match(/(\d+)/g)
}
console.log(myExtract("i have 2 apples and 3 pineapples"))
*/
function myExtract(myString)
{
    let nums=[]
    let counter=0;
    for(let i=0;i<myString.length;i++)
    {
        if ((myString[i])/myString[i]==1)
        {
            nums[counter]=myString[i]
            counter++;
        }
    }
    return nums
}
console.log(myExtract("i have 2 apples and 3 pineapples"))
