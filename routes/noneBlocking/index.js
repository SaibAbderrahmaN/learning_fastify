

module.exports = async function (fastify,opts){
    fastify.get('/',opts,(req,reply)=>{
        reply.code(200).send('this is none blocking ')
    } )


 }