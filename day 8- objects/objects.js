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

person.nationaliy = 'india'
person.college = 'IIIT BH'
person.hobbies.push('cricket')
person.hobbies.push('chess')
 

console.log(person)

const copyPerson = Object.assign({}, person)
console.log(copyPerson)


//gETTING VALUES---.we get values as arrays
  const values = Object.values(person)
  console.log(values)

  //Getting ---Keys of object

  const keys =Object.keys(copyPerson)
  console.log(keys)

  const keys1 =Object.keys(person.hobbies)
  console.log(keys1)


  const values1=Object.values(person.hobbies)
  console.log(values1)

  const entries = Object.entries(copyPerson)
console.log(entries)