const express = require('express');
const fs= require('fs')
const https=require('https')
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerRoute=require('./routes/swaggerPelis')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
        title: 'Api-Pelis',
        version: '1.0.0',
        description: 'Esta es la documentación de la API de Mi Aplicación. Aquí encontrarás información detallada sobre los endpoints y cómo interactuar con ellos.',
        contact: {
            name: 'Romario Ariza',
            email: 'romarioariza@gmail.com'
        }
    },
    servers: [
        {
            url: 'https://3.12.162.138', // Cambia la URL base aquí
        },
    ],
},
apis: ['./routes/swaggerPelis.js']
};

const swaggerSpec = swaggerJSDoc(options);
const app = express();

// Configurar los encabezados CORS
app.use(cors());

// Ruta para la documentación Swagger
app.use('/render',swaggerRoute)
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Ruta para obtener el archivo JSON de la documentación Swagger
app.get('/api/v1/docs.json', (req, res) => {
  res.setHeader('Content-type', 'application/json');
  res.send(swaggerSpec);
});

module.exports = app;

