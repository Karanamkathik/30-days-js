//4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
  
function  areaOfRectangle(length,width){
    return length*width;
}
console.log(areaOfRectangle(4,765))

const areaOfRectangle2 =(length,width)=> length*width

console.log(areaOfRectangle2(9,9))

//5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function  perimeterOfRectangle(length=50,width){
    return 2*(length+width);
}
console.log(perimeterOfRectangle(89,34))

const perimeterOfRectangle2=(length,width)=>{
    return 2*(length+width)
}
console.log(perimeterOfRectangle2(865,335))

//6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length,width,height){
    return length*width*height
}
console.log(volumeOfRectPrism(223,976,265))

console.log(volumeOfRectPrism(223,976))
