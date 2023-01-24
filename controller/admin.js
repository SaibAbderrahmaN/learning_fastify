const { Op } = require("sequelize");
const { role } = require("../constIncludes/Admin");
const db = require("../model/index");

/*
exports.create = async (req, reply) => {
    try {
        const Ruselt = await Admin.create(req.body);
        reply.code(201).send(Ruselt);
      } catch (e) {
        reply.send(e)
      }
}
exports.update = async (req, reply) => {
  try {
      const id = req.body.id;
      const updatedData = req.body;
      const options = { new: true };
      const Ruselt = await Admin.findByIdAndUpdate(id,updatedData,options);
      reply.code(200).send(Ruselt);
    } catch (e) {
      reply.send(e)
    }
}
exports.login = async (req) => {
  const Ruselt = await Admin.findOne({ $or:[ {'phone':req.body.username}, {'email':req.body.username}]})
  return Ruselt;
}
exports.findone= async (req,reply) => {
  try {
    let selectOption = ['-password','-created_at','-updated_at','-__v',];
    const Ruselt = await Admin.findById(req.body.id).select(selectOption);
    reply.code(200).send(Ruselt);
   } catch (e) {
    reply.send(e)
  }
}
exports.findall = async (req, reply) => {
  try {
  // show or hidden
  let selectOption = ['-password','-created_at','-updated_at','-__v',];
  let filter = {};
  if(req.body.string!=""){
     filter = {$text: {$search: req.body.string}};
  }
  if(req.body.filter && Object.keys(req.body.filter).length != 0){
    for (const [key, value] of Object.entries(req.body.filter)) {
      filter[key] = value;
    }
  }
  const Ruselt = await Admin.find(filter).select(selectOption).limit(req.body.limit).skip(req.body.offset);
  reply.code(200).send(Ruselt);
 } catch (e) {
  reply.send(e)
}
}
*/

exports.create = async (req, reply) => {
  try {
      const Ruselt = await db.admin.create(req.body);
      reply.code(201).send(Ruselt);
    } catch (e) {
      reply.send(e)
    }
}
exports.findone= async (req,reply) => {
  try {
    let data = await  db.admin.findByPk(req.body.id, {
      attributes: {
        exclude: ["password", "updatedAt", "createdAt"],
      },
    });
    reply.code(200).send(data)
  }catch(error){

    reply.send(error)
  }
}

exports.finAaLL= async (req,reply) => {
  try {
// let data = await  db.admin.findAndCountAll({
//   where: {},
//   include: [],
//   distinct: true,
//   attributes: {
//     exclude: ["updatedAt", "createdAt"],
//   },
//   offset: req.body.offset,
//   limit: req.body.limit,
// });
let data = await  db.admin.findAll()
    reply.code(200).send(data)
  }catch(error){

    reply.send(error)
  }
}

