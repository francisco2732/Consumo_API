'use strict';
const tbody = document.querySelector('#tbl-datos tbody');


let mostrar_datos = async() => {
    let datos = await calidadAire();
    tbody.innerHTML = '';

    for (let i = 0; i < datos.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = datos[i]['_id'];          //id de la data API
        fila.insertCell().innerHTML = datos[i]['stations'];      

    }


};

mostrar_datos();

