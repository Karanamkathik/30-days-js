/*
   scopes can  ----local
                   global
    
*/
//--->Any  varible that decelared without  let ,const,var   are    GLOBAL 
//window object scope...
a=10
b=764
function scope(){
    console.log(a,b)
    if(true){
        console.log(a+b)
    }
}
console.log(a+b)
scope()


/*Global scope
A globally declared variable can be accessed every where in the same file. But the term global is relative. It can be global to the file or it can be global relative to some block of codes.*/


let a1 = 'JavaScript'
let b1 = 10 
function letsLearnScope() {
  console.log(a1, b1) 
  if (true) {
    let a1= 'Python'
    let b1 = 100
    console.log(a1, b1)
  }
  console.log(a1, b1)
}
letsLearnScope()
console.log(a1, b1) 

/* Local scope
    A variable declared as local can be accessed only in certain block code.

    Block Scope
    Function Scope 

 Now, you have an understanding of scope.
  A variable declared with var only scoped to function but variable declared with let or const is block scope(function block, if block, loop block, etc). Block in JavaScript is a code in between two curly brackets ({}).*/



function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
   console.log(gravity)
  
  if (true){
    var gravity = 9.81
    console.log(gravity) 
  }
  console.log(gravity)  

  for(var i = 0; i < 3; i++){
    console.log(i) 
  }
  console.log(i) 

  /*
          MAIN POINTS

        1. anything decelared without lrt,var,const----global varible
        2. var is function scope(npt to block scope , if we decelar in block then can access in out)
        3. let and const are block scope
  */