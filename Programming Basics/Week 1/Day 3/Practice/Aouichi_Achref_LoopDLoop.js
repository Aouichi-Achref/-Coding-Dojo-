//we need to know when to give candy and when to stop
//starting point for the loop is 2 "2 mile"
//loop should stop at 6 "6 mile"
//the loop will know when to stop by "<=6"
//the number of mile that runner reaches
//wee need to make a variables to store the number of mile


var speed=5.2;// speed the runner reach

for (var mile=2;mile<=6;mile+=2){//loop for every 2 mile
    console.log("take a candy"); //give candy    
}
for (var mile=2;mile<=6;mile+=2){
    if (speed>5.5){//tetsing if runner pas the speed of 5.5
        console.log("take a candy");//give candy
    }else if(speed<5.5){//if spped less than 5.5
        console.log("faster earn your candy!");
    }
}
