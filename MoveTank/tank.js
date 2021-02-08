var image = document.getElementById("image");
var positieX= parseInt(window.getComputedStyle(image).backgroundPositionX);
var positieY= parseInt(window.getComputedStyle(image).backgroundPositionY);
var divbullet= document.getElementById("bullet");;

var divbulletX=  336;
var divbulletY=  170;

var numberRight= 84;
var numberRight2= 5;
var numberLeft= 84;
var numberLeft2= 5;
var numberBottom= 5;
var numberTop= 5;

var traveldistance= 10;

//de tank kan nu alleen rechts

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)";
function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
        console.log("spacebar");
        divbullet.style.display= "inline-block";
        for(a=0; a < 4; a++){
            setInterval(function(){
                divbullet.style.left= traveldistance + "px";
                traveldistance= traveldistance+30;
            }, 500)
                   
            console.log(traveldistance);
            
        }
        
    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
        image.style.transform = "rotate(0deg)";
         //voor de beweging
         image.style.bottom= (numberTop - numberBottom) + "px";
         numberTop= numberTop + 15;


         //voor de lichten
        image.style.backgroundPositionX= positieX - numberLeft + "px"; // check goed de rupsband
        numberLeft= numberLeft+84;
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
        image.style.transform = "rotate(180deg)";
        //voor de beweging
        image.style.bottom= (numberTop - numberBottom) + "px";
        numberBottom= numberBottom + 15;

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
        numberLeft2= numberLeft2 + 15;

    } else if (e.keyCode == '39') {   // right arrow
        image.style.transform = "rotate(90deg)";
        //voor de lichten
        image.style.backgroundPositionX= positieX + numberRight + "px"; // check goed de rupsband
        numberRight= numberRight+84;
        console.log(image.style.backgroundPositionX);
        //voor de beweging
        image.style.left= (numberRight2 - numberLeft2) + "px";
        numberRight2= numberRight2 + 15;
    }
}


function Createbullet(){
    divbullet= document.createElement("div");
    divbullet.setAttribute('id', "bullet");
    divbullet.style.transform = "rotate(90deg)";
    divbullet.style.display= "none";
    document.body.appendChild(divbullet);
}

Createbullet();