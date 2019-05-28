


//EVENTOS: ejecucion de una funcion(callback) como respuesta a una accion

// variables var se guardan en window entonces --->
//se pjuede hacer window.hacerClick = function(){}
//hacerClick es el nombre de una variable
//o se puede hacer directo la funcion:---->

let body = document.querySelector("body");
let contador = 1;
let btn = document.querySelector("button");

function hacerClick(){
  
  let botonNuevo = document.createElement("button");  botonNuevo.innerText = "Boton " + contador;
    body.appendChild(botonNuevo);
    
    contador = contador + 1;
}

btn.addEventListener("click",hacerClick);

/*
    Reemplazar el codigo de la funcion hacerClick por:

    1) Crear un boton por cada click que se haga
    3)cada boton nuevo se tiene que ver en el DOM
    2)Cada boton nuevo tiene que tener un callback en su propio evento click tambien
    4)todos los botones en pantalla tienen que tener como texto "Boton N", donde N es un numero arrancando de 1 el cual se va aumentando de a una unidad.

*/
//Nodo.addEventListener(evento,callback)--->



//a la etiqueta que 


