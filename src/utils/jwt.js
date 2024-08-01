const jwt = require('jsonwebtoken')

let sign = (payload) => {
    return jwt.sign(payload, 'secretKey')
}

let verify = (token) => {
    try {
        return jwt.verify(token, 'secretKey')
    } catch (error) {
        return {}
    }
}

module.exports = {
    sign,
    verify
}



