var bodyParser = require('body-parser');
var crypto = require('crypto');
var lsconfig = require('../routes/config');
var jwt = require('jsonwebtoken');
var Cookies = require("cookies");
var async = require('async');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
var context = require('../models/entities.js')();
var commonFunc = require('../routes/commonFunction');
var Sequelize = require('sequelize');

exports.list = function(req, res) {
    context.db_products.findAll().then(result => {
        res.status(200).send(result).end();
    }, reject => {
        res.status(400).send(reject);
    }).catch(err => {
        console.log(error);
        res.status(500).send(error);
    })
}

exports.create = function(req, res) {

    let productRegistrationObj = req.body;
    productRegistrationObj.CreatedAt = new Date();
    productRegistrationObj.ModifiedAt = new Date();

    let td = commonFunc.getTokenData(req);
    productRegistrationObj.CreatedBy = td.UserId;
    productRegistrationObj.ModifiedBy = td.UserId;

    productRegistrationObj.GroupId = productRegistrationObj.GroupId.toString();
    productRegistrationObj.SubGroupId = productRegistrationObj.SubGroupId.toString();
    productRegistrationObj.CategoryId = productRegistrationObj.CategoryId.toString();
    productRegistrationObj.SubCategoryId = productRegistrationObj.SubCategoryId.toString();
    productRegistrationObj.IsDeleted = 0;

    console.log(productRegistrationObj);

    context.db_products.create(productRegistrationObj).then(result => {
        debugger;
        console.log(result);

        let imgdocarr = [];
        if (productObj.GalleryImages.length > 0)
            imgdocarr.push(submitGalleryImagesAndDocuments(productRegistrationObj.GalleryImages, "Image", result.dataValues.ProductId));
        if (productObj.DocumentFiles.length > 0)
            imgdocarr.push(submitGalleryImagesAndDocuments(productRegistrationObj.DocumentFiles, "Document", result.dataValues.ProductId));

        if (imgdocarr.length > 0) {
            Promise.all(imgdocarr)
                .then((resolve) => {
                    res.status(200).send({ message: "Added Successfully" });
                }, reject => {
                    res.status(400).send(reject);

                }).catch(err => {
                    res.status(500).send(err);
                })
        } else {
            res.status(200).send({ message: "Added Successfully" });
        }

    }, reject => {
        res.status(400).send(reject);
    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    });

}

function submitGalleryImagesAndDocuments(datalist, type, id) {
    debugger;
    return new Promise(function(resolve, reject) {

        let createList = [];

        for (let i = 0; i < datalist.length; i++) {

            let data = { DocName: datalist[i], DocType: type, CreatedAt: new Date(), ModifiedAt: new Date(), ProductId: id }
            createList.push(context.db_productdocuments.create(data));
        }

        Promise.all(createList).then(result => {
            resolve({ status: 200, data: result });
        }, reject => {
            reject({ status: 400, msg: reject });
        }).catch(error => {
            reject({ status: 500, msg: error });
        });
    });

}



exports.update = function(req, res) {

    let productObj = req.body;
    let _id = req.params.id;

    productObj.ModifiedAt = new Date();

    let td = commonFunc.getTokenData(req);
    productObj.ModifiedBy = td.UserId;

    console.log(productObj, '******************');

    context.db_products.update(productObj, { where: { ProductId: _id } }).then(result => {

        let imgdocarr = [];
        if (productObj.GalleryImages.length > 0)
            imgdocarr.push(submitGalleryImagesAndDocuments(productObj.GalleryImages, "Image", _id));
        if (productObj.DocumentFiles.length > 0)
            imgdocarr.push(submitGalleryImagesAndDocuments(productObj.DocumentFiles, "Document", _id));

        if (imgdocarr.length > 0) {
            Promise.all(productObj)
                .then((resolve) => {
                    res.status(200).send({ message: "Updated Successfully" });
                }, reject => {
                    res.status(400).send(reject);

                }).catch(err => {
                    res.status(500).send(err);
                });

        } else {
            res.status(200).send({ message: "Updated Successfully" });
        }

    }, reject => {
        res.status(400).send(reject);
    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    });

}

exports.delete = function(req, res) {
    let _id = req.params.id;
    context.db_products.destroy({ where: { ProductId: _id } }).then(result => {
        res.status(200).send({ message: "Deleted Successfully" });
    }, reject => {
        res.status(400).send(reject);
    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    });
}

exports.details = function(req, res) {

    let query1 = `SELECT * FROM DB_Products as Products WHERE Products.ProductId=` + req.params.id;
    let query2 = `SELECT * FROM db_productdocuments as Products WHERE Products.ProductId=` + req.params.id;

    Promise.all([sequelize.query(query1, { type: Sequelize.QueryTypes.SELECT }), sequelize.query(query2, { type: Sequelize.QueryTypes.SELECT })])
        .then(result => {
            res.status(200).send(result);
        }, reject => {
            res.status(400).send(reject);
        }).catch(error => {
            res.status(500).send(error);
        });


}

exports.deletedoc = function(req, res) {
    let _id = req.params.id;
    context.db_productdocuments.destroy({ where: { Id: _id } }).then(result => {
        res.status(200).send({ message: "Deleted Successfully" });
    }, reject => {
        res.status(400).send(reject);
    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    });
}