// card class
class Card{
    constructor(name,cost){
        this.name=name
        this.cost=cost
    }
}
// unit class 
class Ninja extends Card{
    constructor(name,cost,power,resilience){
        super(name,cost)
        this.power =power
        this.resilience=resilience
    }
    attack(target){
        target.resilience-=this.power
    }
}
// effect class
class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost)
        this.text=text
        this.stat=stat
        this.magnitude=magnitude
    }
    play( target ) {
        if( target instanceof Ninja ) {
            if (this.stat=="resilience") {
                target.resilience+=this.magnitude
            }
            else if (this.stat=="power") {
                target.power+=this.magnitude
            }
            console.log(this.text)
            return this
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
// making instances (units)
const redBeltNinja = new Ninja("redNinja",3,3,4);//MAKE RED BeLT NINJA


const blackBeltNinja = new Ninja("black Ninja",4,5,4); //make black belt ninja
// making instances (effect)
const hardAlgorithm = new Effect("hard Algorithm",2,"increase target's resilience by 3","resilience",3);//make Hard Algorithm 
const unhandledPromiseRejection = new Effect("unhandled_Promise_Rejection",1,"reduce target's resilience by 2","resilience",-2)// MAKE Unhandled Promise Rejection
const PairProgramming = new Effect("pair_Programming",3,"increase target's power by 2","power",+2) //MAKE Unhandled Promise Rejection

// play scenario

unhandledPromiseRejection.play(redBeltNinja)
hardAlgorithm.play(redBeltNinja);
PairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)
