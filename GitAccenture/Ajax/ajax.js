//leer un .txt y traerlo al html
//crear un nuevo tipo de xmlh


//readyState = 0
let xhr = new XMLHttpRequest
console.log(xhr)
//readyState = 1
//.open recibe el metodo y la url
xhr.open("GET","ajax.txt")



//propiedad readyState: dice en que estado se encuentra el pedido(request) al servidor(xml)
//0 a 4;
//0: Objeto Inicializado
//1: Objeto COnfigurado
//2: Headers Enviados y Recibidos
//3: Descargando informacion
//4: Pedido Finalizado



/*
REQUEST

GET index.html HTTP/1.1

HEADERS: se autocompletan con una direccion mas exacta de donde se obtiene el GET
host: http://mipagina.com
User-Agent: (que navegador pide el Get)


RESPONSE:

HTTP/1.1 404 NOT FOUND
HEADERS RESPOUESTA:
server: Ej: Apache 5.4/win32
Content-type: text/plain (MIME type)
Content-Length: peso del archivo(bytes)







METODOS/VERBOS HTTP:

GET-POST-PUT-PATCH-DELETE
 


*/