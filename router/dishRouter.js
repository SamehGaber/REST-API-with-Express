const express =require('express');
const bodyParser= require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader=('Content-Type','text/plain');
    next();
   })
   
.get((req,res,next)=>{
       res.end('will send you all the dishes')
       })
   
.post((req,res,next)=>{
       res.end('will send you all the dishe: ' + req.body.name +
          'with details:' + req.body.description);
       })
.put((req,res,next)=>{
        res.statusCode = 403;
        res.end('PUT operation not supported')
        })
   
.delete((req,res,next)=>{
        res.end('deleting all the dishes')
        });
        
//when navigate to /dishes/dishID end point resource the following piece of code will be executed
     dishRouter.route('/:dishID') 

 .get((req,res,next)=>{
            res.end('will send you deailts of dishe:' +req.params.dishID)
            })
           
 .post((req,res,next)=>{
            res.statusCode = 403;
            res.end('POST operation not supported on'+req.params.dishID)
           
            })
  .put((req,res,next)=>{
        res.write('will update dish:'+req.params.dishID)
        res.end(req.params.dishID+'will be updated with'+req.params.name +'and decription of '+req.body.description)
            })
           
   .delete((req,res,next)=>{
            res.end('delet  dishe '+req.params.dishID)
            });


    module.exports = dishRouter;

