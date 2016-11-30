var express = require('express');
var app = express();
var puerto = 5050;


app.get('/TecnologiasWeb', function (req, res) {
    res.send('con Javascript');
});
app.post('/TecnologiasWeb', function (req, res) {
    console.log('Request: ');
    console.log(req.headers);
    console.log('Response: ');
    console.log(res.headers);
    res.send('con Post');
});

app.listen(puerto, function () {
    console.log('Ejemplo de javascript esta en el puerto:' + puerto);
});