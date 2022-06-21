const Products = require('../models/productsSchema');
const { db } = require("../utils/dbMongo");


const createOneProduct = async (req, res) => {
    try {
        const prod = req.body;
        let data = await Products.create(prod);
        res.redirect('/products')
    } catch (error) {
        res.status(400).json({'error': error})
    }
}
const createProduct = async (req, res) => {
    let title = 'Create New Product'
    try {
        res.render('create.pug',{ page: title })
    } catch (error) {
        res.status(400).json({'error': error})
    }
}

const getlanding = async (req, res) => {
    try {
        res.render('home.pug')
    } catch (error) {
        res.status(400).json({'error': error})
    }
}
const getProducts = async (req, res) => {
    let name = req.params.name
    
    try {
        if (name) {
            let title= name
            let data = await Products.findOne({ name: name }, " -_id");
            // res.status(201).json(data);
            // console.log("entra en single Produts");
            res.render("product.pug", {products : data, page: title });
            // console.log(data)
        } else {
            let title = 'All Products'
            console.log("entra en All Produts");
            data = await Products.find({});
            res.render("products.pug", { products: data, page: title });
          }
    } catch (error) {
        res.status(400).json({ error: error });
    }
}
const goEdit = async (req, res) => {
    console.log("entra en go edit");
    let name = req.params.name
    try {
        if (name) {
            let data = await Products.findOne({ name: name })
            res.render("edit.pug", {page : name, product: data});
        } 
    } catch (error) {
        res.status(400).json({ error: error });
    }
}
const updateProduct = async (req, res) => {
    console.log("entra en edit");
    try {
      let name = req.query.name
      let update = req.body;
      const data = await Products.findOneAndUpdate(name, update, {new: true,runValidators: true});
      res.status(201).json(data);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };


module.exports = {createProduct,goEdit,updateProduct,getlanding,getProducts,createOneProduct}