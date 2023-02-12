
const { createUSer } = require('../../controller/user')
const {fileUpload , Multer, uploadFile}= require('../../upload/uploud')



module.exports = async function (fastify, opts , done) {
    fastify.post('/create',{preHandler:fileUpload},createUSer )
    done()
}