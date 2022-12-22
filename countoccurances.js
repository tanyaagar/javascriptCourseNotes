const numbers = [1,2,3,4,5,1]

const count = countOccurances(numbers , 1);

console.log(count)

function countOccurances(numbers , searchElement){
    //return numbers.filter((value)=> value== searchElement).length;
    return numbers.reduce((accumulator , current)=>{
        const occ = (current===searchElement) ? 1 : 0;
        console.log(accumulator , current , searchElement)
         return accumulator+occ
    },0);
}