const Controller = require("../../controller/products")
const service = require('../../service/Emailer')

const redis = require('redis');

const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient(6379);


module.exports = async function (fastify,opts){
    fastify.post('/create',opts,Controller.create )
    fastify.get('/getProduct/:id',opts,Controller.findProductsById)
     

    fastify.get('/set',opts, async (req, reply) => {
        const rahmon = await client.get('rahmon')
        reply.code(200).send(rahmon)
       
      })


    fastify.get('/sendmail/:email',opts, async (req, reply) => {
        console.log(req.params.email)
        await service.sendmail(req.params.email).then(Response=>reply.code(200).send("message send successfully")).catch((err)=>reply.code(500).send(err))
       
      })

 }

 /*


const sendmail=  ()=>{
 return new Promise((resolve,reject)=>{
     var transporter =nodemailer.createTransport({
         service:"gmail"
         ,auth:{
             user:"doondoon273@gmail.com",
             pass:"jdrtjxfudnfurmpe",
         },
     })
     const mail_config ={
         from:"doondoon273@gmail.com",
         to:"saibabderrahman@gmail.com",
         subject:"testing coding 101 email",
         text:"justing checking if this email will be sent"
     };
     transporter.sendMail(mail_config,function(err,info){
         if(err){
             console.log(err)
             return reject({message:'an error has occurred'})
         }console.log("email sent successfully")
         return resolve({message:'email sent successfully'})
     })
 }) }
 */