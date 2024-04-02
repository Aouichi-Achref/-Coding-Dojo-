/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid

Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
*/
const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

const str5 = "a)b((c))";
const expected5 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

function parensValid(str) {
    var testsarr=[]
    for(var i=0;i<=str.length-1;i++){
        if(str[i]==="("){
            testsarr.push(str[i])
        }else if(testsarr.length===0 && str[i]===")"){
            testsarr.push(str[i])
        }else if(str[i]===")"){
            testsarr.pop()
        }
    }
    if(testsarr.length===0){
        return true
    }else{
        return false
    }
}



var first=parensValid(str1)
var seconde=parensValid(str2)
var third=parensValid(str3)
var fourth=parensValid(str4)
var fifth=parensValid(str5)


console.log("expect1:",expected1,"result:",first)
console.log("expect2:",expected2,"result:",seconde)
console.log("expect3:",expected3,"result:",third)
console.log("expect4:",expected4,"result:",fourth)
console.log("expect:",expected5,"result:",fifth)