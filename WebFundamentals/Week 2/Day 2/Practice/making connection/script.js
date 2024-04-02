console.log("hello!!")

function changeName(id) {
    var name ="aymen aouichi"
    document.querySelector(id).innerHTML=name
    return 
}


var requestSpan= document.querySelector('#requestNumb');
var connectionSpan=document.querySelector('#connectionNumb');


function accept(id){
    var element =document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function hide(id){
    var element=document.querySelector(id);
    element.remove()
    requestSpan.innerText--;
}