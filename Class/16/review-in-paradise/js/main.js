// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let faveFood = "Chicken"

faveFood = "Reese's Pieces"

alert(faveFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let randStr = "We are going to be okay."

alert(randStr(randStr[1]))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function randMath(num1,num2,num3){
    let prod = (num1/num2) * num3;
    alert(prod)
}

randMath(7,2,5)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(num){
    console.log(math.cbrt(num))
}

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function isSummer(month){
    let lCMonth = month.toLowerCase()
    if(lCmonth==="june" || lCmonth==="july" || lCmonth==="august"){
        alert("YAY!")
    } else {
        alert("Boo!")
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function noFives(num){
    for(let i = 1; i<=num; i++){
        if(i%5 !== 0){
            console.log(i)
        }
    }
}