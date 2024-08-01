const { readFile, writeFile } = require("../utils/fs")
const { sign, verify } = require('../utils/jwt')

let getLogin = (req, res) => {
    res.render('login')
}

let login = (req, res) => {
    let {username, password} = req.body
    let admins = readFile('admins')
    let checkAdmin = admins.find(el=> el.username === username && el.password == password)

    if(checkAdmin){
        let token = sign({id: checkAdmin.id})
        res.cookie('token', token)
        res.redirect('/admin')
    }else{
        res.redirect('/login')
    }
}

let register = (req, res) => {
    let {name, username, password} = req.body
    let admins = readFile('admins')
    let checkAdmin = admins.find(el=> el.username === username)

    if(checkAdmin){
        res.redirect('/login')
    }else{
        let admin = {
            id: admins.at(-1)?.id+1||1,
            name,
            username,
            password
        }
        admins.push(admin)
        writeFile('admins', admins)

        let token = sign({id: admin.id})
        res.cookie('token', token)
        res.redirect('/admin')
    }
}

module.exports = {
    getLogin,
    login,
    register
}