
const path = require('path')
const AutoLoad = require('@fastify/autoload')
const db = require('./model/index');
const webPush = require('web-push')
require("dotenv").config()

module.exports.options = {}

module.exports = async function (fastify, opts) {
  db.sequelize.sync({alert:true});




  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
