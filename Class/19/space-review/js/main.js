//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1,2,3,4,5,6,7]
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(nums.reduce(reducer))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareAll(arr){
    return arr.map(num => num**2)
}

console.log(squareAll(nums))

//Create a function that takes string
//Print the reverse of that string to the console
function reversedStr(str){
    let newStr = str.split("").reverse().join("")
    return newStr
}

console.log(reversedStr("this is the coolest string ever"))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(str){
    let reversed = reversedStr(str)
    alert(str === reversed)
}

isPalindrome('bobbi')