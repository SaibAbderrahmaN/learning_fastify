const db = require("../model/index");


exports.create = async (req,reply)=>{
    try {
        const Ruselt = await db.Products.build(req.body);
        await Ruselt.save()
        reply.code(201).send(Ruselt);
        
    } catch (error) {
      reply.code(500).send(error)        
    }
}
exports.findProductsById = async (req,reply)=>{
  try {
    console.log(req.params ,' hello')
    const products = await db.Products.findByPk(req.params.id)
    reply.code(200).send(products)
  } catch (error) {
    reply.code(500).send(error)        
  }
}