const express = require('express');
const colors = require('colors');

const app = express();

app.get('/', function(req, res) {
    res.send('<h1>Bienvenidos al ciclo 4a.</h1>');
})

app.get('/contacto', (req, res) => {
    res.send(`Formulario de contacto`);
})

app.listen(5000, function() {
    console.log(`Servidor corriendo en el puerto ${5000}`.red);
});
