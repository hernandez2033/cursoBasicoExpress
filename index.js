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
//el Middlewares deve de ir antes de la ruta a la que quieres afectar con la funcio
//creacion de un Middlewares es un manejador de peticion
function login (req, res, next){//esta funcion se activa en cualquier ruta eso lo hace diferente de la funcion all que afecta a una ruta en especifico
    console.log(`ruta resivida: ${req.protocol}://${req.get('host')}${req.originalUrl}`);//con esta instruccion estraemos la ruta que el usuario pide
}
//funcion all pura mente de express no es una funcion de http
app.all('/user', (req, res, next) =>{//al agregar la funcion next el servidor continua con la instruccion
    console.log("por aqui paso ");//para que imprima por consola este mensaje
    //res.send("finish");
    next();//nos permite continuar con la consulta a la ruta usuario o user
})//esto es como un filtro que se puede leer para todas las ruta user en este caso

//para que express pueda leer archivos .js 
app.use(express.json());
//para usar el Middlewares que creamos se usa siempre de esta manera
app.use(login);

app.get('/',(req, res) => {
    res.send('<h1>Hello Word<h1/>', 200);
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
app.put('/userupdate/:id', (req, res) => { //nos permite actualizar al servidor
    console.log(req.body);//para imprimir el ojecto de tipo json
    res.send(`User ${req.params.id} updated`);//para hacer uso de este parametro se delimita con este simbolo ` no es comilla simple 
});
//metodo DELETE
app.delete('/userdelete/:id', (req, res) => {
    res.send(`user ${req.params.id} deleted`);
});
//nodemon se usa para que el servidor refreque los cambios en tiempo real
//se instala npm i nodemon -D
//para ejecutar el servidor con nodemon se invoca npx nodemon index.js
//postman permite testear tus rutas del servidor
