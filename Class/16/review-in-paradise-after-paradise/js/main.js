// Create a function that takes in an array. 
//If the first number, is less than the last number, alert "Hi".
// If the first number is greater than the last number, alert "Bye". 
//If they are equal, alert "We close in an hour".
function hiBye(newArr){
    let lastNum = newArr.length - 1
    if(newArr[0]<newArr[lastNum]){
        alert("Hi")
    } else if (newArr[0]>newArr[lastNum]){
        alert("Bye")
    } else {
        alert("We close in an hour.")
    }
}

hiBye([342,543,234,62,13543,342])