const http = require('http');

http.createServer((req, res) => {

   // res.writeHead(200, { 'Content-Type': 'application/text' })

/*    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
   res.writeHead(200, {'Content-Type': 'application/text'}); */

   res.write('hola mundo');
   
   res.end();

   
})

    .listen(8080);

console.log('Escuchando el puerto', 8080);

