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

//para que express pueda leer archivos .js 
app.use(express.json());

app.get('/',(req, res) => {
<<<<<<< HEAD
    res.send('<h1> Word<h1/>', 200);
=======
  res.send('<h1>Hello World<h1/>', 200);//si silo quiers mandar un valor usamos send
>>>>>>> f049b3d9364977f681050218ccebc88e7c1489a4
});

app.listen(3000, () => {
    console.log('server on port 3000');
});

//Nota: una buena practica es la creacion de package json.
//para crearlo se ejecuta npm init -y

//ha la hora de instalar el framework de expres valida que la carpeta de tu proyecto no tenga el mismo nombre
//creando un servidor con express

//enrutamiento

//peticiones de http methods

//metodo GET

app.get('/user', (req, res) =>{//peticion que devuelva algo el servidor
    res.json({
        username: "Milton",
        lastname: "Hernandez"
    });//si quieres mandar mas de un valor o un objeto json
});

//metodo POST
app.post('/user', (req, res) => {//nos permite enviar al servidor, puedo usar el mismo nombre del get ya que son distintos metodos que afecta a user
    console.log(req.body);//para mostra por consolo lo que esta resiviendo por el metodo post, que ha sido enviado desde posman
    res.send("Usando el metodo POST");
});

app.post('/iduser/:id', (req, res) => {//las instruccion /:id es para indicarle que id es una variable que puede resivir cualquier dato
    console.log(req.body);
    console.log(req.params);//muestra el patametro de la peticion id
});
//metodo PUT
app.put('/update', (req, res) => { //nos permite actualizar al servidor
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
