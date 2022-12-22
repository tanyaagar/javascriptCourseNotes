const num =[1,2,3,4 ,5];

//end
const last = num.pop();
console.log(last);

//beginning
const first = num.shift();
console.log(first)
//middle
const mid = num.splice(1,2)
console.log(mid)

console.log(num)

//emptying an array

//sol
num.length = 0
console.log(num)
//sol2
num.splice(0 , num.length)