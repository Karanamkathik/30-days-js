 
 //---->Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

 function callback(n){
    return n*n;
 }

 function cube(callback,n){

    //--> here 'callback' function is passed as the paramete , so that why it is called as a callback function 
    return callback(n)*n
 }
 console.log(cube(callback,3))


 /*Setting time
    In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

     setInterval
     setTimeout


1--->Setting Interval using a setInterval function
In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.*/

// const setInterval(() => {
//     return 'hello'
// }, 2000);

function callback1(){
    console.log('kkkk') 
}

// setInterval(callback1,2000)
// setTimeout(callback1,1000)


//   --->For Each
//forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

const names=['karthik' , 'karanam' , 'kjhh','kjhg','fgi']



const printNames =(element)=>{
    console.log(element)
}

names.forEach(printNames)

const numbers =[22,43,54,2,323]

let sum1 =0;
let sum2 =0;
//console.log(numbers.forEach(num=>sum+=num))
//--->The .forEach() method does not return the accumulated result. Instead, it just executes a function for each element in the array.


const total =(num)=>{
    return sum1+=num
}


numbers.forEach(total)
numbers.forEach(num=>sum2+=num)


console.log(sum2)
console.log(sum1)


const captials =(name)=>{
    console.log(name.toUpperCase())
}

names.forEach(captials)


//map
//--->map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

const numbers2=[9,8,76,2,3]
const usingMapFunction = numbers2.map((number)=>{
    return number*2;
})

console.log(usingMapFunction)

const names2=["kar","car","var","poiuy"]

const changetocaptial=(name)=>{
    return name.toUpperCase();
}
const mapFunction=names2.map(changetocaptial)

console.log(mapFunction)


// const changetosmall =(name1)=>{
//     return name1.toLowerCase();
// }

// const mapFunction1=names2.map((name1)=>{
//     return name1.toLowerCase();
// });

const mapFunction1 =names2.map((name1)=> name1.toLowerCase())
console.log(mapFunction1);


const countries =[
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const mapFunction2 = countries.map((country)=>country.slice(1,3))
 console.log(mapFunction2)


 //-->fliter

 //---Filter out items which full fill filtering conditions and return a new array.

 const filterfunction = countries.filter((country)=>country.includes('land'))
 console.log(filterfunction)

    const numbers3 = [ 2,3,56,43,47,68,90]
 const filterfunction1 = numbers3.filter((number)=>number%2 == 0)
 console.log(filterfunction1)


 const filterfunction2 = countries.filter((country)=>country.length>=8)


 console.log(filterfunction2)

 const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  

const filterfunction3 = scores.filter((element)=>element.score>80)
    .map((element)=>element.name)
console.log(filterfunction3)


//---reduce  ---> returns a single value.

//Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

const numbers4 =[22,12,21,4233,23]

const reducefunction = numbers4.reduce((acc,cur)=> acc+cur,0)

console.log(reducefunction)

//--every -->It returns boolean
//It checks if all elements in the array pass the test implemented by the provided function.

const everyfunction =countries.every((country)=> typeof country == 'string')

console.log(everyfunction)

