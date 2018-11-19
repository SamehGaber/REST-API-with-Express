const express =require('express');
const http =require('http');
const morgan =require('morgan');
const hostname='localhost';
const bodyParser =require('body-parser');
const port =3000;

const app =express();
app.use(morgan('dev'));
app.use(express.static(__dirname +'/public'));
app.use(bodyParser.json());
app.all('/dishes',(req,res,next)=>{
 res.statusCode=200;
 res.setHeader=('Content-Type','text/plain');
 next();
});

app.get('/dishes',(req,res,next)=>{
    res.end('will send you all the dishes')
    });

app.post('/dishes',(req,res,next)=>{
    res.end('will send you all the dishe: ' + req.body.name +
       'with details:' + req.body.description);
    });
app.put('/dishes',(req,res,next)=>{
     res.statusCode = 403;
     res.end('PUT operation not supported')
     });

app.delete('/dishes',(req,res,next)=>{
     res.end('deleting all the dishes')
     });

app.get('/dishes/:dishID',(req,res,next)=>{
     res.end('will send you deailts of dishe:' +req.params.dishID)
     });
    
app.post('/dishes/:dishID',(req,res,next)=>{
    
        res.statusCode = 403;
        res.end('POST operation not supported on'+req.params.dishID)
    
     });
app.put('/dishes/:dishID',(req,res,next)=>{
     
     res.write('will update dish:'+req.params.dishID)
     res.end(req.params.dishID+'will be updated with'+req.params.name +'and decription of '+req.body.description)
     });
    
app.delete('/dishes/:dishID',(req,res,next)=>{
     res.end('delet  dishe '+req.params.dishID)
     });








app.use((req,res,next) =>{
 
 res.statusCode=200;
 res.setHeader=('Content-Type','text/html');
 res.end('<html><body><h1>this is express server </h1></body></html>');

});

const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
})