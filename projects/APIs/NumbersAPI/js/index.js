let button = document.querySelector('button')
let answer = document.querySelector('.answer')

button.addEventListener('click', ()=>{
    let num = document.querySelector('input').value
    fetch(`http://numbersapi.com/${num}/trivia`)
        .then(res => res.text()) // parse response as JSON
        .then(data => {
            console.log(data)
            answer.innerHTML = data
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
})
