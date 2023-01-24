module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notNull:{
              msg: 'Please enter your first_name'
            } 
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notNull:{
              msg: 'Please enter your last_name'
            } 
      }
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.first_name} ${this.last_name}`;
      },
      set(value) {
        throw new Error('Do not try to set the `fullName` value!');
      }
    },
    email:{
      type: DataTypes.STRING(100),
      unique:true,
      allowNull: false,
      validate: {
          isEmail: true,
      }
    },
    phone:{
      type: DataTypes.STRING(20),
      unique:true,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      validate: {
          isDate: true,
      }
  },
  socket:{
      type:DataTypes.TEXT,
      defaultValue: "[]",// -online ---> ["id_socket"] --> (1...n)
      get() {
          return JSON.parse(this.getDataValue("socket"))
        },
        set(value) {
          if (value)
            return this.setDataValue("socket", JSON.stringify(value));
        },
  },

  });

  return admin;
};