//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiplyAll(nums){
    let total = 1
    nums.forEach((x,i) => {
        total = total*x;
    });
    alert(total)
}

multiplyAll([2,3,4])