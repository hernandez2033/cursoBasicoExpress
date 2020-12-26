const express = require('express');
//importamos el middlewares morgan 
const morgan = require('morgan');

const app = express();
app.use(express.json());

//settings
app.set('appName', 'Tutorial de Express');
//nombre de variables reservado en este caso port
app.set('port',5000);//con esta instruccion cambio el puerto donde se conceta al servidor
//motor de plantilla ejs
app.set('view engine', 'ejs');

/*
app.get('/',(req, res) => {
    res.send('<h1>Hello Word in port 5000<h1/>', 200);
});
*/
app.get('/', (req, res) => {
    //asumiedo que los datos son extraidos desde una bd
    const data = [{name: 'Milton'}, {name: 'Alexander'}, {name: 'noysi'}];
    res.render('index.ejs', {persona: data});
});

app.get('/user', (req, res) =>{//peticion que devuelva algo el servidor
    res.json({
        username: "Milton",
        lastname: "Hernandez"
    });//si quieres mandar mas de un valor o un objeto json
});

app.use(express.static('public'));//para enviar los archivos que estan dentro de public

app.listen(5000, () => {
    //imprimo el contemido del emtodo set
    console.log(app.get('appName'));
    console.log('server on port 5000');
});
//static file este middlewares ya viene integrado en express:
//se encarga de enviar archivos estaticos al frontend como htm, css y javaScript