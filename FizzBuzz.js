let output = fizzBuzz(7)
console.log(output)

function fizzBuzz(number){
    if(typeof number !== 'number')
    return 'Not a number'
    if(number%3 === 0 && number%5 === 0)
    return 'fizzBuzz';
    if(number%3 === 0)
    return 'fizz';
    if(number % 5 === 0)
    return 'buzz';
    
    else
    return number;
    
}