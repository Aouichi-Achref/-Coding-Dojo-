
//Print odds 1-20
console.log("print odds 1-20");
for(var i=1;i<=20;i++){
    if(i%2 !=0){
        console.log(i);
    }
}

//Decreasing Multiples of 3
console.log("decreasing multiples of 3");
for(var i=100;i>=0;i--){
    if(i%3 ==0){
        console.log(i);
    }
}

//Print the sequence
console.log('print the sequence')
var arr=[4,2.5,1,-0.5,-2,-3.5];
for(var i=0;i<=arr.length-1;i++){
    console.log(arr[i]);
}
console.log('print the sequence secend try');
for(var i=4;i>-4;i-=1.5){
    console.log(i);
}



//Sigma
console.log('sigma');
var sum=0;
for(var i=1;i<=100;i++){
    sum+=i;
}
console.log(sum)


//Factorial 1-12
console.log('factorial');
var product=1;
for(var i=1;i<=12;i++){
    product*=i;
}
console.log(product);



