/* 
Acronyms
Create a function that, given a string, returns the string’s acronym 
(first letter of each word capitalized). 
Do it with .split first if you need to, then try to do it without
*/

const strA = "object oriented programming";
const expectedA = "OOP";

// The 4 pillars of OOP
const strB = "abstraction polymorphism inheritance encapsulation";
const expectedB = "APIE";

const strC = "software development life cycle";
const expectedC = "SDLC";

function acronomize(str) {
    // split()-->
    // console.log(str.split(" "));
    expct = ""
    arr = str.split(" ")
    for (var i = 0; i <= arr.length - 1; i++) {
        growFirstLetter = newStr[i][0]
        expct.puch(growFirstLetter.toUpperCase())
        return expct
    }
}


console.log(strA)
newStr = acronomize(strA)
console.log(newStr)




//- Bonus: ignore extra spaces
// const strD = "  global   information tracker    ";
// const expectedD = "GIT";