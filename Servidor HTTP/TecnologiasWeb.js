var express = require('express');
var app = express();
var puerto = 5050;
var usuarios = [{
    id: 1,
    nombre: 'Pepe',
    cedula: '00012374128'
}, {
    id: 2,
    nombre: 'Carlos',
    cedula: '13412498127'
}, {
    id: 3,
    nombre: 'Juan',
    cedula: '12837912874'
}];


app.get('/TecnologiasWeb', function (req, res) {
    res.send('con Javascript');
});

app.get('/Usuario/:idUsuario', function (req, res) {
    var idActual = req.params.idUsuario;
    for (var i = 0; i < usuarios.length; i++) {
        if (idActual == usuarios[i].id) {
            res.json(usuarios[i]);
        }
    }
    res.send('No existe usuario');

});
app.get('/Usuario', function (req, res) {
            res.json(usuarios);
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