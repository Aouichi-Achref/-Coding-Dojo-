

function change(element) {
    if (element.innerText == "login") {
        element.innerText = "logout";
    } else {
        element.innerText = "login";
    }
}

function hide(button) {
    setTimeout(function(){
        button.remove();
    },3000)
}

function like(i) {
    alert("ninja was liked");

}

function over(element) {
    element.style.backgroundColor = "coral";
}

function out(element) {
    element.style.backgroundColor = "green"

}

