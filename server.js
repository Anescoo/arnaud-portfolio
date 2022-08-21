const path = require('path');
const jwt = require('jsonwebtoken');
const express = require('express');

// Instanciation du serveur
var server = express();

// Routes
server.get('/', function (req, res){
	res.setHeader('Content-Type','text/html');
	res.sendFile(path.join(__dirname ,'./frontend/templates/index.html'));
	server.use(express.static('css'));
	server.use('csss', express.static(__dirname + 'css'));
});

console.log('Le serveur fonctionne sur le port : 3000. Pour ce serveur, vous pouvez accéder à : http://127.0.0.1:3000');

server.use(express.static('css')); //tell the server that ./public/ contains the static webpages
var io=require('socket.io')(port);