
'use strict';
let listar_api = async() => {
    let consumo;
    await axios({
            method: 'get',
            url: 'https://api.datos.gob.mx/v1/calidadAire',
            responseType: 'json'
        }).then(function(res) {
            consumo = res.data.consumo;
        })
        .catch(function(err) {
            console.log(err);
        });
    return consumo;
};