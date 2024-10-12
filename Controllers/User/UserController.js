var UserModel = require('../../Database/User').getUserModel()
var Responder = require('../../Helpers/Responder')
var Utils = require("../../Helpers/Utils")

function Controller() {
    this.createUser = function (res, req) {
        var HashedPassword = Utils.createPassword(req.password)
        UserModel.create({
            user_id: "cust" + Utils.getShortId(),
            name: {
                first_name: req.first_name,
                last_name: req.last_name,
            },
            email: req.email,
            password: HashedPassword.password,
            salt:HashedPassword.salt,
            phone_number: req.phone_number,
            address: req.address,
            dob: req.dob,
            user_type: req.user_type || 'User',
            status: req.status || 'Active',
        }, function (err, doc) {
            if (err)
                return Responder.sendFailureMessage(res, "User creation failed");

            Responder.sendSuccessData(res, "User has been created successfully", { user: doc })
        })
    }

    // this.getUserDetails = function (res, req) {
    //     UserModel.findOne({ user_id: req.params.userId }, function (err, data) {
    //         if (data != null)
    //             return Responder.sendSuccessData(res, "User Details Available", { user: data })
    //         return Responder.sendFailureMessage(res, "User Details Not Available")
    //     })
    // }
}
module.exports = new Controller();