var who="achref";
var when="20:17,10/10/2023";

function greet (person,time){
    if (person =="Count Dooku" ){
        console.log("I'm coming for you, Dooku!");  
    }else{
        console.log("today is "+time+ " Good day, " + person);
    } 
}
greet(who,when)
greet("Count Dooku",when)