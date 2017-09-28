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
    context.db_productgroup.findAll().then(result => {
        res.status(200).send(result).end();
    }, reject => {
        res.status(400).send(reject);
    }).catch(err => {
        console.log(error);
        res.status(500).send(error);
    })
}

exports.subGroups = function(req, res) {
    context.db_productsubgroup.findAll().then(result => {
        res.status(200).send(result).end();
    }, reject => {
        res.status(400).send(reject);
    }).catch(err => {
        console.log(error);
        res.status(500).send(error);
    })
}

exports.CategoryLists = function(req, res) {
    context.db_category.findAll().then(result => {
        res.status(200).send(result).end();
    }, reject => {
        res.status(400).send(reject);
    }).catch(err => {
        console.log(error);
        res.status(500).send(error);
    })
}


exports.SubCategoryLists = function(req, res) {
    context.db_productsubcategory.findAll().then(result => {
        res.status(200).send(result).end();
    }, reject => {
        res.status(400).send(reject);
    }).catch(err => {
        console.log(error);
        res.status(500).send(error);
    })
}


exports.findSubGroups = function(req, res) {
    let subGroupObj = req.body;
    let _id = req.params.id;
    context.db_productsubgroup.findAll({ where: { GroupId: _id } }).then(result => {
        res.status(200).send(result).end();
    }, reject => {
        res.status(400).send(reject);
    }).catch(err => {
        console.log(error);
        res.status(500).send(error);
    })
}


exports.findCategoryLists = function(req, res) {
    let subGroupObj = req.body;
    let _id = req.params.id;
    context.db_category.findAll({ where: { SubGroupId: _id } }).then(result => {
        res.status(200).send(result).end();
    }, reject => {
        res.status(400).send(reject);
    }).catch(err => {
        console.log(error);
        res.status(500).send(error);
    })
}


exports.findSubCategoryLists = function(req, res) {
    let subGroupObj = req.body;
    let _id = req.params.id;
    context.db_productsubcategory.findAll({ where: { CategoryId: _id } }).then(result => {
        res.status(200).send(result).end();
    }, reject => {
        res.status(400).send(reject);
    }).catch(err => {
        console.log(error);
        res.status(500).send(error);
    })
}