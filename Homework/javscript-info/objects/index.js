// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {}

user.name = "John"
user.surename = "Smith"
user.name = "Pete"


delete user.name

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise

let empty = {}
 
function isEmpty(obj){
    return Object.keys(obj).length === 0;
}

// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

function sumSal(obj){
    let total = 0
    for(let key in obj){
        total += obj[key]
    }
    return total
}

console.log(sumSal(salaries))

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

function multiplyNumeric(obj){
    for(let key in obj){
        if(obj[key] === parseInt(obj[key])){
            obj[key] = obj[key]*2
        }
    }
    return obj
}

console.log(multiplyNumeric(salaries))

user.points = 100
user.car = false
user.kids = 2

console.log(multiplyNumeric(user))