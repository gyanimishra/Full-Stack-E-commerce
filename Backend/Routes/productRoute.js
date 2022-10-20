
const express = require('express');
const { getAllproduct, createProduct, updateProduct, DeleteProduct, getProductdetail } = require('../controllers/productcontroller');

const router= express.Router();


router.route('/products').get(getAllproduct)

router.route('/product/:id').get(getProductdetail)

router.route('/product/new').post(createProduct)

router.route('/product/:id').put(updateProduct)

router.route('/product/:id').delete(DeleteProduct)

module.exports=router