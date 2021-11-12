const operaciones = require('./operaciones.js')

console.log(operaciones);
// console.log(operaciones.suma(3, 4));
// console.log(operaciones.resta(6, 2));
// console.log(operaciones.mult(4, 5));
// console.log(operaciones.div(9, 3));


const http = require('http');

http.createServer(function(req, res){
    res.write('<h1>Bienvenido al ciclo 4. Desarrollo de aplicaciones web </h1>')
    res.end();
}).listen(5000);