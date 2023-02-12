
const path = require('path')
const AutoLoad = require('@fastify/autoload')
const db = require('./model/index');
const {client} = require('./client')

require("dotenv").config()
const fileUpload = require('fastify-file-upload')
const multer = require('fastify-multer')



module.exports.options = {}

module.exports = async function (fastify, opts) {
  db.sequelize.sync({alert:true});
  fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, 'uploads'),
    prefix: '/public/', // optional: default '/'
  })


   fastify.register(multer.contentParser)
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
 
  
}
