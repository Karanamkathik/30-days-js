const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//1.Find the person who has many skills in the users object.

let mostskill=0
let mostskilluser=""

for(const user in users){
  if(users[user].skills.length>mostskill){
    mostskill=users[user].skills.length
    mostskilluser=user
  }
}
console.log(mostskilluser+' '+mostskill)

let person =Object.entries(users);

//---> Object.entries(users) converts the users object into an array of key-value pairs.
// Each element in persons is an array with two items:

// The username (e.g., "Alex")
// The user object (e.g., { email: 'alex@alex.com', skills: [...], age: 20, ... })

// console.log(person)
// console.log(users)
let most= 0
let skilluser=''

for(const [name,details] of person){
  if(details.skills.length>most){
    most=details.skills.length
    skilluser=name
  }
}

console.log(skilluser+' with '+most+' skills.')

//2.Count logged in users, count users having greater than equal to 50 points from the following object.
 const q2=()=>{
let loggedinusers=0
let userswithpoints=0
let userswithpoints50=0

for(const user in users){
  //for...in loops over the keys (usernames like "Alex", "Asab", etc.), not the user objects.
     if(users[user].isLoggedIn == true){
      loggedinusers++
     }
     if(users[user].points>=50){
      userswithpoints50++
     }
}
console.log('Logged in users: '+loggedinusers)
console.log('Users with points: '+userswithpoints50)
 }

 q2()

 



