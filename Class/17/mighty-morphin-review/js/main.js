// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "CHRISTMAS"

favHoliday = "Thanksgiving"

console.log(favHoliday.toUpperCase())

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let randString = "I am the greatest that there ever was!"

console.log(randString.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNums(n1,n2,n3,n4,n5){
    let total = 100
    let minus = total - n1 - n2 - n3 - n4 - n5
    return Math.abs(total-minus)
}

console.log(fiveNums(1,1,1,1,1))

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNums(n1,n2,n3){
    console.log(Math.min(n1,n2,n3))
    console.log(Math.max(n1,n2,n3))
}

threeNums(1,2,3)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails(){
    let hTArr = ["heads", "tails"]
    let rnd = Math.floor(Math.random() *hTArr.length)
    console.log(hTArr[rnd])
}

// headsOrTails()

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function repeatStuff(num){
    for(let i = 1; i<=num; i++){
        headsOrTails()
    }
}

repeatStuff(25)