/*function myFind (arr,inputItem)
{
    let index=arr.indexOf(inputItem);
    return(`{index:${index} ,item:${inputItem}}`)
}
console.log(myFind([3,2,1,5,4],5))*/

function myFind (arr,inputItem)
{
    let index=null;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]==inputItem)
        {
            index=i
        }
    }
    
    return(`{index:${index} ,item:${inputItem}}`)
}
console.log(myFind([3,2,1,5,4],2))
