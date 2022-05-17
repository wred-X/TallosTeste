const express = require('express');
const cors = require('cors');
const mongooseConnection = require('./config/mongoseConnection.config');
const morgan = require('morgan');

const app = express();

// ROTAS da API:
const index = require('./routes/index');
const userRoutes = require('./routes/user.routes');
//TODO: Declarar rota user.routes.js

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(cors());
app.use(morgan('dev'));

app.set('mongoose connection', mongooseConnection);

app.use(index);
app.use('/api/v1', userRoutes);
//TODO: Incluir depois a chamada da rota 'user.routes.js'

module.exports = app;