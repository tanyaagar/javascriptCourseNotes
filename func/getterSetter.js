const person ={
    fName: 'Mosh',
    lastName: 'Hamedani',
    get fullName(){
        return `${person.fName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.fName = parts[0];
        this.lastName = parts[1];
    }
};

//getters to access properties of obejct
//setter cheange mutate the propertyies

