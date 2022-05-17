const express = require('express');
const mongoose = require('mongoose');

// Importar o arquivo: 'db.config.js'
const database = require('./db.config'); // conexão local: MongoDB

mongoose.Promise = global.Promise;

// Conexão Base de Dados:
mongoose.connect(database.local.localUrlDatabse, 
    { useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
() => {
  console.log('Dados conectados!');
}, (err) => {
  console.log(`Erro ao conectar com a Base de Dados...: ${err}`);
  process.exit();
});