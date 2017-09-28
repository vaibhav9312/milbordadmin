var express = require('express');
var apirouter = express.Router();
var bodyParser = require('body-parser');
var context = require('../models/entities.js')();
var async = require('async');
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
var lsconfig = require('./config');

var router = function(sequelize, entities) {

    apirouter.route('/')
        .get(function(req, res) {
            res.send("hi");
        });

    apirouter.route('/countrylist')
        .get(function(req, res) {
            context.db_country.findAll().then(resolve => {
                res.status(200).send(resolve).end();
            }, reject => {
                res.status(400).send(reject).end();
            }).catch(error => {
                res.status(500).send(error).end();
            })
        });

    apirouter.route('/statebycountry/:countryid')
        .get(function(req, res) {
            context.db_state.findAll({ where: { CountryId: req.params.countryid } }).then(resolve => {
                res.status(200).send(resolve).end();
            }, reject => {
                res.status(400).send(reject).end();
            }).catch(error => {
                res.status(500).send(error).end();
            })
        });

    apirouter.route('/citybystate/:stateid')
        .get(function(req, res) {
            context.db_city.findAll({ where: { StateId: req.params.stateid } }).then(resolve => {
                res.status(200).send(resolve).end();
            }, reject => {
                res.status(400).send(reject).end();
            }).catch(error => {
                res.status(500).send(error).end();
            })
        });

    apirouter.route('/mainitemsbyclienttype/:id')
        .get(function(req, res) {
            context.db_clientmainitems.findAll({ where: { ClientTypeId: req.params.id } }).then(resolve => {
                res.status(200).send(resolve).end();
            }, reject => {
                res.status(400).send(reject).end();
            }).catch(error => {
                res.status(500).send(error).end();
            })
        });



    return apirouter;
};

module.exports = router;