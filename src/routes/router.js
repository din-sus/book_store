const {Router} = require('express')
const { getHome } = require('../controllers/homeController')
const { getLogin, login, register } = require('../controllers/loginController')
const { verifyToken } = require('../middleware/verifyToken')
const { getAdmin, createBooks, createAuthors, createCategories } = require('../controllers/adminController')
const { getOrder, createOrder } = require('../controllers/ordersController')

let router= Router()

router.get('/', getHome)
router.get('/login', getLogin)
router.post('/login', login)
router.post('/register', register)
router.get('/admin', verifyToken, getAdmin)
router.get('/orders/:id', getOrder)
router.post('/books/create', createBooks)
router.post('/orders/create', createOrder)
router.post('/authors/create/', createAuthors)
router.post('/categories/create/', createCategories)

module.exports = router