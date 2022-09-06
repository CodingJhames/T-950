
const express = require('express');
require('dotenv').config();

// console.log( process.env );

// crear el servidor de express

const app = express();

// Directorio Público

app.use( express.static('public') );


// Rutas
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: Eventos



// escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT } `);
} );