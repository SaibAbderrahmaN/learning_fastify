


module.exports = async function (fastify,opts){
    fastify.post('/signup', (req, reply) => {
        const { email , id , role} = req.body
        const token = fastify.jwt.sign({ email , id ,role})
        reply.send({ token })
      })
      fastify.get('/validation',{onRequest : fastify.authenticate}, async (req,reply)=>{
        return req.user
      })

}