var express = require('express');
var uploadrouter = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
let path = require('path');
var DIR = path.join(__dirname, '../', 'uploads');
const uuidv4 = require('uuid/v4');

var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, DIR)
    },
    filename: function(req, file, callback) {
        callback(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage }).array('fieldName', 10);

var router = function() {

    uploadrouter.route('/uploads')
        .post(function(req, res) {

            upload(req, res, function(err) {
                if (err) {
                    console.log(err);
                    return res.status(422).send("an Error occured")
                }
                return res.send(req.files);
            });

        });

    return uploadrouter;
}

module.exports = router;