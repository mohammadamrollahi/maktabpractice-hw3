function myExtract(myString)
{
    return myString.match(/(\d+)/g)
}
console.log(myExtract("i have 2 apples and 3 pineapples"))