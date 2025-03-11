//--->sets

//   in js Set is a collection of elements. Set can only contains unique elements

const emptySet = new Set()
//In JavaScript, Set is a built-in constructor function used to create a new Set object. 
console.log(emptySet)

const names =[
    "John",
    "Mary",
    "John",
    "Mary",
    "John",
    "Mary",
    "karthik",
    "naveen"

]

const setOfNames = new Set(names)

console.log(setOfNames)
//Set is a collection of unique elements. So it will remove the duplicate elements from the array.

//Set is an iterable object and we can iterate through each elements.
//We can use for...of loop to iterate through each elements of the set.
for (const name of setOfNames){
    console.log(name);
}

console.log(setOfNames.size)
//Set has a property called size which returns the number of elements in the set.
console.log(names.length)
//Array has a property called length which returns the number of elements in the array.


//Set has a method called add() which adds an element to the set.

setOfNames.add("manoj")
console.log(setOfNames)

setOfNames.add(5)

console.log(setOfNames)
//this means Set in js  can have both sting and num in same Set. 
//Yes, in JavaScript, a Set can contain both strings and numbers in the same collection. This is because JavaScript's Set stores unique values of any type, including primitives (like numbers, strings, and booleans) and objects.
    const setOfNames1 = new Set()
for(const name of names){
      setOfNames1.add(name)
}
console.log(setOfNames1)
//Set has a method called delete() which removes an element from the set.
setOfNames1.delete("John")
console.log(setOfNames1)


//Set has a method called has() which returns true if the element is present in the set,
//otherwise it returns false.

console.log(setOfNames.has('karthik'))
console.log(setOfNames.has(10))

//Set has a method called clear() which removes all elements from the set.
setOfNames1.clear()
console.log(setOfNames1)


const languages = [
    'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const lanSet =  new Set(languages)
console.log(lanSet)

const counts =[]


for(const l of lanSet){
          const filteredLan = languages.filter((lan)=>lan === l)
          

          counts.push({lang:l , count:filteredLan.length})
          console.log(filteredLan) 
          

}
console.log(counts)

//from above set and filter method we are able get language couny in a array.-->usefull while soving dsa in js

//down below is union of sets
let a = [1,3,5,7,9]
let b=[2,4,6,8,0]

let c =[...a,...b]
console.log(c)

const C = new Set(c)
console.log(C)


//Intersection os sets

let first=[1,2,3,6,5,8]
let second=[2,4,6,8,0]

let A = new Set(first)
let B = new Set(second)

let all = [...first,...second]
console.log(all)

const allSet = new Set(all)
console.log(allSet)

let third = a.filter((num)=>B.has(num))
let C1 = new Set(third)
console.log(C)

//-->Maps  --The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value

const map = new Map()

console.log(map)

console.log(map.size)

const countries = [["india","pak"],["aus","eng"]]

const countriesMap = new Map(countries)

console.log(countriesMap)

countriesMap.set("sri","ban")
console.log(countriesMap)


console.log(countriesMap.get("india"))

console.log(countriesMap.has("sri"))

console.log(countriesMap.has("eng")) //so we can check with only with key but not with value

for(const counrty of countriesMap){
    console.log(counrty)
}

for(const [country,enimie] of countriesMap){
    // console.log(country)
    // console.log(enimie)

    console.log(country,enimie)
}
