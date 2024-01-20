const express = require('express');
const Product = require('../models/product');
const { requireSignIn, isAdmin } = require('../middlewares/authMiddlewares');
const { default: slugify } = require('slugify');
const router = new express.Router();
const formidable = require('express-formidable')
const fs = require('fs')

router.post('/create-product', requireSignIn, isAdmin, formidable(), async (req, res) => {
    try {
        const { name, slug, description, price, category, quantity, artists, shipping } = req.fields
        const { photo } = req.files
        switch (true) {
            case !name:
                return res.status(500).send({ error: 'Name is required' })
            case !description:
                return res.status(500).send({ error: 'Description is required' })
            case !price:
                return res.status(500).send({ error: 'Price is required' })
            case !category:
                return res.status(500).send({ error: 'Category is required' })
            case !quantity:
                return res.status(500).send({ error: 'Quantity is required' })
            case !artists:
                return res.status(500).send({ error: 'Artists is required' })
            case photo && photo.size > 1000000:
                return res.status(500).send({ error: 'Photo is required and less than 1 mb' })
        }

        const products = new Product({ ...req.fields, slug: slugify(name) })
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save()
        res.status(201).send({
            success: true,
            message: 'New Product created',
            products
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Product"
        })
    }
})

router.get('/product', async (req, res) => {
    try {
        const products = await Product.find({}).populate("category").select("-photo").limit(12).sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            counTotal: products.length,
            message: "AllProducts ",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting products",
            error: error.message,
        });
    }
})

router.get('/product/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const productData = await Product.findById(_id).select("-photo").populate("category");;
        if (!productData) {
            res.send(404).send({
                success: false,
                message: 'Not found'
            });
        }
        else {
            res.status(200).send({
                success: true,
                message: "Single Product Fetched",
                productData,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Eror while getitng single product",
            error,
        });
    }
})

router.put('/update-product/:id', requireSignIn, isAdmin, formidable(), async (req, res) => {
    try {
        const { name, slug, description, price, category, quantity, artists, shipping } = req.fields
        const { photo } = req.files;

        switch (true) {
            case !name:
                return res.status(500).send({ error: 'Name is required' })
            case !description:
                return res.status(500).send({ error: 'Description is required' })
            case !price:
                return res.status(500).send({ error: 'Price is required' })
            case !category:
                return res.status(500).send({ error: 'Category is required' })
            case !quantity:
                return res.status(500).send({ error: 'Quantity is required' })
            case !artists:
                return res.status(500).send({ error: 'Artists is required' })
            case photo && photo.size > 1000000:
                return res.status(500).send({ error: 'Photo is required and less than 1 mb' })
        }

        const products = await Product.findByIdAndUpdate(req.params.id, { ...req.fields, slug: slugify(name) }, { new: true });
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;
        }
        await products.save();
        res.status(201).send({
            success: true,
            message: "Product Updated Successfully",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Update product",
        });
    }
});

router.get("/product-photo/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).select("photo");
        console.log(product)
        if (product.photo.data) {
            res.set("Content-type", product.photo.contentType);
            return res.status(200).send(product.photo.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting photo",
            error,
        });
    }
});

router.delete("/delete-product/:id", requireSignIn, isAdmin, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id).select("-photo");
        console.log(product)
        res.status(200).send({
            success: true,
            message: "Product Deleted successfully",
            product
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while deleting product",
            error,
        });
    }
});

module.exports = router;