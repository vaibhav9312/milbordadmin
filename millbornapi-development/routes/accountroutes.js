var express = require('express');
var accrouter = express.Router();
var bodyParser = require('body-parser');
var async = require('async');
var fs = require('fs');
var accountCtrl = require('../controllers/account.server.controller');

var router = function() {


    accrouter.route('/login')
        .post(function(req, res) {
            return accountCtrl.doLogin(req, res);
        });

    accrouter.route('/register')
        .post(function(req, res) {
            return accountCtrl.doRegister(req, res);
        });



    return accrouter;
};

module.exports = router;