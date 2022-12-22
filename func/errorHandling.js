const person ={
    fName: 'Mosh',
    lastName: 'Hamedani',
    get fullName(){
        return `${person.fName} ${person.lastName}`
    },
    set fullName(value){
        if(typeof value !== 'string')
            throw new Error('Value is not a string')
        const parts = value.split(' ');
        if(parts.length<2)
            throw new Error('Enter a 1ts and last name')
        this.fName = parts[0];
        this.lastName = parts[1];
    }
};

try{
person.fullName = "Tanya"
}
catch(e){
    console.log(e)
}

console.log(person)

//var function scoped attatch with window object (bad thing)aviud it
//let const : blocked scope  doesnt attacth to window object