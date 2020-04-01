function remDup(arr)
{
    let counter=0;
for(let n=0;n<2;n++)
        for(i=0;i<=arr.length;i++)
        {
            for(j=0;j<=arr.length;j++)
            {
                if(arr[i]==arr[j])
                counter++
                
            }
            if(counter>1)
            arr.splice(i,1)
            counter=0
        }
    return arr
}
console.log(remDup([1,9,8,1,4,5,3,5,3,9,8]))