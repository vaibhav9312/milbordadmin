var express = require('express');
var productGroupRouter = express.Router();
var bodyParser = require('body-parser');
const productGroupController = require("../controllers/productgroup.server.controller");

var router = function() {
   
    productGroupRouter.route('/list')
        .get(function(req, res) {
            return productGroupController.list(req, res);
        });
	productGroupRouter.route('/subGroup')
	    .get(function(req, res) {
	        return productGroupController.subGroups(req, res);
	    });
	productGroupRouter.route('/SubGroupListByID/:id')
	    .get(function(req, res) {
	        return productGroupController.findSubGroups(req, res);
	    });

	productGroupRouter.route('/CategoryList')
	    .get(function(req, res) {
	        return productGroupController.CategoryLists(req, res);
	    });

	productGroupRouter.route('/ProductCategoryListByID/:id')
	    .get(function(req, res) {
	        return productGroupController.findCategoryLists(req, res);
	    });


	productGroupRouter.route('/SubCategoryList')
	    .get(function(req, res) {
	        return productGroupController.SubCategoryLists(req, res);
	    });

	productGroupRouter.route('/ProductSubCategoryListsByID/:id')
	    .get(function(req, res) {
	        return productGroupController.findSubCategoryLists(req, res);
	    });


    return productGroupRouter;
};

module.exports = router;