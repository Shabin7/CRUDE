const shortid = require('shortid')
var crypto = require('crypto')

function Utils() {
    this.getShortId = function () {
        return shortid.generate()
    }

    this.createPassword = function (password) {
        var salt = crypto.randomBytes(16).toString('hex');
        var pass = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`)
        return { "salt": salt, "password": pass }
    }
}

module.exports = new Utils()