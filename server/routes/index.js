"use strict";

const express = require('express');
const ProductController = require('../controllers/productController');
const UserController = require('../controllers/userControler');
const authentication = require('../middlewares/authentication');
const errorHandler = require('../middlewares/errorHandler');
const router = express.Router();


router.get('/product', ProductController.getAll);
router.get('/product/:id', ProductController.detailProduct);
router.post('/login', UserController.login);
router.use(authentication);
router.post('/product', ProductController.addProduct);
router.delete('/product/:id', ProductController.deleteProduct);
router.put('/product/:id', ProductController.editProduct);

router.use(errorHandler);
module.exports = router;