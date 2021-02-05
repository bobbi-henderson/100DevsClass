//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let button = document.querySelector('button')
let image = document.querySelector('img')
let name = document.querySelector('h2')
let instructions = document.querySelector('h3')
let ingredients = document.querySelector('.ingredients')

button.addEventListener('click', ()=>{
    let drinkity = document.querySelector("input").value
    let drink = drinkity.split(' ').join('_')
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            let firstRes = data.drinks[0]
            image.src = firstRes.strDrinkThumb
            name.innerHTML = firstRes.strDrink
            instructions.innerHTML = firstRes.strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
})
