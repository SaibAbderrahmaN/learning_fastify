const{ worker } = require("worker-thread");


module.exports = async function (fastify,opts){
    fastify.get('/',(req,reply)=>{
        const worker = new worker('../../worker.js')
        console.log(worker)
        worker.worker.on("message", (data)=>{
            reply.code(201).send(data)


        })
        worker.on("error", (error)=>{
            reply.code(201).send(error)


        })
      
        reply.code(201).send(counter)

    } )



 

 }