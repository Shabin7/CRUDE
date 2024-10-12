var UserModel = require('../../Database/User').getUserModel()
var { check, validationResult } = require('express-validator')

function UserValidator() {

    this.saveUserValidator = function () {
        return [
            check('first_name').notEmpty().withMessage('First name is required!'),
            check('last_name').notEmpty().withMessage('Last name is required!'),

            check('email').isEmail().withMessage('Please enter a valid email!'),

            check('password').notEmpty().withMessage('Password is required!').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long!'),

            check('phone_number').notEmpty().withMessage('Phone number is required!').isNumeric().withMessage('Phone number must be numeric!'),

            check('address').notEmpty().withMessage('Address is required!'),

            check('dob').notEmpty().withMessage('Date of Birth is required!').isISO8601().withMessage('Date of Birth must be a valid date in YYYY-MM-DD format!'),

            check('user_type').optional().isIn(['Admin', 'User']).withMessage('User type must be either Admin or User!'),

            check('status').optional().isIn(['Active', 'Inactive']).withMessage('Status must be either Active or Inactive!')
        ];
    }
}

module.exports = new UserValidator();