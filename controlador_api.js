'use strict';
const body_table = document.querySelector('#tabla_api tbody');

let mostrar_datos = async() => {
    let consumo = await listar_api();
    tbody.innerHTML = '';

    for (let i = 0; i < consumo.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = consumo[i]['source_id'];
        fila.insertCell().innerHTML = consumo[i]['name'];
        fila.insertCell().innerHTML = consumo[i]['id'];
        fila.insertCell().innerHTML = consumo[i]['lon'];
        fila.insertCell().innerHTML = consumo[i]['lat'];
        fila.insertCell().innerHTML = consumo[i]['alt'];

    }
};
mostrar_datos();