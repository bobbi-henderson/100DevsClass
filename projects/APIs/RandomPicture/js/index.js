let button = document.querySelector('button')
let image = document.querySelector('img')

button.addEventListener('click', ()=>{
    let page = Math.floor(Math.random()*10)
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=30`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let rand = Math.floor(Math.random()*data.length)
        let photo = data[rand]
        image.src = photo.download_url
    })
    .catch(err => {
        console.log(`error ${err}`)
    });  
})