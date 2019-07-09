const hbs = require('hbs');
const express = require('express');
const app = express();

let count = 0;

//imports
require('./hbs/helpers');

const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/public'));

//Express HBS engine
app.set('view engine', 'hbs');

//partials
hbs.registerPartials(__dirname + '/views/parciales');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'esteban rodriguez',
    });
});

app.get('/about', (req, res) => {

    res.render('about'); //hbs file
});

app.get('/ana-pau-castro', (req, res) => {
    
    res.render('ana-pau-castro');

});

app.get('/pas-2019', (req, res) => {
    
    res.render('pas-2019');

});

app.get('/encuesta', (req, res) => {
    
    res.render('encuesta');

});

app.get('/resultados', (req, res) => {
    
    count++;
    
    res.render('resultados', {
        count, 
    });

});

app.listen(port, () => {
    console.log(`Corriendo servidor en el puerto ${port}`);
});