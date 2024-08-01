const { readFile, writeFile } = require("../utils/fs")

let getAdmin = (req, res) => {
    let books = readFile('books')
    let orders = readFile('orders')
    let authors = readFile('authors')
    let categories = readFile('categories')
    res.render('admin', {books, orders, authors, categories})
}

let createBooks = (req, res) => {
    let {title, desc, count, price, author_id, category_id, image} = req.body
    let books = readFile('books')

    books.push({
        id: books.at(-1)?.id+1||1,
        title,
        desc,
        count,
        price,
        author_id,
        category_id,
        image
    })

    writeFile('books', books)
    res.redirect('/admin')
}

let createAuthors = (req, res) => {
    let {fullname} = req.body
    let authors = readFile('authors')

    authors.push({
        id: authors.at(-1)?.id+1||1,
        fullname
    })

    writeFile('authors', authors)
    res.redirect('/admin')
}

let createCategories = (req, res)=> {
    let {name} = req.body
    let categories = readFile('categories')

    categories.push({
        id: categories.at(-1)?.id+1||1,
        name
    })

    writeFile('categories', categories)
    res.redirect('/admin')
}

module.exports = {
    getAdmin,
    createBooks,
    createAuthors,
    createCategories
}

