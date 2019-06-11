window.addEventListener("load",main);

function main(){

        //Agarrar el formulario
    let form = document.querySelector("form");
    let nombre = document.querySelector("#nombre");



    //evento change: se dispara cuando el control de formulario cambia de valor

    /*
    1)seleccionar el <select> 
    2)Asignarle un evento change
    3)El callback del change tiene que poder agarrar el valor del select
    4)Con el valor obtenido, buscar en el objeto "paises" la propiedad que le correspponda
    5)Si la propiedad no existe se tiene que ver en pantalla un mensaje que diga "Tiene que seleccionar una opcion" en color rojo
    6)si la propiedad existe, tenemos que recorrer el array que tiene como valor asociado
    7)Por cada valor del array se tiene que crear un <option>
    8)Agregar todos los <option>
    9)Agregar el <select> al DOM
    
    */
    
    let seleccion = document.querySelector("select");
    let divNac = seleccion.parentNode;
    let label = document.querySelector("#nac-label");
    seleccion.addEventListener("change",tomarSelect);

    let paises = {
        ar: ["Buenos Aires", "La Pampa"],
        ve: ["Margarita", "Caracas"],
        ch: ["Beijing", "Shangai"]
    }

    function tomarSelect(e){
        e.preventDefault();
        
       // console.log(seleccion.value);
        let valor = seleccion.value;
        console.log(valor);
        let provincias = paises[valor];
        console.log(provincias);
        //TRUE o {FALSE|0|""|NULL|UNDEFINED}
       
        if(provincias)
        {
            let selectNuevo = document.createElement("select");
            
            for(let i= 0; i<provincias.length;i++ )
            {
                let opcion = document.createElement("option");
                opcion.innerText = provincias[i];
                selectNuevo.appendChild(opcion);

            }

            divNac.appendChild(selectNuevo);


        }
        else
        {
            let p = document.createElement("p");
            p.innerText = "Tiene que seleconar una opcion"
            p.style.color = "red";
            p.className = "error";
            divNac.insertBefore(p,label);

        }

   }
 }

    //     //Asignarle el nuevo submit
    // form.addEventListener("submit",handleSubmit);



        //Cancelarle el default
    //window.handleSubmit = functin handleSubmit(){}
    //var handleSubmit = function handleSubmit(){}
    function handleSubmit(e){
        e.preventDefault();
        
        //cualquier cosa que se pueda escribir va a ser el value del input
       let nombre =  e.target[0].value
       //para que mustre el length de la palabra sin esapcios antes n despues
       console.log(nombre.trim().length);



    }

    /*
        SUBMIT: es un evento que se dispara cuando un formulario intenta ser enviado
        string.length => number => es la longitud del string
        string.trim()=> string - DEvuelve el mismo string pero sin espacios antes ni despues

        {String|Array}.indexOf => Number - Retorna la posicion de la instancia del elemento X o -1 si no se encuentra

        {String|Array}.includes()=>Boolean - retorna verdadero o falso dependiendo si X se encuantra o no

    
        */


