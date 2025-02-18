 
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
