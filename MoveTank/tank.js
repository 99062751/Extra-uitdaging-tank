var image = document.getElementById("image");
var bulletimg = document.getElementById("image");



var positieX= parseInt(window.getComputedStyle(image).backgroundPositionX);
var positieY= parseInt(window.getComputedStyle(image).backgroundPositionY);

var bulletX= bulletimg.style.backgroundPositionX= 336;
var bulletY= bulletimg.style.backgroundPositionY= 170;

var numberRight= 84;
var numberRight2= 5;
var numberLeft= 84;
var numberLeft2= 5;
var numberBottom= 5;
var numberTop= 5;

//de tank kan nu alleen rechts

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"

function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
        console.log("spacebar");
        image.style.backgroundPositionX= positieX+ "px";  
        image.style.backgroundPositionY= positieY+ "px";  
    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
        image.style.transform = "rotate(0deg)";
         //voor de beweging
         image.style.bottom= (numberTop - numberBottom) + "px";
         numberTop= numberTop + 10;


         //voor de lichten
        image.style.backgroundPositionX= positieX - numberLeft + "px"; // check goed de rupsband
        numberLeft= numberLeft+84;
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
        image.style.transform = "rotate(180deg)";
        //voor de beweging
        image.style.bottom= (numberTop - numberBottom) + "px";
        numberBottom= numberBottom + 10;

        //voor de lichten
        image.style.backgroundPositionX= positieX + numberRight + "px"; // check goed de rupsband
        numberRight= numberRight+84;
    }    
    else if (e.keyCode == '37') { // left arrow
        image.style.transform = "rotate(-90deg)";
         //voor de lichten
        image.style.backgroundPositionX= positieX - numberLeft + "px"; // check goed de rupsband
        numberLeft= numberLeft+84;

        //voor de beweging
        image.style.left= (numberRight2 - numberLeft2) + "px";
        numberLeft2= numberLeft2 + 10;

    } else if (e.keyCode == '39') {   // right arrow
        image.style.transform = "rotate(90deg)";
        //voor de lichten
        image.style.backgroundPositionX= positieX + numberRight + "px"; // check goed de rupsband
        numberRight= numberRight+84;
        console.log(image.style.backgroundPositionX);
        //voor de beweging
        image.style.left= (numberRight2 - numberLeft2) + "px";
        numberRight2= numberRight2 + 10;

    }
}