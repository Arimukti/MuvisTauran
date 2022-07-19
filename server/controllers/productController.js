const { Product } = require("../models/index");

class ProductController {
    static async getAll(req, res, next) {
        try {
            const allProduct = await Product.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            });
            res.status(200).json({
                allProduct
            });
        } catch (err) {
            next(err);
        }
    }

    static async addProduct(req, res, next) {
        try {
            let { name, price, imgUrl, description, CategoryId } = req.body;

            if (price) {
                price = +price;
            }
            if (CategoryId) {
                CategoryId = +CategoryId;
            }
            await Product.create({
                name, price, imgUrl, description, CategoryId
            });

            res.status(201).json({
                message: "Success create product"
            });
        } catch (err) {
            next(err);
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            const { id } = req.params;
            const deletedProduct = await Product.destroy({
                where: {
                    id: id
                }
            });
            if (deletedProduct <= 0) {
                throw { name: "Not found product" };
            }
            console.log(deletedProduct);
            res.status(200).json({
                message: "Succes delete product witih id " + id
            });
        } catch (err) {
            next(err);
        }
    }

    static async detailProduct(req, res, next) {
        try {
            const { id } = req.params;
            const getData = await Product.findOne({
                where: {
                    id: id
                },
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            });

            if (!getData) {
                throw { name: "Not found product" };
            }

            res.status(200).json({
                data: getData
            });
        } catch (err) {
            next(err);
        }
    }

    static async editProduct(req, res, next) {
        try {
            console.log("Masuk edit");
            const { id } = req.params;
            console.log(id);
            let { name, price, imgUrl, description, CategoryId } = req.body;

            if (price) {
                price = +price;
            }
            if (CategoryId) {
                CategoryId = +CategoryId;
            }

            const updatedProduct = await Product.update({
                name, price, imgUrl, description, CategoryId
            }, {
                where: {
                    id: id
                }
            });

            if (updatedProduct[0] <= 0) {
                throw { name: "Not found product" };
            }
            res.status(200).json({
                message: "Success update product with id " + id
            });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = ProductController;