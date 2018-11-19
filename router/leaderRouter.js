const express =require('express');
const bodyParser= require('body-parser');
const leaderRouter= express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader=('Content-Type','text/plain');
    next();
   })
   
.get((req,res,next)=>{
       res.end('will send you all the leader')
       })
   
.post((req,res,next)=>{
       res.end('will send you all the leaders: ' + req.body.name +
          'with details:' + req.body.description);
       })
.put((req,res,next)=>{
        res.statusCode = 403;
        res.end('PUT operation not supported')
        })
   
.delete((req,res,next)=>{
        res.end('deleting all the leaders')
        });

        //when navigate to /leaders/leaderID end point resource the following piece of code will be executed
     leaderRouter.route('/:leaderID') 

    .get((req,res,next)=>{
                res.end('will send you deailts of leader:' +req.params.leaderID)
                })
               
    .post((req,res,next)=>{
                res.statusCode = 403;
                res.end('POST operation not supported on'+req.params.leaderID)
               
                })
    .put((req,res,next)=>{
            res.write('will update leader:'+req.params.leaderID)
            res.end(req.params.leaderID+'will be updated with'+req.params.name +'and decription of '+req.body.description)
                })
               
    .delete((req,res,next)=>{
                res.end('delete  the Leaders '+req.params.leaderID)
                });

    
module.exports =leaderRouter;