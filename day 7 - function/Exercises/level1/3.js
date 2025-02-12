function addNumbers(first ,second){
    let sum = first +second
       return sum;
}
console.log(addNumbers(34,66))

const addNumbers2=(first, second)=>{
  let sum = first +second
  return sum;
}
console.log(addNumbers2(8676,894))

const addNumbers3=(telugu=98,english)=>{
     let sum = telugu+english
     return sum;
}
console.log(addNumbers3(90))
console.log(addNumbers3(99,90))

const addNumbers4=({telugu=98,english})=>{
     return telugu+english
}
console.log(addNumbers4({english:99}))