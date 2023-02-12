const Multer = require('fastify-multer')
const shortid = require("shortid");
const path = require("path");



process.env.ROUT_PATH = __dirname

const ROUT_PATH = process.env.ROUT_PATH
const storage = Multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  });
  const upload = Multer({ storage });


const fileUpload =  upload.single("file")


const uploadFile = async(req,reply)=>{
    console.log(req.file)
}
module.exports = {
    fileUpload, Multer ,uploadFile
}

