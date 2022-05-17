const dotenv = require('dotenv');
//import { env } from 'process';

dotenv.config();

module.exports = {
  local: {
    //localUrlDatabse: process.env.DB_URI,
    localUrlDatabse: 'mongodb://localhost:27017/jwtAuthDb',
    secret: 'password'
  }  
};