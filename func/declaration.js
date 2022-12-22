
//this func can be called without declaration 
//javascript moves functions to the top of the file its called hoisting 
function walk(){
    console.log("walk")
}

//named func expression
let run1 = function run1(){
    console.log("run1")
};

//annonymus func dec
let run = function run(){
    console.log("run")
};

run()

let move = run
move();

function sum(a ,b){
    return a+b;
}
//nan
console.log(sum(1))