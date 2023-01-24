const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const redis = require('redis');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient({
   legacyMode: true
});
client.connect();


const setResponse =(username,repos)=>{
   return `<h2>${username} has repos number ${repos} </h2>`
}
exports.SetTocach= async (req, reply) => {
   try {
    console.log('fetching data')
    const {username} = req.params
    console.log(username)
    const response = await fetch(`http://api.github.com/users/${username}`)
    const data = await  response.json()
    const repos = data.public_repos
    client.SETEX(username,6379,repos)
      reply.code(200).send(setResponse(username,repos))


   } catch (error) {
    
    console.log(error)
    reply.code(500).send('something went wrong')
   }
  }