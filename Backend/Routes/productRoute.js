
const express = require('express');
const { getAllproduct, createProduct, updateProduct, DeleteProduct, getProductdetail, createProductReview, getProductReviews, deleteReview } = require('../controllers/productcontroller');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router= express.Router();


router.route('/products').get(getAllproduct)

router.route('/product/:id').get(getProductdetail)

router.route('/product/new').post(isAuthenticatedUser,authorizeRoles('admin'),createProduct)

router.route('/product/:id').put(isAuthenticatedUser,authorizeRoles('admin'),updateProduct)

router.route('/product/:id').delete(isAuthenticatedUser,authorizeRoles('admin'),DeleteProduct)

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);
module.exports=router