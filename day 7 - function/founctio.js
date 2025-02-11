/*MAIN POINT'S

Function : A function is a resuable code or programming statements that designed to performe certain tasks.

a function take a parameter ,then while callong the function we call with argument .

function can be declared or created in couple of ways:

   Declaration function
   Expression function
   Anonymous function
   Arrow function


*/
function fullName(){
   let firstName = 'karthik'
   let lastName = 'karanam'
   return firstName+" "+lastName
}

console.log(fullName())

function sum(a,b){
    let sum = a+b
    return sum
}

console.log(sum(69,96))

//we can pass as many parameters as we like .we need to just pass those numbers of arguments whike calling the function other wise ,those which as  not called with arguments  are decleared as undefined


function sumArray(arr){
   let sum =0
   for(const element of arr){
      sum = sum +element
   }
   return sum
}

const numbers=[1,24,323,53,543]
console.log(sumArray(numbers))

//  ARROW FUNCTION VS FUNCTION DECELARATION.
 function print(){
    console.log(arguments)
    //array of arguments . Argument objet
    //The arguments object is a local variable that contains the arguments passed to the function when called. 
 }
 print(1,2,3,4,5,6,7,8,9)
 print("karthi",22,true)

 // This arrguments obeject does not exist in arrow  function 

const sumation =()=>{
    let addition = 0
    for(let i =0 ;i<arguments.length;i++){
        addition+=arguments[i]

    }
    return addition
}
console.log(sumation(13,21,343,457,46))
//this show a error as arguments object does not exsist in arrow function

//we can use rest parameter to solve this issue

const Sumation =(...arg)=>{
    let addition = 0
    for(const element of arg){
       addition+=element    
    }
    return addition
}
console.log(Sumation(13,21,343,457,46))

const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  console.log(changeToUpperCase(countries))
  
  