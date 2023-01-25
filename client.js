const redis = require('redis');

const REDIS_PORT = process.env.PORT || 6379;

module.exports.client = redis.createClient(6379);
