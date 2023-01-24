const redis = require('redis');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.PORT || 6379;

module.exports.client = redis.createClient(REDIS_PORT);
