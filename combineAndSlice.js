//in concat and slice if the values are 
//primitive then they are copied by value
//reference type then copied by reference 

const first = [{id:1}];
const second = [4,5,6];

const combined = first.concat(second);
first[0].id = 10;

const slice = combined.slice(2,4);

console.log(combined);
console.log(slice);

const comb = [...first,'a', ...second];
const copy = [...comb]
 
