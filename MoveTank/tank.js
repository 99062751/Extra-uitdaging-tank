var image = document.getElementById("image");
var positieX= parseInt(window.getComputedStyle(image).backgroundPositionX);
var positieY= parseInt(window.getComputedStyle(image).backgroundPositionY);
var divbullet= document.getElementById("bullet");
var windowwidth= window.innerWidth;
var windowheigth= window.innerHeight;

var id_number= 1;

var ar= [];

var number= 84;
var divbulletX=  336;
var divbulletY=  170;

var pos_x = 0;
var pos_y = 0;

var bulletSpeed= 80;
var stapafstand = bulletSpeed;
var traveldistance= 10;


var explosion= document.getElementById("explosie");


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
    divbullet.setAttribute('id', "bullet" + id_number);
    divbullet.style.transform = image.style.transform;
    document.body.appendChild(divbullet);
    NameBullets();
    move_bullet(ar[(id_number - 1)]);
    id_number++;
}

function NameBullets() {
    var divbullet2= {
        element: document.getElementById("bullet" + id_number),
        id: "bullet" + id_number,
        bulletPositionX: pos_x,
        bulletPositionY: pos_y,
        transform: image.style.transform
    };
    ar.push(divbullet2);
}


function CreateExplosion(){
    explosion= document.createElement("div");
    explosion.setAttribute('class', "explosie");
    document.body.appendChild(explosion);
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

function move_bullet(bullet) {
    divbullet = document.getElementById(bullet.id);
    divbullet.style.left = bullet.bulletPositionX + "px";
    divbullet.style.top= bullet.bulletPositionY + "px"; 

    setInterval(function(){
        if(divbullet.style.transform == "rotate(90deg)"){
            divbullet.style.left = bullet.bulletPositionX + "px";
            bullet.bulletPositionX = bullet.bulletPositionX + bulletSpeed;
        } 
        else if(divbullet.style.transform == "rotate(-90deg)"){
            divbullet.style.left= bullet.bulletPositionX + "px";
            bullet.bulletPositionX= bullet.bulletPositionX - bulletSpeed;

        }else if(divbullet.style.transform == "rotate(0deg)"){
            divbullet.style.top= bullet.bulletPositionY + "px";
            bullet.bulletPositionY= bullet.bulletPositionY - bulletSpeed; 

        }else if(divbullet.style.transform == "rotate(180deg)"){
            divbullet.style.top= bullet.bulletPositionY + "px";
            bullet.bulletPositionY =bullet.bulletPositionY + bulletSpeed; 
        }
        if(bullet.bulletPositionX >= 640){
            divbullet.remove();
            CreateExplosion();
            explosion.style.left= bullet.bulletPositionX + "px";
            explosion.style.top= bullet.bulletPositionY + "px";
        }   
    }, 500);  
}
