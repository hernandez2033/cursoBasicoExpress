//creando un servidor con node
/*
const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<h1>Hello world con nodeJS v0.1</h1>');
});
server.listen(3000, () =>{
    console.log('server on port 3000');
});
*/

//Nota: una buena practica es la creacion de package json.
//para crearlo se ejecuta npm init -y

//ha la hora de instalar el framework de expres valida que la carpeta de tu proyecto no tenga el mismo nombre
//creando un servidor con express

const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('<h1>Hello World<h1/>', 200);
});

app.listen(3000, () => {
    console.log('server on port 3000');
});

//enrutamiento 