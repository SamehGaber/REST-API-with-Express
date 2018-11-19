const express =require('express');
const http =require('http');
const morgan =require('morgan');
const hostname='localhost';
const bodyParser =require('body-parser');
const port =3000;
const dishRouter =require('./router/dishRouter');

const app =express();
app.use(morgan('dev'));
app.use(express.static(__dirname +'/public'));
app.use(bodyParser.json());
app.use('/dishes',dishRouter);
app.use('/dishes/:dishID',dishRouter); // defining the end point 


app.use((req,res,next) =>{
 
 res.statusCode=200;
 res.setHeader=('Content-Type','text/html');
 res.end('<html><body><h1>this is express server </h1></body></html>');

});

const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
})