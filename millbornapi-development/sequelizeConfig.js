var Sequelize = require('sequelize');
let env = process.env.NODE_ENV || "prod";
var sequelize = "";

console.log(env);

if (env == "dev") {
    sequelize = new Sequelize('millborn_v001', 'root', '', {
        host: "localhost",
        port: 3306,
        dialect: 'mysql',
        dialectOptions: {
            timeout: 3000
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timezone: '+05:30'
    });
} else {
    sequelize = new Sequelize('millborn_v001', 'millborn', 'mb@123', {
        host: "bamboo.arvixe.com",
        port: 3306,
        dialect: 'mysql',
        dialectOptions: {
            timeout: 3000
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timezone: '+05:30'
    });
}


module.exports.sequelizeConfig = sequelize;