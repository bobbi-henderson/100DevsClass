document.querySelector('#calculate').addEventListener('click', ()=>{
    let num1 = parseInt(document.querySelector('#num1').value)
    let num2 = parseInt(document.querySelector('#num2').value)

    let operation = document.querySelector('#operation').value

    if (operation == 'plus'){
        document.querySelector('#answer').innerHTML = `The answer is ${num1 + num2}`
    } else if (operation == 'minus'){
        document.querySelector('#answer').innerHTML = `The answer is ${num1 - num2}`
    } else if (operation == 'multiply'){
        document.querySelector('#answer').innerHTML = `The answer is ${num1 * num2}`
    } else if (operation == 'divide'){
        document.querySelector('#answer').innerHTML = `The answer is ${num1 / num2}`
    } 
})