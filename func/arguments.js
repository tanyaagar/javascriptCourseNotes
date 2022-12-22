function sum(a,b){
    //every function in javascrit has a special obect called arguents
    let total = 0;
    for(let value of arguments){
        total+=value
    }
    return total
    
}

console.log(sum2(1,2,3,4,5));

///////////////////////////////

//func with varying number of arguments 
//rest iperator : ...
//we cannot have any other parameter after rest parameter 
function sum2(...args){
    console.log(args)
    return args.reduce((a,b)=> a+b)
}

function totoalCharge(discount , ...prices){
    const total = prices.reduce((a,b)=> a+b);
}