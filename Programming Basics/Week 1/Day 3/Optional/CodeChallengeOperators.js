var numberOfPieces=12;
var numberOfPeople=5;
function howMuchLeftOverCake (piece,people){
    if (piece % people===0){
        console.log("No leftovers for you!");
    }else if(piece % people<=2){
        console.log("You have some leftovers");
    }else if(3<=piece % people && piece % people<=5){
        console.log("You have leftovers to share");
    }else if(piece % people>5){
        console.log("Hold another party!");
    }
}

//howMuchLeftOverCake(numberOfPieces,numberOfPeople);

function maxMinAvg(arr) {
    var arrnew=[];
    var min=arr[0];
    var max=arr[0];
    var sum=0;
    var avg=0;
    for(var i=0;i<arr.length-1;i++){
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
        sum+=arr[i];
    }
    avg=sum/arr.length;
    return arrnew; 
}
maxMinAvg(arr[8,4,2,6,7]);
