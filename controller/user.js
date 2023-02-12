const db = require("../model/index");



module.exports.createUSer = async (req,reply)=>{
    console.log(req.body)
    const user ={
        name : req.body.name ,
        email:req.body.email,
        password:req.body.password
    }
    console.log(req.file)
    if(req.file){
        user.picture= req.file.filename
    }
    const _user = await db.users.create(user)
    await _user.save()

    reply.code(201).send(_user)

}
