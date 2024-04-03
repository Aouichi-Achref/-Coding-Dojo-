
class Ninja{
    constructor(name,health=90,speed=3,strength=3){
        this.name=name
        this.health=health
        this.speed=speed
        this.strength=strength
        
    }
    sayName(){
        console.log(this.name)
        return this
    }
    showStats(){
        console.log(`name= ${this.name}-->health= ${this.health}-->speed= ${this.speed}-->strength= ${this.strength}`);
        return this
                
        }
    drinkStats(){
        this.health+=10
        return this
    }

}
class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health=200
        this.speed=10
        this.strength=10
        this.wisdom=10
    }
    speakWisdom(){
        super.drinkStats
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        return this
    }
}
const superSensei = new Sensei("Master YI");
superSensei.speakWisdom();
superSensei.showStats();
const ninja1 = new ninja("Madara");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkStats();
ninja1.showStats();
console.log("-----------------------------------");
ninja1.sayName().showStats().drinkStats().showStats();
