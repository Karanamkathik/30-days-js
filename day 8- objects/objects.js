const person = {
    firstName:'karthik',
    lastName:'karanam',
    age:16,
    gender:'male',
    hobbies:['reading','swimming','playing'],

    //OBJECT MEHOD

     Name : function(){
        return  `${ this.firstName}` + ' ' + `${this.lastName}`
     }
}

console.log(person)

console.log(person.firstName+' '+person.lastName)
console.log(person.Name())


//An object is a mutable data structure and we can modify the content of an object after it gets created.

