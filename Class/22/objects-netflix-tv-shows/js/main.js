//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class makeNetflixShow{
    constructor(title, category, runTime, leadActor, totalEpisodes){
        this.title = title
        this.category = category
        this.time = runTime
        this.lead = leadActor
        this.episodes = totalEpisodes
    }
    playShow(){
        console.log(`now playing episode 1 of ${this.episodes}`)
    }
    likeShow(){
        console.log(`You have liked ${this.title}`)
    }
    addToQueue(){
        console.log(`${this.title} has been added to youe queue!`)
    }
}
