const circle = {radius: 1,
draw(){
    console.log('draw circle of radius '+ this.radius)
}};

const another = {}

for(let key in circle){
    another[key] = circle[key];
}

console.log(another)

//Object.assign({} , circle)
const another1 = Object.assign({color: 'red'} , circle);

console.log(another1);


//ways 3 spread operaror {...circle}

const another2 = {...circle}

console.log(another2)

