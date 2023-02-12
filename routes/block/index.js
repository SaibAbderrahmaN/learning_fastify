const { Worker, isMainThread, workerData } = require('worker_threads');
const path = require('path')
const thread_count = 3

function createWorker(){
    return new Promise((resolve,reject)=>{
        const worker = new Worker(__dirname, 'four-worker.js')

        worker.on("message", (data)=>{
            reply.code(201).send(data)

        })
        worker.on("error", (error)=>{
            reply.code(201).send(error)


        })
    })
}

module.exports = async function (fastify,opts){
    fastify.get('/',(req,reply)=>{
    const workerPromises = []

    } )
 }