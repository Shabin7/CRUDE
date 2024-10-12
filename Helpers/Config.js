const { model } = require("mongoose")

var devConfig = {
    BASE_URL: "http://localhost:3000",
    DB_URL: {
        USERS: "mongodb://localhost:27017/CRUD"
    }
}

module.exports = devConfig;