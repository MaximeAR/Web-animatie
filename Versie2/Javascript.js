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



var Boot = document.getElementById("Boot");
var Grijs_vlak = document.getElementById("Grijs_vlak");

Grijs_vlak.onclick = function() {
    
    if(Boot.className == "move"){
        Boot.className = "";
    } else{
        Boot.className = "move";
        
    }
}


