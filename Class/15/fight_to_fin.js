//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["Frozen", "Up", "Peter Pan", "Aladdin", "Tangled"]

movies.forEach((x,i)=>
    document.querySelector("h2").innerText += x;
)

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let numbers = [1,2,3,4,5]
numbers.forEach((x,i)=> numbers[i] = x+3)

//Find the average of all the numbers from question two
total = 0

numbers.forEach((x,i)=> total+=x)

return total/numbers.length