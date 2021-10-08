//PROBANDO CON JS Y HTTPREQUEST

const API_URL = 'https://api.datos.gob.mx/v1/calidadAire';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
  if (this.readyState === 4 && this.status === 200)
    //0= UNSET, no se ah llamado al metodo open
    // 1= OPENED, se ah llamado al metodo opened
    // 2= HEADERS_RECEIVED, se esta llamando al metodo send()
    // 3= LOADING, esta cargando, recibiendo respuesta
    // 4= DONE, se ah completado la operacion
    console.log(this.response);
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', '${API_URL}');
xhr.send();
