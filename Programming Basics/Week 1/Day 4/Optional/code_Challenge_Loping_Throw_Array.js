// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

var sum2=0;
//loop 1
for(var i=0;i<=arr1.length-1;i++){// loop that go throw every index
    console.log(arr1[i]);//print value in the index
}
//loop2
for(var j=0;j<=arr2.length-1;j++){// loop that go throw every index
    sum2+=arr2[j];//add the value of index to the sum
    console.log("for index "+j+"the sum= "+sum2);//print index and sum
}
//loop3
for(var h=0;h<=arr3.length-1;h++){// loop that go throw every index
    if(arr3[h]>5){//check each value greater than 5or no
        console.log(arr3[h])//print the value greater than 5
    }else{//if the value equal or less than 5
        arr3[h]= "No dice.";//replace value with "No dice."
    }
}