window.addEventListener("load",main);

function main(){

        //Agarrar el formulario
    let form = document.querySelector("form");
    let input = document.querySelector("input");

        //Asignarle el nuevo submit
    form.addEventListener("submit",handleSubmit);



        //Cancelarle el default
    //window.handleSubmit = functin handleSubmit(){}
    //var handleSubmit = function handleSubmit(){}
    function handleSubmit(e){
        e.preventDefault();
        console.dir(e.target[0].value);


    }

    /*
        SUBMIT: es un evento que se dispara cuando un formulario intenta ser enviado
    */

}

