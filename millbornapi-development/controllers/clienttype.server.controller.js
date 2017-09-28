var bodyParser = require('body-parser');
var crypto = require('crypto');
var lsconfig = require('../routes/config');
var jwt = require('jsonwebtoken');
var Cookies = require("cookies");
var async = require('async');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
var context = require('../models/entities.js')();
var commonFunc = require('../routes/commonFunction');

exports.list = function(req, res) {
    context.db_clienttype.findAll().then(result => {
        res.status(200).send(result).end();
    }, reject => {
        res.status(400).send(reject);
    }).catch(err => {
        console.log(error);
        res.status(500).send(error);
    })
}

exports.create = function(req, res) {

    let clienttypeObj = req.body;
    clienttypeObj.CreatedAt = new Date();
    clienttypeObj.ModifiedAt = new Date();

    let td = commonFunc.getTokenData(req);

    clienttypeObj.CreatedBy = td.UserId;
    clienttypeObj.ModifiedBy = td.UserId;

    context.db_clienttype.create(clienttypeObj).then(result => {
        res.status(200).send({ message: "Added Successfully" });
    }, reject => {
        res.status(400).send(reject);
    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    });

}

exports.update = function(req, res) {

    let clienttypeObj = req.body;
    let _id = req.params.id;

    clienttypeObj.ModifiedAt = new Date();

    context.db_clienttype.update(clienttypeObj, { where: { ClientTypeId: _id } }).then(result => {
        res.status(200).send({ message: "Updated Successfully" });
    }, reject => {
        res.status(400).send(reject);
    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    });

}

exports.delete = function(req, res) {
    let _id = req.params.id;
    context.db_clienttype.destroy({ where: { ClientTypeId: _id } }).then(result => {
        res.status(200).send({ message: "Deleted Successfully" });
    }, reject => {
        res.status(400).send(reject);
    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    });
}