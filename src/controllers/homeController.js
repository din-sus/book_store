const {readFile, writeFile} = require('../utils/fs')

let getHome = (req, res) => {
    let books = readFile('books')
    res.render('index', {books})
}

module.exports = {
    getHome
}