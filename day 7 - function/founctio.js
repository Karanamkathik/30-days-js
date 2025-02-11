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


