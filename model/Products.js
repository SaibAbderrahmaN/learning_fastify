module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull:{
                msg: 'Please enter your first_name'
              } 
        }
      },
      price:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull:{
                msg: 'Please enter the category of this products'
              } 
        }, },
    });
  
    return Products;
  };