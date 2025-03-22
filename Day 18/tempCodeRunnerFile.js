
// const promise = new Promise((resolve, reject) => {
//    resolve('sucessful')
//    reject('failed')
// })

// const dosomething = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       const skill =["html","css","js"]
//       if(skill.lenght>0){
//          resolve(skill);
//       }else{
//          reject('no skills')
//       }
//    },5000)
// })

// dosomething.then(result=>{
//    console.log(result)
// })
// .catch(error=>console.log(error))

// const anotherPromise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//    const arr =['html','css','js']
//    if(arr.includes('node')){
//       resolve('node is included')
//    }else{
//       reject('node is not included')
//    }
//   },2000)
// })

// anotherPromise.then(result=>{
//    console.log(result)

// })
// .catch(error=>console.log(error))

// const url = 'https://restcountries.com/v2/all' 
// fetch(url)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error=>console.log(error))