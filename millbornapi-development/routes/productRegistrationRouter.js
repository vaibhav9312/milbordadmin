var express = require('express');
var productsRegistrationRouter = express.Router();
var bodyParser = require('body-parser');
const productRegistrationController = require("../controllers/productregistration.server.controller");
// const clientmngmtcontroller = require("../controllers/clientmngmt.server.controller");

var router = function() {

    productsRegistrationRouter.route('/')
        .get(function(req, res) {
            res.send("hi");
        });

    productsRegistrationRouter.route('/list')
        .get(function(req, res) {
            return productRegistrationController.list(req, res);
        });

    productsRegistrationRouter.route('/create')
        .post(function(req, res) {
            return productRegistrationController.create(req, res);
        });

    productsRegistrationRouter.route('/update/:id')
        .put(function(req, res) {
            return productRegistrationController.update(req, res);
        });

    productsRegistrationRouter.route('/delete/:id')
        .delete(function(req, res) {
            return productRegistrationController.delete(req, res);
        });

    productsRegistrationRouter.route('/ProductsImages')
        .post(function(req, res) {
            return productRegistrationController.ProductsImagesUpload(req, res);
        });
    productsRegistrationRouter.route('/details/:id')
        .get(function(req, res) {
            return productRegistrationController.details(req, res);
        });

    productsRegistrationRouter.route('/deletedoc/:id')
        .delete(function(req, res) {
            return productRegistrationController.deletedoc(req, res);
        });

    // productsRegistrationRouter.route('/client/create')
    //     .post(function(req, res) {
    //         return clientmngmtcontroller.createOrUpdateClient(req, res);
    //     });

    // productsRegistrationRouter.route('/client/list')
    //     .get(function(req, res) {
    //         return clientmngmtcontroller.clientList(req, res);
    //     });

    // productsRegistrationRouter.route('/client/details/:id')
    //     .get(function(req, res) {
    //         return clientmngmtcontroller.clientDetails(req, res);
    //     });


    return productsRegistrationRouter;
};

module.exports = router;