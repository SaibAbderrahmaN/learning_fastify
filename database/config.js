module.exports = {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "localhost5000@",
        DB: "devgate",
        dialect: "mysql",
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        logging:false,
        dialectOptions: {
            useUTC: true, 
            dateStrings: true,
            typeCast: true,
            autoJsonMap: false,
      },
      timezone: '+01:00',
        pool: {
            max: 30,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
};
