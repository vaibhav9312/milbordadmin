var bodyParser = require('body-parser');
var crypto = require('crypto');
var lsconfig = require('../routes/config');
var jwt = require('jsonwebtoken');
var Cookies = require("cookies");
var async = require('async');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
var context = require('../models/entities.js')();

exports.doLogin = function(req, res) {

    let username = req.body.username;
    let password = req.body.password;
    //password = encrypt(password);
    let modulename = "millborn";

    context.db_users.findAll({
        where: {
            UserName: username,
            Password: password
        }
    }).then(function(resolve) {

        if (resolve.length > 0) {
            var token = jwt.sign(resolve[0].dataValues, lsconfig.secret, {
                expiresIn: 60 * 60 // expires in 1 hours
            });

            var sendObj = {
                success: true,
                message: 'Enjoy your token!',
                token: token,
                email: resolve[0].dataValues.Email,
                fullname: resolve[0].dataValues.UserName
            };

            res.status(200).send(sendObj).end();

        } else {
            res.status(401);
            res.send({
                success: false,
                message: "Unauthorized access"
            });
            res.send();
        }
    }, function(reject) {
        res.status(401);
        res.send({
            success: false,
            message: reject
        });
        res.send();
    }).catch(err => {
        res.status(500);
        res.send({
            success: false,
            message: err
        });
        res.send();
    });

}

exports.doRegister = function(req, res) {

    var userObj = req.body;
    userObj.Password = encrypt(req.body.Password);
    delete userObj["createdAt"];
    delete userObj["updatedAt"];
    context.db_users.create(userObj).then(result => {
        res.status(200).send("User created successfully");
    }, reject => {
        res.status(400).send(reject);
    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    });

}

function encrypt(text) {
    var cipher = crypto.createCipher(lsconfig.algorithm, lsconfig.secret)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text) {
    var decipher = crypto.createDecipher(lsconfig.algorithm, lsconfig.secret)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}