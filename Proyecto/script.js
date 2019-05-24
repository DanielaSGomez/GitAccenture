/*
TIPOS DE DATOS EN JS

Primitvos: 
string: cadenas de texto entre comillas dobles o comillas simples.
number: numeros(todos)
boolean: true or false
undefined: variable sin valor
null: 

Objetos: todos los que no son los primitivos
object: {} adentro puede ir lo que quiera
array:[] adentro puede ir lo que quiera
function:

VARIABLES
var + nombre (no usar mas var xq es viejo)
let + nombre---> es como el nuevo var
const + nombre--->actua como una variable pero no lo es

Nombres de variables: pueden empezar solo con _ , $ o cualquier letra.

*/

let nombre = "Daniela";
let apellido= "gomez";

let nombre_completo = nombre + " " + apellido;

/* let numero = 12;
let estado = true;
 */

 //array
let varios_elementos = [5,2,1,34,6,'Daniela',true];
varios_elementos.push("Holaaa",68);


//console.log(varios_elementos[5]);
//console.log(varios_elementos["length"]);
//console.log(varios_elementos.length);
//muestra en una tabla todos los elementos con su posicion en una tabla en la consola
console.table(varios_elementos);
/* console.log(x):  nos muestra en consola lo que valga x */
//console.log(nombre_completo);

//objeto seria como una estrutura........
//el programador elige como se llama el lugar donde se guarda, a diferencia del array
let persona = {
   daniela :{
    nombre : "Daniela",
    edad : 29,
    estado: true,
   },

   fabian :{
       nombre :"fabian",
       edad: 25,
       estado : false,
   },
    
}




//para agregar elementos a el objeto
persona.daniela.trabaja = false;
persona.daniela.tieneMascota = 2;

persona.fabian.trabaja = false;
persona.fabian.tieneMascota = 2;
console.table(persona);


//ESTRUCTURAS DE CONTROL:
//forin para operar sobre objetos
//forof para operar sobre "arrays"

//for solo puede operar sobre arrays
//para iterar sobre matrices indexadas secuenciales

for(let i = 0; i<varios_elementos.length; i++){

        console.log(varios_elementos[i]);
}
//var son globales
//let son locales

//para iterar en un objeto

//for...in apara iterar matrices indexadas asociativas

for(prop in persona){

    console.log(persona[prop]);

}


//V8 = JS engine
//WEB APIs: mozilla//apis buscar
//objeto global : window  = BOM = browser object model = 
//var a = 1
//window.a = 1

window.innerHeight
window.innerWidth
//innerHeight
//innerWidth

//outerHeight --> Number - el alto en px del navegador
//outerWidth --> Number - el ancho en px del navegador
//console.log()-->objecto - nos da funciones de logueo en consola de desarrollo
//console.table()
//location --> object - tiene propiedades que controlan la ubicacion de un usuario
//location.href = String -mapea a la barra de direcciones
//history.forward () -> Avanza un nivel en el historial
//history.back() ->retrocede un nivel en el hsitorial
//document = api web del DOM =  document object model  = es un objeto aunque no parezca
//console.dir(X)->muestra x en formato JSON
//JSON = Javascript Object Notation

console.clear();
console.clear();

//SELECCIONAR NODOS(ETIQUETAS)
//document.getElementById(X)-->DOmElement
//document.getElementsByClassName(X)-->Array
//document.getElementsByName(X)-->
//document.getElementsByTagName(X)
//document.querySelector(X)
//document.querySelectorAll(X)

let dos = document.getElementById("item2");
console.dir(dos);//el dir hace verlo como objeto




