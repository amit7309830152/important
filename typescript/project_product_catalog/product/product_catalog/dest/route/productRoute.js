"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const auth_1 = require("../middleware/auth");
// /* Import controller */
const productController_1 = require("../controller/productController");
// // Only / for create the product
router.post('/', auth_1.Auth.auth, productController_1.ProductController.createProduct);
// use always id as params
// router.put('/:id', Auth.auth, ProductController.updateProduct);
// // To get the list 
// router.get('/', Auth.auth, ProductController.listProduct);
// // only id to get the product
// router.get('/:id', Auth.auth, ProductController.detailProduct);
exports.default = router;
