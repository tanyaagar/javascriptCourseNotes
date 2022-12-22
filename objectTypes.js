//factory function to create an object
//FOLLOWS camel notation : oneTwoTree

function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);

//Costructor Function
//Pascal notation : OneTwoThree
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle2 = new Circle(2);


//dynamic nature of js objects
//we can add or remove the objectn porperties dynamically 

const circle = {
    radius: 1
}
circle.colour = 'yellow';
circle.draw = function(){
    console.log('draw')
}

delete circle.draw;
console.log(circle)