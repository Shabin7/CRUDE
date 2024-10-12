var UserModel = require('../../Database/User').getUserModel()
var { check, validationResult } = require('express-validator')

function UserValidator() {

    this.saveUserValidator = function (req, res) {
        return [
            check(['name', 'email', 'password', 'phone_number', 'address', 'dob', 'user_type', 'status']).notEmpty().withMessage('Required fields are missing!'),
            check('email').isEmail().withMessage('Please enter the valid EMAIL!'),
            check('email').custom(function (value) {
                return UserModel.findOne({ "email": value }).then(user => {
                    if (user) {
                        return Promise.reject('E-mail already in use')
                    }
                });
            })
        ];
    }
}
module.exports = new UserValidator()