// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "Diet Dr Pepper"

console.log(favDrink.split(" ").join(""))

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multipleWords = "We are the best that there every was. because we love love love and banana!"

if(multipleWords.includes('apple')){
    console.log("We love apples!!!")
} else {
    console.log("Boo!!! no apple!")
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rPS(){
    let arr = ["Rock", "Paper", "Scissors"]
    let rand = Math.floor(Math.random()*arr.length)
    return arr[rand]
}

console.log(rPS())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function yourChoice(choice) {
    let botChoice = rPS()
    let bot = botChoice.toLowerCase()
    let ch = choice.toLowerCase()
    if (ch === bot){
        console.log(`Tie! You both chose ${ch.toUpperCase()}!`)
    } else if (ch === "rock" && bot === "paper"||ch === "paper" && bot === "scissors"||ch === "scissors" && bot === "rock"){
        console.log(`You lost to ${bot.toUpperCase()}!`)
    } else {
        console.log(`You beat ${bot.toUpperCase()}!`)
    } 
}

yourChoice("paper")

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function multiPlays(arr){
    arr.forEach((play, i)=>{
        yourChoice(arr[i])
    })
}

multiPlays(["rock", "paper", "scissors"])