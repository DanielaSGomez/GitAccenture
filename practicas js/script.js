//el body es uno de los nodos que no hace falta seleccionarlo porque ya esta incluido en el document
//let body = document.querySelector("body");
let btn = document.querySelector("button");
btn.addEventListener("click",hacerClick);

function hacerClick()
{
    let nuevoDiv = document.createElement("div");
    let nuevoParrafo = document.createElement("p");
    let botonBorrar = document.createElement("button");

    nuevoParrafo.innerText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
   
    botonBorrar.innerText = "Borrar parrafo";
    botonBorrar.addEventListener("click",borrarElemento);

    nuevoDiv.appendChild(nuevoParrafo);
    nuevoDiv.appendChild(botonBorrar);
    
    document.body.appendChild(nuevoDiv);


   // function borrar()
   // {
      // document.body.removeChild(nuevoDiv);

   // } 

    
}

//OBJETO EVENTO: Es un objeto que te llega como primer parametro de cualquier funcion(callback) registrada en un evento
function borrarElemento(e)
{
    //Event.target: es una referencia al nodo que acaba de siparar el evento
    //Nodo.parentNode : es una referencia al nodo padre

    document.body.removeChild(e.target.parentNode);
}



