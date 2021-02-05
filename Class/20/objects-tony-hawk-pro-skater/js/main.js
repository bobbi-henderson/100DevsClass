//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function makeChar(charName, charBoardColor, charSponsor, charHelmet){
    this.name = charName
    this.boardColor = charBoardColor
    this.Sponsor = charSponsor
    this.Helmet = charHelmet
    this.doFlip = ()=>{
        console.log(`${this.name} did a flip`)
    }
    this.findRamp = ()=>{
        console.log("There is ramp at the skate park down the road.")
    }
    this.changeSong = ()=>{
        alert("now playing new song!")
    }
}