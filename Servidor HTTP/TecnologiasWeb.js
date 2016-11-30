var express = require('express');
var app = express();
var puerto = 5050;


app.get('/TecnologiasWeb', function (req, res) {
    res.send('con Javascript');
});
app.post('/TecnologiasWeb', function (req, res) {


    var parametros = res.params;

    var usuario = {
        nombre: 'pato',
        cedula: '0000000000'
    }

    res.append('token', '1234');

    res.json(usuario);

});

app.listen(puerto, function () {
    console.log('Ejemplo de javascript esta en el puerto:' + puerto);
});