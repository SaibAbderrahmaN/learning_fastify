'use strict'
const Controller = require("../controller/admin")
module.exports = async function (fastify, opts) {
  fastify.get('/',{ onRequest:[fastify.authenticate,fastify.isAdmin]},async (req, reply) => {
    reply.send({
      App:"FOOD apk"
    })
  })
}
