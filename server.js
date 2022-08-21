const path = require('path');
const express = require('express');
const port = 3000;

// Instanciation du serveur
var server = express();

// Routes
server.get('/', (req, res) => {
	res.setHeader('Content-Type','text/html')
	res.sendFile(path.join(__dirname ,'index.html'))
	server.use(express.static('css'));
	server.use('/css', express.static(__dirname + '/css'));
})

server.listen(port, ()=> {
	console.log('Le serveur fonctionne sur le port : 3000. Pour ce serveur, vous pouvez accéder à : http://127.0.0.1:3000');
})



// server.use(express.static('css')); //tell the server that ./public/ contains the static webpages
