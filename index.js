//creando un servidor con node

const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<h1>Hello world con nodeJS v0.1</h1>');
});
server.listen(3000, () =>{
    console.log('server on port 3000');
});

//Nota: una buena practica es la creacion de packat json.
//para crearlo se ejecuta npm init -y
