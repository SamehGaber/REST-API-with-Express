const express =require('express');
const bodyParser= require('body-parser');
const promoRouter= express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader=('Content-Type','text/plain');
    next();
   })
   
.get((req,res,next)=>{
       res.end('will send you all the Promotions')
       })
   
.post((req,res,next)=>{
       res.end('will send you all the promotion: ' + req.body.name +
          'with details:' + req.body.description);
       })
.put((req,res,next)=>{
        res.statusCode = 403;
        res.end('PUT operation not supported')
        })
   
.delete((req,res,next)=>{
        res.end('deleting all the Promotion')
        });

        //when navigate to /promotions/promoID end point resource the following piece of code will be executed
     promoRouter.route('/:promoID') 

    .get((req,res,next)=>{
                res.end('will send you deailts of promotion:' +req.params.promoID)
                })
               
    .post((req,res,next)=>{
                res.statusCode = 403;
                res.end('POST operation not supported on'+req.params.promoID)
               
                })
    .put((req,res,next)=>{
            res.write('will update promotions:'+req.params.promoID)
            res.end(req.params.promoID+'will be updated with'+req.params.name +'and decription of '+req.body.description)
                })
               
    .delete((req,res,next)=>{
                res.end('delete  the promotions '+req.params.promoID)
                });

    
module.exports =promoRouter;