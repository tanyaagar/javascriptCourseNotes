const courses = [{id: 1 , cname: 'a'},
{id: 2 , cname: 'a'},
];
//2 diff references
console.log(courses.includes({id: 1 , cname: 'a'}))

//array find
const course = courses.find(function(course){
    return course.cname === 'ab'
})
console.log(course)

//arrow function
const course2 = courses.find((course)=>{
    return course.cname === 'ab'
})
console.log(course2)