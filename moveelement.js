const numbrs = [1,2,3,4];
const output = move(numbrs , 0 , -1);
console.log(ouput);

function move(arr , index , offset){
    const position = index+offset;
    if(position<0 || position>= arr.length)
    {console.error("invalid output")
    return }
    const num = arr.splice(index , 1)[0];
    arr.splice(position , 0 , num);
    return arr;



}