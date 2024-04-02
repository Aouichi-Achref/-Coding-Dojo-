// latte befor 10m
// hot choclot between 10am and 4pmm
// ice cream between 4pm and 10pm
//sleep after 10 pm
// check am or pm
// can add loop for 7 days
//cechk by (if {} else if{})condition
// array container for the reward time

function randNumb() {
    var randit=0;
    randit=Math.floor(Math.random() * 2);
    return randit;
}

var rwrdTime=[4,"pm","monday"];

if(rwrdTime[1]=="am"){
    if (rwrdTime[0]<10){
        console.log("i want my latte");
    }else{
        console.log("hot choclot is the best");
    }    
}else if(rwrdTime[1]=="pm"){

    if (rwrdTime[0]<=3){
        console.log("hot choclot for ever");
    }
    else if(rwrdTime[0]>3 && rwrdTime[0]<=6){
        if(rwrdTime[0]%2 ===0){
            if(rwrdTime[2]!="Wednesday"){
                if(randNumb()==0){
                    console.log("ice cream time!! want vanilla");
                }else if(randNumb()==1){
                    console.log("i think il take cookies"); 
                }else {
                    console.log("candy for today"); 
                }
            }else{
                console.log("ice cream time!! wait its Wednesday I want strawberry");
            }

        }else{
            if(randNumb()==0){
                console.log("i think il take a hot choclot today");
            }else if(randNumb()==1){
                console.log("i think il take a tea today");
            }else{
                console.log("i feel hungry!! i will take a cake")
            }
        }
    }else if(rwrdTime[0]>=10){
            console.log("my minde stat burning i need to sleep");
    }else{
        if(rwrdTime[2]!="Wednesday"){
            console.log("ice cream time!! I want vanilla");
        }else{
            console.log("ice cream time!! wait its Wednesday I want strawberry"); 
        }
    }
}

