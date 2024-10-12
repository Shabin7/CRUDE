var express = require('express')
var app = express()
var UserController = require('./UserController')
var UserValidator = require('./UserValidator')
var Responder = require('../../Helpers/Responder')
var { check, validationResult } = require('express-validator')

app.post('/create-user', UserValidator.saveUserValidator(), function (req, res) {
    var errors = validationResult(req)
    if (errors.errors[0] != null)
        return Responder.sendFailureMessage(res, errors.errors[0].msg);
    UserController.createUser(res, req.body)
})

module.exports=app;