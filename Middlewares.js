const express = require('express');
//importamos el middlewares morgan 
const morgan = require('morgan');

const app = express();

app.use(express.json());

/*
app.get('/',(req, res) => {
    res.send('<h1>Hello Word in port 5000<h1/>', 200);
});
*/
app.get('/user', (req, res) =>{//peticion que devuelva algo el servidor
    res.json({
        username: "Milton",
        lastname: "Hernandez"
    });//si quieres mandar mas de un valor o un objeto json
});

app.use(express.static('public'));//para enviar los archivos que estan dentro de public

app.listen(5000, () => {
    console.log('server on port 5000');
});
//static file este middlewares ya viene integrado en express:
//se encarga de enviar archivos estaticos al frontend como htm, css y javaScript