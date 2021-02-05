//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1,2,3,4,5,6,7,8,9,10]
let total = 0

nums.forEach((num) =>{
    total += num
    }
)
console.log(total)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newNums = []

nums.forEach((num) =>{
    newNums.push(num**2)
})

console.log(newNums)

//Create a function that takes string
//Print the reverse of that string to the console
function reversedStr(str){
    let newStrArr = []
    for(let i = str.length-1; i>=0; i--){
        newStrArr.push(str[i])
    }
    return newStrArr.join("")
}

console.log(reversedStr("pizza"))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(str){
    let revStr = reversedStr(str)
    if(revStr.toLowerCase() === str.toLowerCase()){
        console.log(`${str} is a palindrome!`)
    } else { 
        console.log(`${str} is not a palindrome!`)
    }
}

isPalindrome("hanNah")
isPalindrome("Charlie")