/*
   A Promise is a way to handle asynchronous operations in JavaScript.
   It represents a value that may not be available yet, but will be resolved at some point in
   the future.
   This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
   
      
*/

//promise constructure
//We can create a promise using the Promise constructor.
//  We can create a new promise using the key word new followed by the word Promise and followed by a parenthesis.
//  Inside the parenthesis, it takes a callback function. 
// The promise callback function has two parameters which are the resolve and reject functions.
const promise = new Promise((resolve, reject) => {
   resolve('sucessful')
   reject('failed')
})

const dosomething = new Promise((resolve,reject)=>{
   setTimeout(()=>{
      const skill =["html","css","js"]
      if(skill.lenght>0){
         resolve(skill);
      }else{
         reject('no skills')
      }
   },5000)
})

dosomething.then(result=>{
   console.log(result)
})
.catch(error=>console.log(error))

const anotherPromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
   const arr =['html','css','js']
   if(arr.includes('node')){
      resolve('node is included')
   }else{
      reject('node is not included')
   }
  },2000)
})

anotherPromise.then(result=>{
   console.log(result)

})
.catch(error=>console.log(error))

const url = 'https://restcountries.com/v2/all' 
fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch(error=>console.log(error))