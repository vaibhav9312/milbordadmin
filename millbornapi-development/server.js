var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3030;
var cors = require('cors');
const commonfunc = require('./routes/commonFunction');
var path = require('path');


app.use(cors());
app.options('*', cors());
app.use(express.static('dist'));
app.use(express.static('uploads'));

var sequelize = require('./sequelizeConfig').sequelizeConfig;
var entities = require('./models/entities.js')();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(function(req, res, next) {
    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var accountRouter = require('./routes/accountroutes')();
app.use('/api/account', accountRouter);

var clientTypeRouter = require('./routes/clienttyperoutes')();
app.use('/api/clienttype/', commonfunc.isAuthenticate, clientTypeRouter);
app.use('/api/clientmng/', commonfunc.isAuthenticate, clientTypeRouter);

var apiroutes = require('./routes/apiroutes')();
app.use('/api/generic/', commonfunc.isAuthenticate, apiroutes);

var apirouter = require('./routes/apiroutes')();
app.use('/api', commonfunc.isAuthenticate, apirouter);

var productRegistrationRouter = require('./routes/productRegistrationRouter')();
app.use('/api/productRegistration/', commonfunc.isAuthenticate, productRegistrationRouter);

var productGroupRouter = require('./routes/productGroupRouter')();
app.use('/api/productGroup/', commonfunc.isAuthenticate, productGroupRouter);

var uploadRouter = require('./routes/uploadRouter')();
app.use('/file/', uploadRouter);

app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(port, function(err) {
            if (err) console.log(err);

            console.log('running server on port ' + port);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });