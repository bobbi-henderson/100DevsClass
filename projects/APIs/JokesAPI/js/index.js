let button = document.querySelector('.getJoke')
let joke = document.querySelector('#joke')
let delivery = document.querySelector('#delivery')
let what = document.querySelector('#what')


button.addEventListener('click', ()=>{
    fetch(`https://v2.jokeapi.dev/joke/coding`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.type === 'twopart'){
                joke.innerHTML = data.setup
                what.classList.remove('hidden')
                delivery.classList.add('hidden')
                what.addEventListener('click', ()=>{
                    delivery.classList.remove('hidden')
                    delivery.innerHTML = data.delivery
                })
            } else if(data.type === 'single'){
                what.classList.add('hidden')
                delivery.classList.add('hidden')
                joke.innerHTML = data.joke
            }
        })
        .catch(err => {
            console.log(err)
        })
})