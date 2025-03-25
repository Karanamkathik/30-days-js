/*  
The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text or string only.

JSON is a light weight data format for storing and transporting


The difference is the key of a JSON object should be with double quotes or it should be a string. 

-->Converting JSON to JavaScript Object
  
   Mostly we fetch JSON data from HTTP response or from a file, but we can store the JSON as a string and we can change to Object for sake of demonstration.

   In JavaScript the keyword JSON has parse() and stringify() methods.
  
   When we want to change the JSON to an object we parse the JSON using JSON.parse().
   
   When we want to change the object to JSON we use JSON.stringify().
*/


/*
    JSON.parse()

    JSON.parse(json[, reviver])
// json or text , the data
// reviver is an optional callback function
 JSON.parse(json, (key, value) => {

})

*/
const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`

    const userObj = JSON.parse(usersText)
    console.log(userObj)

    /*
        JSON.stringfy()

        When we want to change the object to JSON we use JSON.stringify(). The stringify method takes one required parameter and two optional parameters. The replacer is used as filter and the space is an indentations. If we do not want to filter out any of the keys from the object we can just pass undefined.

        JSON.stringify(obj, replacer, space)
        // json or text , the data
       // reviver is an optional callback function
    */
   const userobjStringfy = JSON.stringify(userObj)
   console.log(userobjStringfy)
   

   //in js .json()  returns a promise.
   //https://chatgpt.com/c/67df9330-7770-800a-9b1a-eac75ca04ee4