
const express = require('express');
const { getAllproduct, createProduct, updateProduct, DeleteProduct, getProductdetail } = require('../controllers/productcontroller');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router= express.Router();


router.route('/products').get(getAllproduct)

router.route('/product/:id').get(isAuthenticatedUser,authorizeRoles('admin'),getProductdetail)

router.route('/product/new').post(isAuthenticatedUser,authorizeRoles('admin'),createProduct)

router.route('/product/:id').put(isAuthenticatedUser,authorizeRoles('admin'),updateProduct)

router.route('/product/:id').delete(isAuthenticatedUser,authorizeRoles('admin'),DeleteProduct)

module.exports=router