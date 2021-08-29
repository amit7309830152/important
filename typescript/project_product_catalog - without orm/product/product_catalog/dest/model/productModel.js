"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const db_1 = require("../config/db");
class ProductModel {
    constructor() {
        this.id = 0;
        this.name = '';
        this.price = 0;
        this.category = '';
        this.qty = 0;
        this.maxQty = 0;
        this.minQty = 0;
        this.isActive = 0;
        this.createdAt = '';
        this.deletedAt = '';
    }
    static async createProduct(product) {
        console.log(product);
        let newProduct = new ProductModel();
        newProduct.name = product.name;
        newProduct.price = product.price;
        newProduct.category = product.category;
        newProduct.qty = product.qty;
        newProduct.maxQty = product.maxQty;
        newProduct.minQty = product.minQty;
        try {
            const data = await db_1.pool.query("INSERT INTO product (name, price, category, qty, max_qty, min_qty ) VALUES($1,$2,$3,$4,$5,$6) RETURNING*", [newProduct.name,
                newProduct.price,
                newProduct.category,
                newProduct.qty,
                newProduct.maxQty,
                newProduct.minQty]);
            return data.rows[0];
        }
        catch (error) {
            console.log(error);
            throw new Error('There is error in query');
        }
    }
    async getDetail(id) {
        try {
            const detail = await db_1.pool.query(`SELECT * from product where product_id = ${id} and deleted_at is NULL`);
            if (detail.rows[0]) {
                this.id = detail.rows[0].id;
                this.name = detail.rows[0].name;
                this.price = detail.rows[0].price;
                this.category = detail.rows[0].category;
                this.qty = detail.rows[0].qty;
                this.maxQty = detail.rows[0].maxQty;
                this.minQty = detail.rows[0].minQty;
                this.isActive = detail.rows[0].isActive;
                return this;
            }
            else {
                return 0;
            }
        }
        catch (error) {
            console.log(error);
            throw new Error('There is error in query');
        }
    }
    static async getList(page, key, price_1, price_2) {
        try {
            let offset = (page - 1) * 5;
            let sqlListProduct;
            let detail;
            let priceRange;
            let keyword;
            if (key) {
                keyword = `and (name LIKE '%${key}%' or category like '%${key}%')`;
            }
            else {
                keyword = ``;
            }
            if (price_1 && price_2) {
                priceRange = `and price >= ${price_1} and price <= ${price_2}`;
            }
            else {
                priceRange = ``;
            }
            sqlListProduct = `SELECT product_id,name,price,category,qty,max_qty,min_qty from product where deleted_at is NULL and is_active = 1 ${priceRange} ${keyword} order by product_id offset ${offset} limit 5 `;
            console.log(sqlListProduct);
            detail = await db_1.pool.query(sqlListProduct);
            if (Object.keys(detail.rows).length > 0) {
                return detail.rows;
            }
            else {
                return 0;
            }
        }
        catch (error) {
            throw new Error('There is error in query');
        }
    }
    // applying the generic here
    // type error in product.isActive solved by generic constraints
    // public async updateProduct<ProductModel>(product: ProductModel) {
    async updateProduct(product) {
        try {
            let updateFields = '';
            for (let key in product) {
                if (key != 'id' && key != 'maxQty' && key != 'minQty' && key != 'isActive' && product[key]) {
                    updateFields += ` ${key}='${product[key]}',`;
                }
            }
            if (product.isActive) {
                updateFields += ` is_active = ${product.isActive},`;
            }
            updateFields += '';
            updateFields = updateFields.substring(0, updateFields.length - 1);
            const resultUpate = await db_1.pool.query(`update product set ${updateFields} where product_id = ${product.id}`);
            return 1;
        }
        catch (error) {
            throw new Error('There is error in query');
        }
    }
}
exports.ProductModel = ProductModel;
