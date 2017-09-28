var Sequelize = require('sequelize');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
var fs = require('fs');
var path = require('path');

var entity = function() {

    var entities = {};

    fs.readdirSync(__dirname)
        .filter(function(file) {
            return (file.indexOf('.') !== 0) && (file !== "entities.js") && (file.slice(-3) === '.js');
        })
        .forEach(function(file) {
            var model = sequelize['import'](path.join(__dirname, file));
            entities[model.name] = model;
        });

    Object.keys(entities).forEach(function(modelName) {
        if (entities[modelName].associate) {
            entities[modelName].associate(entities);
        }
    });

    entities.db_clients.belongsTo(entities.db_clienttype, { foreignKey: 'ClientTypeId' });

    entities.sequelize = sequelize;
    entities.Sequelize = Sequelize;

    return entities;
}

module.exports = entity;