var express = require('express');
var app = express();

app.post('/TecnologiasWeb', function (req, res) {
  res.send('con Javascript');
});

app.listen(5050, function () {
  console.log('Ejemplo de javascript');
});
