const express = require ('express');
const app = express();


// middlewares

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// rutas

 app.use(require('./Routes/index'));

app.listen(3000);
console.log('server on port 4000');