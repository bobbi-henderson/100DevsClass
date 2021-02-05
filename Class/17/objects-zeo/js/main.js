//Create a stopwatch object that has four properties and three methods
let stopwatch = {}

stopwatch.color = "black"
stopwatch.shape = "round"
stopwatch.time = "1:00PM"
stopwatch.rope = true

stopwatch.start = () =>{
    console.log("Started counting")
}

stopwatch.stop = () =>{
    console.log("Stopped counting")
}

stopwatch.sayColor = () => {
    console.log(stopwatch.color)
}

