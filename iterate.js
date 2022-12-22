const nums = [1,2,3,4];
for(let num of nums)
    console.log(num);

nums.forEach((num , index) => console.log(index , num))


//join
const numbers = [1,2,3];
const x = numbers.join(',')
console.log(x)

const msg = 'This is my first message';
const parts = msg.split(' ')
console.log(parts)
const co = parts.join("-")
console.log(co)

//sorting
const unsortNums = [3,4,1,2,5,8,7.5]
unsortNums.sort()
console.log(unsortNums)

const courses = [
    {id: 1 , name : 'node'},
    {id:2 , name : 'js'}
]
//Ascii
courses.sort((a,b) =>{
    //can make case insensitive too 
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0;
})
console.log(courses)

//testing elements of array
const numbs = [1,-1,2,3];
//every and some check if all nums are positive
const allPositive = numbs.every(function(value){
return value>=0;});

console.log(allPositive)
//some
const alteastOnePositive = numbs.some(function(value){
    return value>=0;});
    
    console.log(alteastOnePositive)

//filtering an array

const filtered = numbs.filter(value=> value>= 0);
console.log(filtered)

//map

const mapped = filtered.map(n => '<li>'+n+'</li>')
//object ------>const mapped = filtered.map(n => ({value:n}))

const html = '<ul>'+mapped.join('')+'</ul>';

console.log(html)

//chaining
const items = numbs
    .filter(value=> value>= 0)
    .map(n => '<li>'+n+'</li>');

const cost = [1,2,3,4];
let sum = 0;
//reduce
sum = cost.reduce((accumulator , currValue)=> accumulator+currValue
 , 0/*initial value of accumulator default as 1stelemnt*/);
console.log(sum)
