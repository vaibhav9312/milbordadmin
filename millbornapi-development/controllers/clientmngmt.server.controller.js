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

exports.createOrUpdateClient = function(req, res) {
    let reqbody = req.body;
    let td = commonFunc.getTokenData(req);

    //at the time of create only
    if (reqbody.ClientId == 0) {
        reqbody.CreatedAt = new Date();
        reqbody.CreatedBy = td.UserId;
    }

    reqbody.ModifiedAt = new Date();
    reqbody.ModifiedBy = td.UserId;

    getLastClientId().then(result => {
        if (result.status == 200) {

            let clientObj = reqbody;

            clientObj.MainItemIds = Array.isArray(reqbody.MainItems) ? reqbody.MainItems.join(',') : reqbody.MainItems;
            clientObj.MainItemTexts = Array.isArray(reqbody.MainItemTexts) ? reqbody.MainItemTexts.join(',') : reqbody.MainItemTexts;

            //at the time of create only
            if (reqbody.ClientId == 0) {
                clientObj.ClientCode = reqbody.ClientType.substring(0, 3).toUpperCase() + (parseInt(result.msg) + 1);
                clientObj.IsActive = 0;
                clientObj.IsVerified = 0;
                clientObj.Status = "pending";
            }

            clientCreateOrUpdate(clientObj).then(client => {

                if (client.status == 200) {

                    let addObj = reqbody;
                    if (reqbody.ClientId == 0) {
                        addObj.RoleId = 4;
                        addObj.UserId = client.msg.dataValues.ClientId;
                    }

                    addObj.FullAddress = reqbody.HouseNumber + " , " + reqbody.StreetName + " , " + reqbody.Area + " , " + reqbody.CityId + " - " + reqbody.Pincode + " Landmark : " + reqbody.Landmark;

                    addressCreateOrUpdate(addObj).then(address => {
                        let finalData = { client: client.msg.dataValues, address: address.msg.dataValues };
                        if (reqbody.ClientId == 0)
                            sendApprovalEmail(finalData, 0);
                        else
                            sendApprovalEmail(finalData, 1);

                        res.status(200).send(finalData);
                    }).catch(erradd => {
                        res.status(400).send(erradd);
                    });

                } else {

                    res.status(400).send(client.msg);
                }

            }).catch(err => {

                res.status(500).send(err);
            });

        } else {
            res.status(400).send(result.msg);
        }

    }, reject => {
        res.status(400).send(reject);
    }).catch(error => {

        res.status(500).send(error);
    });

}

exports.clientList = function(req, res) {

    let queryObj = { include: ['db_clienttype'] };
    if (req.query.limit)
        queryObj.limit = Number(req.query.limit);
    if (req.query.skip)
        queryObj.offset = Number(req.query.skip);
    if (req.query.sortField && req.query.sortOrder) {
        queryObj.order = [
            [req.query.sortField, req.query.sortOrder.toUpperCase()]
        ];
    } else
        queryObj.order = [
            ['ModifiedAt', 'DESC']
        ];

    if (req.query.searchField) {
        queryObj.where = {
            $and: [{
                isActive: 0
            }, {
                $or: [{
                    FirmName: {
                        $like: '%' + req.query.searchField + '%'
                    }
                }, {
                    OwnerName: {
                        $like: '%' + req.query.searchField + '%'
                    }
                }, {
                    ClientCode: {
                        $like: '%' + req.query.searchField + '%'
                    }
                }]
            }]
        }
    } else {
        queryObj.where = {
            isActive: 0
        }
    }

    context.db_clients.findAndCountAll(queryObj).then(result => {
        res.status(200).send(result);
    }).catch(error => {
        res.status(500).send(error);
    })
}

exports.clientDetails = function(req, res) {

    let str = `SELECT * FROM DB_Clients as Clients JOIN DB_ClientType as Types on Clients.ClientTypeId = Types.ClientTypeId JOIN DB_Address as Address on Clients.ClientId = Address.UserId WHERE Clients.ClientId=` + req.params.id + ` AND Address.RoleId=4`;

    sequelize.query(str, { type: Sequelize.QueryTypes.SELECT }).then(result => {
        res.status(200).send(result);
    }, reject => {
        res.status(400).send(reject);
    }).catch(error => {
        res.status(500).send(error);
    });


}

// ------------ helpers ---------------

function getLastClientId() {
    return new Promise(function(resolve, reject) {
        sequelize.query("SELECT MAX(ClientId) as maxClientId FROM DB_Clients", { type: Sequelize.QueryTypes.SELECT }).then(result => {

            resolve({ "status": 200, "msg": result[0].maxClientId == null ? 0 : result[0].maxClientId });
        }, rej => {

            reject({ "status": 400, "msg": rej });
        }).catch(err => {

            reject({ "status": 500, "msg": err });
        })
    })
}

function sendApprovalEmail(data, isNewOld) {
    return new Promise(function(resolve, reject) {

        let sub = "";
        if (isNewOld == 0)
            sub = "New Client Registration - " + data.client.ClientId;
        else
            sub = "Client details updated - ";

        let mailOptions = {
            from: '"Pathak Darpan" <darpanpathak77@gmail.com>', // sender address
            to: 'pathakdarpan77@gmail.com.com, darpan@citymobilitysolutions.com', // list of receivers
            subject: sub, // Subject line
            text: 'The following client is registered with us. Kindly check and approve.', // plain text body
            html: '<b>Hello world ?</b>' // html body
        };

        commonFunc.sendSingleMail(mailOptions, data).then(result => {
            console.log(result);
            resolve({ status: 200, msg: result });
        }, rej => {
            console.log(rej);
            reject({ status: 400, msg: rej });
        }).catch(error => {
            console.log(error);
            reject({ status: 500, msg: error });
        });

    });
}

function addressCreateOrUpdate(data) {
    return new Promise(function(resolve, reject) {
        if (!data.Landmark)
            reject({ status: 400, msg: "Landmark can not be empty" });
        else if (!data.HouseNumber)
            reject({ status: 400, msg: "HouseNumber can not be empty" });
        else if (!data.Area)
            reject({ status: 400, msg: "Area can not be empty" });
        else if (!data.StreetName)
            reject({ status: 400, msg: "StreetName can not be empty" });
        else if (!data.Pincode)
            reject({ status: 400, msg: "Pincode can not be empty" });
        else if (!data.District)
            reject({ status: 400, msg: "District can not be empty" });

        if (data.AddressId == 0) {
            context.db_address.create(data).then(result => {
                resolve({ status: 200, msg: result });
            }, reject => {
                reject({ status: 400, msg: reject });
            }).catch(error => {
                reject({ status: 500, msg: error });
            });
        } else {
            context.db_address.update(data, { where: { AddressId: data.AddressId } }).then(result => {
                resolve({ status: 200, msg: result });
            }, reject => {
                reject({ status: 400, msg: reject });
            }).catch(error => {
                reject({ status: 500, msg: error });
            });
        }

    });
}

function clientCreateOrUpdate(data) {
    return new Promise(function(resolve, reject) {

        if (data.ClientId == 0) {
            context.db_clients.create(data).then(result => {
                resolve({ status: 200, msg: result });
            }, reject => {
                reject({ status: 400, msg: reject });
            }).catch(error => {
                reject({ status: 500, msg: error });
            });
        } else {
            context.db_clients.update(data, { where: { ClientId: data.ClientId } }).then(result => {
                resolve({ status: 200, msg: result });
            }, reject => {
                reject({ status: 400, msg: reject });
            }).catch(error => {
                reject({ status: 500, msg: error });
            });
        }

    });
}

function addMainItem(item) {
    return new Promise(function(resolve, reject) {
        if (!item)
            resolve({ status: 404, msg: "Nothing to add" });
        else {
            context.db_clientmainitens.create(item).then(result => {
                resolve({ status: 200, msg: result });
            }, reject => {
                reject({ status: 400, msg: reject });
            }).catch(error => {
                reject({ status: 500, msg: error });
            });
        }
    });
}