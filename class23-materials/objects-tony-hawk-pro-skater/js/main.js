//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function ProSkater (skateMake, skatePlayer, skateMusic, numOfWheels){
    this.skateboard = skateMake
    this.player = skatePlayer
    this.song = skateMusic
    this.wheels = numOfWheels
    this.trick = function(){
        alert('Olley')
    }
    this.speed = function(){
        alert(`With this amount of wheels ${this.wheels} your speed is 20mph`)
    }
    this.taunt = function(){
        console.log(`Don't make me use my special move!`)
    }
}

let tonyHawk = new ProSkater('holley', 'player1', 'speedofsound', 4)