var express = require('express');
var app = express();
var puerto = 5050;
var fs = require('fs');


var quePasa = '';

quePasa = 'esta por leer el archivo!';
console.log(quePasa);

fs.readFile('./Paginas/pagina.html', 'utf8',
    function (error, archivoLeido) {
        console.log(error);
        console.log(archivoLeido);
    });
quePasa = 'termino de leer el archivo!';
console.log(quePasa);



app.get('/', function (req, res) {

    quePasa = '1 esta por leer el archivo!';
    console.log(quePasa);
    fs.readFile('./Paginas/pagina.html', 'utf8',
        function (error, archivoLeido) {
            console.log('3 ' + error);
            console.log('4 ' + archivoLeido);
            res.send(archivoLeido);
        });

    quePasa = ' 2 esta por leer el archivo!';
    console.log(quePasa);

});