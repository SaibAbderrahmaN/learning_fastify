'use strict'
const Controller = require("../../controller/admin")
module.exports = async function (fastify, opts) {
 // creat account
  fastify.post('/creat',{ 
    schema: {
      body: {
        password: { type: 'string' }
      },
    },
    onRequest: [],
    
    /* preHandler:async(request, reply, done)=>{
      if(request.body.password){request.body.password = await fastify.bcrypt.hash(request.body.password)}
       }
    */
  },Controller.create);


       // getall 
     fastify.get('/getall',Controller.finAaLL);
/*
     // update account
     fastify.post('/update',{ 
      schema: {
        body: {
          type: 'object',
          required: ['id'],
        },
      },
      onRequest: [],
      preHandler:async(request, reply, done)=>{
        if(request.body.password){
          request.body.password = await fastify.bcrypt.hash(request.body.password)
      }
      }
    },Controller.update);

// login to  account
  fastify.post('/login',{ 
    schema: {
    body: {
      type: 'object',
      required: ['password','username'],
    }
  }
  },async (req, reply) => {
    let id = await Controller.login(req);
    if(id._id){
      let pylode = { 
        id:id._id,
        email:id.email,
        type:"admin"
       };
       pylode.token = fastify.jwt.sign(pylode)
      reply.send(pylode)
    }
  });

     // getall 
     fastify.put('/getall',{ 
      schema: {
        body: {
          type: 'object',
          required: ['limit','offset','string',"filter"],
        },
      },
      onRequest: [],
    },Controller.findall);
  
  
     // read 
     fastify.put('/read',{ 
        schema: {
          body: {
            type: 'object',
            required: ['id','include'],
          },
        },
        onRequest: [],
     },Controller.findone);*/
  
  

  
  
}


