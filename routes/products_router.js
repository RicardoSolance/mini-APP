const router = require('express').Router();
const {  getlanding,getProducts,goEdit,createProduct,createOneProduct, updateProduct } = require('../controllers/products_controllers')


router.get("/", getlanding);
router.get("/products/create", createProduct);
router.put("/products/edit/name/:name?", updateProduct);
router.get("/products/edit/:name?", goEdit);
router.get("/products/:name?", getProducts);
router.post('/products/create', createOneProduct);




module.exports = router