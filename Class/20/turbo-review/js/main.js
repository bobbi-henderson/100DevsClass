// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let sentence = "You are worthy of love."

console.log(sentence.repeat(15))
//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] 

console.log(letters.join(""))

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function rpsls(){
    let arr = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    let rand = Math.floor(Math.random()*arr.length)
    return arr[rand]
}

console.log(rpsls())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
function yourChoice(choice) {
    let botChoice = rpsls()
    let bot = botChoice.toLowerCase()
    let ch = choice.toLowerCase()
    if (ch === bot){
        console.log(`Tie! You both chose ${ch.toUpperCase()}!`)
    } else if (ch === "rock" && bot === "spock"||ch === "rock" && bot === "paper" || ch === "paper" && bot === "scissors"||ch === "paper" && bot === "lizard"||ch === "scissors" && bot === "rock"||ch === "scissors" && bot === "spock"||ch === "spock" && bot === "paper"||ch === "spock" && bot === "lizard"||ch === "lizard" && bot === "rock"||ch === "lizard" && bot === "scissors"){
        console.log(`Your choice: ${ch.toUpperCase()} lost to ${bot.toUpperCase()}!`)
    } else {
        console.log(`Your choice: ${ch.toUpperCase()} beat ${bot.toUpperCase()}!`)
    } 
}
let myChoice = rpsls()
yourChoice(myChoice)
