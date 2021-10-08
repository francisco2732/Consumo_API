'use strict';
let calidadAire = async() => {
    let datos;

    await axios({
            method: 'get',
            url: 'https://api.datos.gob.mx/v1/calidadAire',
            responseType: 'json'
        }).then(function(res) {
            datos = res.data.results;       //de aqui se cambia lo q se va a consultar en la api y se
            console.log(res);                   //log que muestra la data de la api en consola
        })
        .catch(function(err) {
            console.log(err);
        });

    return datos;
};
