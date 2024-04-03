
class ninja{
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
const ninja1 = new ninja("Madara");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkStats();
ninja1.showStats();
console.log("-----------------------------------");
ninja1.sayName().showStats().drinkStats().showStats();