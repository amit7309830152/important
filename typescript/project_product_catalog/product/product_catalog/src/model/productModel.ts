import { Db } from '../config/db';
import bcrypt from "bcryptjs";
import { Op } from "sequelize";
const { DataTypes, Model } = require('sequelize');

interface IProduct {
    id: number,
    name: string,
    price: number,
    category: string,
    qty: number,
    max_qty: number,
    min_qty: number,
    is_active: number,
    createdAt?: string,
    deletedAt?: string
}

type newProduct = Omit<IProduct, 'id' | 'isActive'>
type updateProduct = Partial<IProduct>


export class Product extends Model {
    id: number;
    name: string;
    price: number;
    category: string;
    qty: number;
    max_qty: number;
    min_qty: number;
    is_active: number;
    createdAt?: string;
    deletedAt?: string;

    constructor(product: IProduct) {
        super();
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.category = product.category;
        this.qty = product.qty;
        this.max_qty = product.max_qty;
        this.min_qty = product.min_qty;
        this.is_active = product.is_active;
    }

    public static async updateProduct<Product extends IProduct>(product: updateProduct) {
        try {
            Product.update(product, {
                where: {
                    id: product.id
                }
            })
            return 1
        } catch (error) {
            throw new Error(error);
        }
    }

    public static async getDetail(id: number) {
        try {
            const productDetail = await Product.findAll({
                where: {
                    id: id
                }
            })

            return productDetail

        } catch (error) {
            throw new Error('There is error in query');
        }
    }

    public static async getList(page: number, key: string | undefined, price_1: number | undefined, price_2: number | undefined) {
        try {
            let offset: number = (page - 1) * 5;
            let limit = 5
            let whereClause;
            if (key) {
                if (price_1 && price_2) {
                    whereClause = {
                        where: {
                            [Op.and]: [
                                {
                                    [Op.or]: [
                                        { name: { [Op.like]: `%${key}%` } },
                                        { category: { [Op.like]: `%${key}%` } }]
                                },
                                {
                                    [Op.and]: [
                                        { price: { [Op.gte]: price_1 } },
                                        { price: { [Op.lte]: price_2 } }]
                                }
                            ],
                        },
                        offset: offset,
                        limit: limit
                    }
                } else {
                    whereClause = {
                        where: {
                            [Op.or]: [
                                { name: { [Op.like]: `%${key}%` } },
                                { category: { [Op.like]: `%${key}%` } }]
                        },
                        offset: offset,
                        limit: limit
                    }
                }
            } else if (price_1 && price_2) {
                whereClause = {
                    where: {
                        [Op.and]: [
                            { price: { [Op.gte]: price_1 } },
                            { price: { [Op.lte]: price_2 } }
                        ]
                    },
                    offset: offset,
                    limit: limit
                }
            } else {
                whereClause = {
                    offset: offset,
                    limit: limit
                }
            }
            const { count, rows } = await Product.findAndCountAll(whereClause);
            return { rows, count }
        } catch (error) {
            throw new Error('There is error in query');
        }
    }

}

Product.init({
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL
    },
    category: {
        type: DataTypes.STRING
    },
    qty: {
        type: DataTypes.INTEGER
    },
    max_qty: {
        type: DataTypes.INTEGER
    },
    min_qty: {
        type: DataTypes.INTEGER
    },
    is_active: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize: Db.dbConnect(),
    tableName: 'Product',
    timestamps: false
});

Product.sync().then(() => {
    console.log('Product table created');
});