const { readFile, writeFile } = require("../utils/fs")

let getOrder = (req, res) => {
    let books = readFile("books")
    let {id}  = req.params
    let book = books.find(el=> el.id == id)

    if(book){
        res.render('orders', {book})
    }else{
        res.render('notfound')
    }
}

let createOrder = (req, res) => {
    let {book_id, clientName, clientPhone, count, address, totalPrice} = req.body
    let books = readFile('books')
    let orders = readFile('orders')
    let book = books.find(el=>el.id == book_id)

    orders.push({
        id: orders.at(-1)?.id+1||1,
        book,
        clientName,
        clientPhone,
        count, address,
        totalPrice
    })

    writeFile('orders', orders)
    res.redirect('/')

}

module.exports = {
    getOrder,
    createOrder
}