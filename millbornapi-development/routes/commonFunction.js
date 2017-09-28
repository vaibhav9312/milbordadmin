var crypto = require('crypto');
var lsconfig = require('./config');
var jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
var EmailTemplate = require('email-templates').EmailTemplate;
var path = require('path');

exports.decrypt = function(text) {
    var decipher = crypto.createDecipher(lsconfig.algorithm, lsconfig.secret)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}

exports.isAuthenticate = function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];

    if (token) {
        jwt.verify(token, lsconfig.secret, function(err, decoded) {
            if (err) {
                res.status(401).send("UnAuthorized : " + err);
            } else {
                next();
            }
        });

    } else {
        res.status(401).send("UnAuthorized");
    }
}

exports.getTokenData = function(req) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    token = token.replace(/['"]+/g, '');

    return jwt.decode(token, lsconfig.secret);
}

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'darpanpathak77@gmail.com',
        pass: 'darpan123'
    }
});

// send mail with defined transport object
exports.sendSingleMail = function(mailOptions, data) {

    return new Promise(function(resolve, reject) {
        var sendNewClientRegistration = new EmailTemplate(path.join(__dirname, '../templates/', 'client-create'));
        sendNewClientRegistration.render(data, function(err, result) {

            if (err)
                reject({ status: 500, msg: err });
            else {
                mailOptions.html = result.html;

                transporter.sendMail(mailOptions, function(err, info) {
                    if (error) {
                        reject({ status: 500, msg: error });
                    } else {
                        resolve({ status: 200, msg: info });
                    }
                });
            }
        });
    });
}