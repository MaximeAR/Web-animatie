/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
 

var body = document.getElementById("body");
var Knopje = document.getElementById("Knopje");

Knopje.onclick = function() {
    
    if(body.className == "invert"){
        body.className = "";
    } else{
        body.className = "invert";
        
    }
}

/*---------------------------------------------------------*/

var Blaadje1 = document.querySelector('#_Group_1');

Blaadje1.addEventListener('click', schuiven1);

function schuiven1(){
    Blaadje1.classList.toggle('Bewegen1');
}


var Blaadje2 = document.querySelector('#_Group_2');

Blaadje2.addEventListener('click', schuiven2);

function schuiven2(){
    Blaadje2.classList.toggle('Bewegen2');
}


var Blaadje3 = document.querySelector('#_Group_3');

Blaadje3.addEventListener('click', schuiven3);

function schuiven3(){
    Blaadje3.classList.toggle('Bewegen3');
}


var Blaadje4 = document.querySelector('#_Group_4');

Blaadje4.addEventListener('click', schuiven4);

function schuiven4(){
    Blaadje4.classList.toggle('Bewegen4');
}


var Blaadje5 = document.querySelector('#_Group_5');

Blaadje5.addEventListener('click', schuiven5);

function schuiven5(){
    Blaadje5.classList.toggle('Bewegen5');
}


var Blaadje6 = document.querySelector('#_Group_6');

Blaadje6.addEventListener('click', schuiven6);

function schuiven6(){
    Blaadje6.classList.toggle('Bewegen6');
}


/*---------------------------------------------------------*/


var Boot = document.querySelector('#Boot');
console.log(Boot);

window.addEventListener('keydown', toggle);

function toggle(event) {
    if (event.keyCode === 32) {
        Boot.classList.toggle('move');
    }
}

var Bootmobiel = document.querySelector('#Boot');

window.addEventListener('longpress', varen);

function varen(){
    Bootmobiel.classList.toggle('move');
}

/*---------------------------------------------------------*/

var nummer3 = document.querySelector('#nummer3');
console.log(nummer3);

window.addEventListener('keydown', buiten);

function buiten(event) {
    if (event.keyCode === 51) {
        nummer3.classList.toggle('out');
    }
}

var nummer6 = document.querySelector('#nummer6');
console.log(nummer6);

window.addEventListener('keydown', onder);

function onder(event) {
    if (event.keyCode === 54) {
        nummer6.classList.toggle('out');
    }
}

var nummer9 = document.querySelector('#nummer9');
console.log(nummer9);

window.addEventListener('keydown', out);

function out(event) {
    if (event.keyCode === 57) {
        nummer9.classList.toggle('out');
    }
}

/*---------------------------------------------------------*/

var Witte_blok_1 = document.querySelector('#Witte_blok_1');
console.log(Witte_blok_1);

window.addEventListener('keydown', move1);

function move1(event) {
    
    if (event.keyCode == 37) {
        Witte_blok_1.classList.toggle('links');        
    }
    if (event.keyCode == 40) {
        Witte_blok_1.classList.toggle('onder');  
    }
    if (event.keyCode == 38) {
        Witte_blok_1.classList.toggle('boven');  
    }
}
        
var Witte_blok_2 = document.querySelector('#Witte_blok_2');
console.log(Witte_blok_2);

window.addEventListener('keydown', move2);

function move2(event) {
    
    if (event.keyCode == 37) {
        Witte_blok_2.classList.toggle('links');        
    }
    if (event.keyCode == 40) {
        Witte_blok_2.classList.toggle('onder');  
    }
    if (event.keyCode == 38) {
        Witte_blok_2.classList.toggle('boven');  
    }
}

var Witte_blok_3 = document.querySelector('#Witte_blok_3');
console.log(Witte_blok_3);

window.addEventListener('keydown', move3);

function move3(event) {
    
    if (event.keyCode == 37) {
        Witte_blok_3.classList.toggle('links');        
    }
    if (event.keyCode == 40) {
        Witte_blok_3.classList.toggle('onder');  
    }
    if (event.keyCode == 38) {
        Witte_blok_3.classList.toggle('boven');  
    }
}   