//if given default value for parameter then all the other parameter must ahve default values as well
function interest(principal , rate = 3.5 , years = 5){
    return principal*rate*years/100

}

console.log(interest(10000))
//bad practice
console.log(interest(10000 , undefined , 3))