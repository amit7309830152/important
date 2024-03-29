import { Request, Response, NextFunction } from 'express'
import { ProductModel } from '../model/productModel'

export class ProductController {
    public static async createProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const product = await ProductModel.createProduct({
                name: req.body.name,
                price: req.body.price,
                category: req.body.catagory,
                qty: req.body.qty,
                maxQty: req.body.maxQty,
                minQty: req.body.minQty
            })
            res.status(200).send({ status: true, message: 'New product created', data: product })
        } catch (error) {
            res.status(500).send({ status: false, message: 'Something went wrong' })
        }
    }

    public static async updateProduct(req: Request, res: Response, next: NextFunction) {
        let productId;
        try {
            if (!req.body.productId) {
                res.status(400).send({ status: false, message: 'product id is missing' })
            } else {
                productId = req.body.productId
            }

            const product: ProductModel = new ProductModel()
            await product.getDetail(+productId)
            if (req.body.isActive) {
                product.isActive = req.body.isActive
            }
            if (req.body.productId) {
                product.id = req.body.productId
            }
            if (req.body.price) {
                product.price = req.body.price
            }
            if (req.body.category) {
                product.category = req.body.category
            }
            if (req.body.qty) {
                product.qty = req.body.qty
            }
            if (req.body.maxQty) {
                product.maxQty = req.body.maxQty
            }
            if (req.body.minQty) {
                product.minQty = req.body.minQty
            }
            if (req.body.name) {
                product.name = req.body.name
            }
            await product.updateProduct<ProductModel>(product);
            res.status(200).send({ status: true, message: 'Product status is updated' })
        } catch (error) {
            res.status(500).send({ status: false, message: 'Something went wrong' })
        }
    }

    public static async listProduct(req: Request, res: Response, next: NextFunction) {
        try {
            let pageNo: number = 1;
            let key: string | undefined = undefined;
            let priceRangeStart: number = 0;
            let priceRangeEnd: number = 0;
            if (req.query.key) {
                key = <string>req.query.key;
            }
            if (req.query.priceRangeStart) {
                priceRangeStart = +req.query.priceRangeStart;
            }
            if (req.query.priceRangeEnd) {
                priceRangeEnd = +req.query.priceRangeEnd;
            }
            if (req.query.pageNo) {
                pageNo = +req.query.pageNo
            }

            let productList = await ProductModel.getList(+pageNo, key, priceRangeStart, priceRangeEnd)
            if (productList) {
                res.status(200).send({ status: true, message: 'New user data', data: { product_list: productList } })
            } else {
                res.status(404).send({ status: false, message: 'No product is found' })
            }
        } catch (error) {
            console.log('error', error);

            console.error(error);
            res.status(500).send({ status: false, message: 'Something went wrong' })
        }
    }

    public static async detailProduct(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) {
            return res.status(400).send({ status: false, message: 'Not found' })
        }
        const productDetail = await new ProductModel().getDetail(+req.params.id)
        try {
            if (productDetail) {
                return res.status(200).send({ status: true, message: 'success', data: { product: productDetail } })
            } else {
                return res.status(404).send({ status: false, message: 'Product not found' })
            }
        } catch (error) {
            return res.status(500).send({ status: false, message: 'Something went wrong' })
        }
    }
}
