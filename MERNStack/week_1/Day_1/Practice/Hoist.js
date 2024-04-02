console.log('----1------')
// ----1-----
console.log(hello);       //undeefined                          
var hello = 'world';                                 
//AFTER HOISTING BY THE INTERPRETER
var hello;
console.log(hello) //undeefined  
hello='world'


console.log('-----2-----')
// -------2-------
var needle = 'haystack';
test();         //magnet
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//AFTER HOISTING BY THE INTERPRETER
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test(); //magnet

console.log('-----3-----')
// -----3-----
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);  //super cool
//AFTER HOISTING BY THE INTERPRETER
var brendan;
brendan='super cool'
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);  //super cool

console.log('-----4-----')
// -----4-----
var food = 'chicken';
console.log(food); // chicken
eat(); // half-chicken
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//AFTER HOISTING BY THE INTERPRETER
var food;
food='chicken'
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
console.log(food); //chicken
eat(); // half-chicken

console.log('-----5-----')
// -----5-----
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//AFTER HOISTING BY THE INTERPRETER
var mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food);


console.log('-----6-----')
// -----6-----
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//AFTER HOISTING BY THE INTERPRETER
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);


console.log('-----7-----')
// -----7-----
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//AFTER HOISTING BY THE INTERPRETER
var dojo;
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

console.log('-----8 - Bonus ES6: const-----')
// -----8 - Bonus ES6: const-----
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//AFTER HOISTING BY THE INTERPRETER
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));