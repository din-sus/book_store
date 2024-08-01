const { readFile } = require("../utils/fs")
const { verify } = require("../utils/jwt")

let verifyToken = (req, res, next) => {
    let admins = readFile('admins')
    let token = req.cookies.token
    let user = verify(token)
    let checkAdmin = admins.find(el=> el.id === user.id)

    if(checkAdmin){
        next()
    }else{
        res.redirect('/login')
    }
}

module.exports = {
    verifyToken
}