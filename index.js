var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// Multi DB Connection Established
require('./Database/MultiConnection').createConnection();


app.use(bodyParser.json({
    limit: '50mb'
}))
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: false,
    parameterLimit: 1000000
}))

// Server Port Config

var Server = app.listen(3000, function () {
    console.log("Server is running in" + Server.address().port);
})

app.use('/api/user', require('./Controllers/User/UserRouter'))