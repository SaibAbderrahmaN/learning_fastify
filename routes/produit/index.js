const Controller = require("../../controller/products")
const service = require('../../service/Emailer')
//const { client } = require('../../client')
const {fileUpload , Multer, uploadFile}= require('../../upload/uploud')

module.exports = async function (fastify,opts){
    fastify.post('/create',opts,Controller.create )
    fastify.get('/getProduct/:id',opts,Controller.findProductsById)
     

   //fastify.get('/set',opts, async (req, reply) => {
   //    const rahmon = await client.SETEX('ammar',3600,"saraoui")
   //    reply.code(200).send(rahmon)
   //   
   //  })


    fastify.get('/sendmail/:email',opts, async (req, reply) => {
        console.log(req.params.email)
        await service.sendmail(req.params.email).then(Response=>reply.code(200).send("message send successfully")).catch((err)=>reply.code(500).send(err))
       
      })
      fastify.post('/upload' ,{preHandler:fileUpload},function (req, reply) {
        // some code to handle file
        const products ={
          name:'rahmon'
        }
         console.log(req.file)
         console.log(req.body.abderrahman)
         const files = []
         console.log(files)
         let fileArr = []
         if (req.file) {
          products.image = req.file.filename;
        }
         reply.send(req.body.abderrahman )
       
    })

 }

