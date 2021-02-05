// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = "I am a sentence?"
if(sentence[sentence.length-1] === "?"){
    alert("is a question")
} else{
    alert("is not a question")
}
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let promotion = "jr. dev racecar jr. dev boom"

console.log(promotion.replaceAll('jr. dev', 'software engineer'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rPS(){
    let rpsArr = ["rock", "paper", "scissors"]
    let rand = Math.floor(Math.random()*rpsArr.length)
    return rpsArr[rand]
}


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