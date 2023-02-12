const bcrypt = require('fastify-bcrypt');

module.exports = (sequelize,DataTypes)=>{

var userSchema = sequelize.define("users", {
 userId: {
  field: 'user_id',
  autoIncrement: true,
  primaryKey: true,
  type: DataTypes.INTEGER
},
 password: {
  field: 'user_password',
  type: DataTypes.STRING,
  allowNull: true
 },
 name: {
  type: DataTypes.STRING,
  field: 'user_name',
  allowNull: false
 },
 email: {
  type: DataTypes.STRING,
  field: 'user_email',
  allowNull: false
 },
 picture: {
    type: DataTypes.STRING,
    field: 'picture',
    allowNull: true,
    defaultValue: "Doe",

   },
},);
userSchema.prototype.validPassword = async (password, hash) => {
 return await bcrypt.compareSync(password, hash);
}
 return userSchema;
}

