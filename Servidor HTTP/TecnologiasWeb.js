var express = require('express');
var app = express();
var puerto = 5050;
app.post('/TecnologiasWeb', function (req, res) {
  res.send('con Javascript');
});

app.listen(puerto, function () {
  console.log('Ejemplo de javascript esta en el puerto:'+puerto);
});
