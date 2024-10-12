var user = require('mongeese').create()
var Config = require('../Helpers/Config');
var DB_URL = Config.DB_URL;
// console.log(product.connection(DB_URL.User,{useNewUrlParser:true, useUnifiedTopology:true}));

function MultiDBConnection() {
    this.createConnection = function () {
        user.connect(DB_URL.USERS, { useNewUrlParser: true, useUnifiedTopology: true })
        user.connection.on('connected', () => {
            console.log("Connected to user database");

        })
        user.connection.on('error', (err) => {
            console.log("Error in connecting to user database", err);
        })
    }
    this.getUserDBConnection = function () {
        return user
    }
}
module.exports = new MultiDBConnection()