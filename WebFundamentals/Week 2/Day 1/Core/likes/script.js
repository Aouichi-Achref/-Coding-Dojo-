console.log("hello!!")

function upLike(elementNumber) {
	if (elementNumber == 1) {
		document.querySelector("#like1").innerHTML++;
	} else if(elementNumber == 2) {
		document.querySelector("#like2").innerHTML++;
	}else{
        document.querySelector("#like3").innerHTML++;
    }

}