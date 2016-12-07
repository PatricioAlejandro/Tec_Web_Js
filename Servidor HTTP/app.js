var express = require('express');
var app = express();
var puerto = 5050;
var fs = require('fs');


var quePasa = '';

quePasa = 'esta por leer el archivo!';
console.log(quePasa);

//fs.readFile('./Paginas/pagina.html', 'utf8',
//    function (error, archivoLeido) {
//        console.log(error);
//        console.log(archivoLeido);
//    });
//quePasa = 'termino de leer el archivo!';
//console.log(quePasa);



app.get('/', function (req, res) {
    var todo = '';


    fs.readFile('./Paginas/pagina.html', 'utf8',
        function (error, archivo1Leido) {
            todo += archivo1Leido;
            fs.readFile('./Paginas/usuario.html', 'utf8',
                function (error, archivo2Leido) {
                    todo += archivo2Leido;
                    fs.readFile('./Paginas/usuario.html', 'utf8',
                        function (error, archivo2Leido) {
                            todo += archivo2Leido;
                            res.send(todo);
                        });
                });
        });
});

app.listen(puerto, function () {
    console.log('Ejemplo de javascript esta en el puerto:' + puerto);
});