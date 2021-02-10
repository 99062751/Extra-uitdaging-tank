var image = document.getElementById("image");
var positieX= parseInt(window.getComputedStyle(image).backgroundPositionX);
var positieY= parseInt(window.getComputedStyle(image).backgroundPositionY);
var divbullet= document.getElementById("bullet");;

var windowwidth= window.innerWidth;
var windowheigth= window.innerHeight;

var number= 84;
var divbulletX=  336;
var divbulletY=  170;

var pos_x = 0;
var pos_y = 0;

var bullet_pos_x=  pos_x;
var bullet_pos_y=  pos_y;

var bulletSpeed= 80;
// var numberRight= 84;
// var numberRight2= 5;
// var numberLeft= 84;
// var numberLeft2= 5;
// var numberBottom= 5;
// var numberTop= 5;

var stapafstand = bulletSpeed;

var traveldistance= 10;

window.addEventListener('resize', new_window_resize);

function new_window_resize() {
    windowwidth= window.innerWidth;
    windowheigth= window.innerHeight;
}

//de tank kan nu alleen rechts
document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)";
function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    CheckOutOfScreen();
    if(e.keyCode == 32){
        console.log("spacebar");
        Createbullet();

        bullet_pos_x=  pos_x;
        bullet_pos_y=  pos_y;

        divbullet.style.left = bullet_pos_x + "px";
        divbullet.style.top= bullet_pos_y + "px";

        setInterval(function(){
            console.log(bullet_pos_x, bullet_pos_y);
            if(divbullet.style.transform == "rotate(90deg)"){
                divbullet.style.left = bullet_pos_x + "px";
                bullet_pos_x = bullet_pos_x + bulletSpeed;
            } 
            else if(divbullet.style.transform == "rotate(-90deg)"){
                divbullet.style.left= bullet_pos_x + "px";
                bullet_pos_x= bullet_pos_x - bulletSpeed;

            }else if(divbullet.style.transform == "rotate(0deg)"){
                divbullet.style.top= bullet_pos_y + "px";
                bullet_pos_y= bullet_pos_y - bulletSpeed; 

            }else if(divbullet.style.transform == "rotate(180deg)"){
                divbullet.style.top= bullet_pos_y + "px";
                bullet_pos_y= bullet_pos_y + bulletSpeed; 
            }
        }, 500);                
           
        
    } else if (e.keyCode == '38') {  // up arrow
        // console.log(pos_x + " " + pos_y);
        //voor het rollen
        image.style.transform = "rotate(0deg)";
        image.style.backgroundPositionX= (positieX + number) + "px";
        positieX=positieX + number;
   
        //voor de beweging
        pos_y = pos_y - stapafstand;
        image.style.top= pos_y + "px";
    } else if (e.keyCode == '40') { // down arrow
        
        // console.log(pos_x + " " + pos_y);
        // console.log("down arrow");
        //voor het rollen
        image.style.transform = "rotate(180deg)";
        image.style.backgroundPositionX= (positieX - number) + "px";
        positieX=positieX + number;

        //voor de beweging
        pos_y = pos_y + stapafstand;
        image.style.top= pos_y + "px";
    }    
    else if (e.keyCode == '37') { // left arrow
        // console.log(pos_x + " " + pos_y);
         //voor het rollen
        image.style.transform = "rotate(-90deg)";
        image.style.backgroundPositionX= (positieX - number) + "px";
        positieX=positieX + number;

        //voor de beweging
        pos_x= pos_x - stapafstand;
        image.style.left= pos_x + "px"; 
    } else if (e.keyCode == '39') {   // right arrow
        // console.log(pos_x + " " + pos_y);
        //voor het rollen
        image.style.transform = "rotate(90deg)";
        image.style.backgroundPositionX= (positieX + number) + "px";
         positieX=positieX + number;

        //voor de beweging
        pos_x= pos_x + stapafstand;
        image.style.left= pos_x + "px";
    }
    CheckOutOfScreen();
}


function Createbullet(){
    divbullet= document.createElement("div");
    divbullet.setAttribute('id', "bullet");
    divbullet.style.transform = image.style.transform;
    document.body.appendChild(divbullet);
}
function CheckOutOfScreen(){
    console.log(pos_x, pos_y);
    console.log(windowwidth, windowheigth);
    if(pos_x < 0){
        pos_x= windowwidth;
    } else if(pos_y < 0){
        pos_y= windowheigth;
    } else if(pos_x > windowwidth){
        pos_x= 0;
    } else if(pos_y > windowheigth){
        pos_y= 0;
    }
    console.log(pos_x, pos_y);
}
