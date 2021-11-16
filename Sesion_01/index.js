// const operaciones = require('./operaciones.js') // Importamos el amodulo operaciones

// console.log(operaciones);
// console.log(operaciones.suma(3, 4));
// console.log(operaciones.resta(6, 2));
// console.log(operaciones.mult(4, 5));
// console.log(operaciones.div(9, 3));


const http = require('http'); // creamos un servidor

// forma simple
// http.createServer(function(req, res){
//     // res.writeHead(200, {'Content-type': 'text/html'});
//     res.writeHead(404, {'Content-type': 'text/plain'});
//     res.write('<h1>Bienvenido al ciclo 4. Desarrollo de aplicaciones web </h1>');
//     res.end();
// }).listen(5000);

const handleServer = function(req, res){
    // res.writeHead(200, {'Content-type': 'text/html'});
    res.writeHead(404, {'Content-type': 'text/plain'});
    res.write('<h1>Bienvenido al ciclo 4. Desarrollo de aplicaciones web </h1>');
    res.end();
}

// http.createServer(handleServer).listen(5000);

const server =  http.createServer(handleServer);
server.listen(5000, function() {
    console.log(`Servidor en puerto ${5000}`);
});