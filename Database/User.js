var Connection = require('./MultiConnection')
var userConnection = Connection.getUserDBConnection()
var timestamps = require('mongoose-timestamp')

function Schema() {
    var userSchema = new userConnection.Schema({
        user_id: String,
        name: {
            first_name: String,
            last_name: String
        },
        email: String,
        password: String,
        salt:String,
        phone_number: Number,
        address: String,
        dob: Date,
        user_type: {
            type: String,
            enum: ['Admin', "User"],
            default: 'User'
        },
        status: {
            type: String,
            enum: ['Active', 'Inactive'],
            default: 'Active'
        },
    })
    userSchema.plugin(timestamps)
    var userModel = userConnection.model('user', userSchema)

    this.getUserModel = function () {
        return userModel
    }
}
module.exports = new Schema()