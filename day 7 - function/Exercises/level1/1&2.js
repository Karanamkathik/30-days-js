/* Declare a function fullName and it print out your full name.*/
function fullname1(){
    let firstName = 'karanam'
    let lastName ='karthik'
    console.log(firstName + ' ' + lastName);
}
fullname1();

function fullname2(){
    let firstName = 'karanam'
    let lastName ='karthik'

    return firstName+' '+lastName
}
console.log(fullname2());

function fullname3(first,second){
    let firstName=first
    let lastName = second
   return firstName+' '+lastName
}

console.log(fullname3('karthik','karanam'));