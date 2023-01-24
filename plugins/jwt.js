'use strict'
const fp = require('fastify-plugin')
/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/jwt'), {
    secret: 'RaidMarewane'
  })

  fastify.decorate("authenticate", async function(request, reply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })


  fastify.decorate("isAdmin", async function(request, reply) {
    try {
    await request.jwtVerify()
    if(request.user){
     console.log(request.user)
    }
    } catch (err) {
    reply.send(err)
   }
  })



  fastify.decorate("isliv", async function(request, reply) {
    try {
    await request.jwtVerify()
    if(request.user.type == "client"){
   
    }
    } catch (err) {
    reply.send(err)
   }
  })



})


