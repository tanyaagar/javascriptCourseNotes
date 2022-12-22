const numbers = [11,2,3,4,5 , 12];

const max = getMax(numbers);
console.log(max);

function getMax(number){
    return number.reduce((acc , curr)=>{
        return ((acc<curr) ? curr : acc)
    })
}