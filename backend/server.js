const app = require('./src/app');

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

/* app.listen(port, () => {
    console.log('aplicação rodando na porta...:', port);
}); */

app.listen(port,host);