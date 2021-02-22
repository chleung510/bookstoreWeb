// server.js is considered to be main app and productRoute.js is considered to be mini app 
// to avoid routes(links) beocoming too complicated.

import express from 'express';
import Product from '../models/productModels';
import { isAuth, isAdmin } from '../util';

const router = express.Router(); // create "mini route"

// get list of products and send it to user.
router.get("/", async (req, res) =>{
    const products = await Product.find({});
    res.send(products);
});

// command for getting specific product in product API.
router.get("/:id", async (req, res) =>{
    const productId = req.params.id; // Get id of specific product.
    const product = await Product.findOne({_id: productId}); // for locating specific product.
    if (product){ //if product id matches
        res.send(product);
    }else{
        res.status(404).send({ message: 'Product not found!'});
    }
});

// command for creating product API.
// isAuth, isAdmin are to increase the security to assure only administrator 
// can create, delete and edit the products.
router.post("/", isAuth, isAdmin, async (req, res) =>{
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description,
        rating: req.body.rating,
        numReviews: req.body.numReviews
    });

    const newProduct = await product.save(); // save product as newProduct?
    if (newProduct){
        return res.status(201).send({ message: "New Product Created", data: newProduct });
    }
    return res.status(500).send({ message: "Error In Creating Product." })
});

// command for editing specific product in product API and the database.
// isAuth, isAdmin are to increase the security to assure only administrator 
// can create, delete and edit the products.
router.put("/:id", isAuth, isAdmin, async (req, res) =>{
    const productId = req.params.id; // Get id of specific product.
    const product = await Product.findById(productId); // for locating specific product.

    if (product){ // if the product exists, replace data of the product with new data.
        product.name = req.body.name;
        product.price = req.body.price;
        product.image = req.body.image;
        product.brand = req.body.brand;
        product.category = req.body.category;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;

        const updatedProduct = await product.save(); // save product as updatedProduct?
        if (updatedProduct){
            return res.status(200).send({ message: "Product Updated", data: updatedProduct });
        }
    }
    return res.status(500).send({ message: "Error In Updating Product." })
});

// command for deleting specific product in product API and the database.
// isAuth, isAdmin are to increase the security to assure only administrator 
// can create, delete and edit the products.
router.delete("/:id", isAuth, isAdmin, async (req, res) => {
    const deleteProduct = await Product.findById(req.params.id);
    if (deleteProduct) {
        await deleteProduct.remove();
        res.send({ message: "Product Deleted" });
    }else{
        res.send("Error In Deletion.")
    }
})

export default router;

