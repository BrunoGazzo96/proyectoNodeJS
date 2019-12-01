const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const router = require('./Backend/routes/routes').router;

require('dotenv').config();

app.use(bodyparser.urlencoded({extended: true}));

app.use(bodyparser.json());
/*
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});*/

app.use(express.static(path.join(__dirname, '/Frontend')));

app.use(router);

app.listen(3000,()=>{
    console.log("Escuchando");
});