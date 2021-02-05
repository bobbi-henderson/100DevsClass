//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
let button = document.querySelector("button")
let image = document.querySelector("img")
let iframe = document.querySelector("iframe")
let name = document.querySelector("h2")
let description = document.querySelector("h3")

button.addEventListener('click', ()=>{
    let date = document.querySelector("input").value
    try {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=giLOKSRbKoQIw7Wd7b7Z1L3beiGMHUdOWPNe8rfC&date=${date}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.media_type === "image"){
                // iframe.src = ""
                iframe.classList.add("hidden")
                image.src = data.hdurl
                console.log(data.copyright)
                if(data.copyright == undefined){
                    name.innerHTML = "Unaccredited"
                } else {
                    name.innerHTML = data.copyright
                }
                description.innerHTML = data.explanation
            } else {
                iframe.classList.remove("hidden")
                image.src = ""
                iframe.src = data.url
                if(data.copyright == undefined){
                    name.innerHTML = "Unaccredited"
                } else {
                    name.innerHTML = data.copyright
                }
                description.innerHTML = data.explanation
            }
        })
    } catch(error){
        console.log(error)
    }
})