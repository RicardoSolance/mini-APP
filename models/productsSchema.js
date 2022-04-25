const mongoose = require('mongoose');

const productSchema = {
    name: {
        type: String, 
        required: true,
        unique: true
        
    },
    price: {
        type: String, 
        required: true 
    },
    description: {
        type: String, 
        required: true 
    }, 
    image:{
        type: String,
        validate: {
            validator: function(url){
                return url.indexOf('.jpg') != -1;
            }, 
            message: "Only JPG pictures"
        }
    }

};

const pSchema = mongoose.Schema(productSchema);
const Products = mongoose.model('products', pSchema);
module.exports = Products;