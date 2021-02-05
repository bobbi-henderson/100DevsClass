//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["This is Us", "The Rookie", "Glee", "Bridgerton"]

tvShows.forEach((x,i) =>{
    console.log(x)
})

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let onlyEven = []

nums.forEach((num,i)=>{
    if(num%2===0){
        onlyEven.push(num)
    }
})

console.log(onlyEven)


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumOfHighandLow(arr){
    let sorted = arr.sort()
    let sum = 0
    for(let i=0; i<sorted.length; i++){
        if(sum === 0 && sorted[i]>sorted[(i-1)]){
            sum += sorted[i]
        } else if(sum !== 0 && sorted[i]===sorted[sorted.length-1]){
            sum += sorted[(i-1)]
            break
        }
    }
    console.log(sum)
}

sumOfHighandLow([2,3,8,7,4,5,1,1,1,8,9,9,2,3,7,6,5,4,9])