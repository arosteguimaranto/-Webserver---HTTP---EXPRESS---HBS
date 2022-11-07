const express = require('express')
const app = express()
const port = 8080;

var hbs = require('hbs');

//Handlebars

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estatito

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre:'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre:'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre:'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});





app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/back/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


