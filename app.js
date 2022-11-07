const express = require('express')
const app = express()
const port = 8080;

//Servir contenido estatito

app.use(express.static('public'));


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


