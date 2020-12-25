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
    res.send('<h1> Word<h1/>', 200);
});

app.listen(3000, () => {
    console.log('server on port 3000');
});

//Nota: una buena practica es la creacion de package json.
//para crearlo se ejecuta npm init -y

//ha la hora de instalar el framework de expres valida que la carpeta de tu proyecto no tenga el mismo nombre
//creando un servidor con express

//enrutamiento
app.get('/contactos', (req, res) =>{
    res.send('<h1>Contactos de la empresa</h1>');
});
//peticiones de http methods

//metodo GET
app.get('/leer', (req, ser) => {//metodo get para mostrar o extraer del servidor
    res.send('Usando el metodo GET');
});
//metodo POST
app.post('/enviar', (req, res) => {//nos permite enviar al servidor 
    res.send("Usando el metodo POST");
});
//metodo PUT
app.put('/updata', (req, res) => { //nos permite actualizar al servidor
    res.send("Usando el metodo PUT");
});
//metodo DELETE
app.delete('/eliminar', (req, res) => {
    res.send("Usando el metodo DELETE");
});
//nodemon se usa para que el servidor refreque los cambios en tiempo real
//se instala npm i nodemon -D
//para ejecutar el servidor con nodemon se invoca npx nodemon index.js
//postman permite testear tus rutas del servidor
