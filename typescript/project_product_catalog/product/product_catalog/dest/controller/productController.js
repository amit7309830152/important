"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const productModel_1 = require("../model/productModel");
class ProductController {
    static async createProduct(req, res, next) {
        try {
            console.log({
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                qty: req.body.qty,
                max_qty: req.body.maxQty,
                min_qty: req.body.minQty,
                is_active: 1
            });
            const product = await productModel_1.Product.create({
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                qty: req.body.qty,
                max_qty: req.body.maxQty,
                min_qty: req.body.minQty,
                is_active: 1
            });
            res.status(200).send({ status: true, message: 'New product created', data: product });
        }
        catch (error) {
            res.status(500).send({ status: false, message: 'Something went wrong', error });
        }
    }
}
exports.ProductController = ProductController;
