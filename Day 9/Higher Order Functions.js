 
 //---->Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

 function callback(n){
    return n*n;
 }

 function cube(callback,n){

    //--> here 'callback' function is passed as the paramete , so that why it is called as a callback function 
    return callback(n)*n
 }
 console.log(cube(callback,3))