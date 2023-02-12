const { Worker, isMainThread, workerData } = require('worker_threads');
const path = require('path')


module.exports = async function (fastify,opts){
    fastify.get('/',(req,reply)=>{
        const worker = new Worker(__dirname ,"worker.js");

        worker.on("message", (data)=>{
            reply.code(201).send(data)

        })
        worker.on("error", (error)=>{
            reply.code(201).send(error)


        })

    } )



 

 }