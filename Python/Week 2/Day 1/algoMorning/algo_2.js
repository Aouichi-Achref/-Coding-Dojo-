/* 
Given an array of strings
return the number of times each string occurs (a frequency / hash table)
hasOwnProperty()
*/
var user = {username:"John", age:35}

// console.log(user.hasOwnProperty('age'));
// console.log(user.hasOwnProperty('email'));

const arr1 = ["a", "a", "a"];
const expected1 = {
a: 3,
};
const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
a: 2,
b: 1,
c: 3,
B: 1,
d: 1,
};

const arr3 = [];
const expected3 = {};

function makeFrequencyTable(arr) {
    expect={}
    for(var i=0;arr.length-1;i++){
        if(expect.hasOwnProperty([arr[i]])){ //check if we have key word
             expect[arr[i]]+=1  //if we have key word add 1 to value
        }else{ //check if we dont have thi key word
            expect[arr[i]]=1 //add a new key word and add a value of 1 
        }
    }
}