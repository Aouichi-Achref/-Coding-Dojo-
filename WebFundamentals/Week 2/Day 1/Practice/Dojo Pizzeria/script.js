

function pizzeriaOven(crustType, sauceType, cheeses,toppings) {
    var piza ={};
    piza.crustType = crustType;
    piza.sauceType = sauceType;
    piza.cheeses = cheeses;
    piza.toppings = toppings;
    return piza;
}

var p1 = pizzeriaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzeriaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3= pizzeriaOven("deep dish", "traditional", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(p3);

var p4= pizzeriaOven("hand tossed", "marinara", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p4);


function randomPizza(crustType, sauceType, cheeses,toppings) {
    var piza ={};
    var randcrust= crustType[Math.floor(Math.random()*crustType.length)];
    var randsauce= sauceType[Math.floor(Math.random()*sauceType.length)];
    var  randcheeses= cheeses[Math.floor(Math.random()*cheeses.length)];
    var randToppings= toppings[Math.floor(Math.random()*toppings.length)];

    piza.crustType = randcrust;
    piza.sauceType = randsauce;
    piza.cheeses = randcheeses;
    piza.toppings = randToppings;
    
    return piza;
}

var randpiza= randomPizza(["hand tossed","deep dish"], ["marinara","traditional"],[["mozzarella", "feta"],["mozzarella"]],
[["pepperoni", "sausage"],["mushrooms", "olives", "onions"]]);
console.log("random pizza is ",randpiza);