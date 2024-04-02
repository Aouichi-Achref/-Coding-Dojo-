/* 
Given a string,
return a new string with the duplicates excluded
Bonus: Keep only the last instance of each character.
*/
const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

const str5 = "aabacdc";
const expected = "badc";

/**
 * De-dupes the given string.
 */

function stringDedupe(str) {
    var expect=""
    for(var i=0;i<=str.length-1;i++){
        expect+=str[i]
        for(var j=0;j<=str.length-1;j++){
            if(str[i]===expect[j]){
                // expect.pop(expect[j])
                expect=expect.slice(0, j) + expect.slice(j + 1);
            }
        }        
    }
    return expect
}


var first=stringDedupe(str2)
console.log(first)