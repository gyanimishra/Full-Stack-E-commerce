const Product = require("../Models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const AsyncCatcherror= require('../middleware/AsyncCatcherror');
const ApiFeatures = require("../utils/apifeatures");
// create a new product  -----Admin

exports.createProduct = AsyncCatcherror(
  async (req, res, next) => {
    const product = await Product.create(req.body);
    console.log(product);
    res.status(201).json({
      success: true,
      product,
    });
  }
);

//get all product  ---user

exports.getAllproduct = AsyncCatcherror( async (req, res) => {
  const resultPerPage = 8;
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  let products = await apiFeature.query;


  res.status(200).json({
    success: true,
    products,
    productsCount,
    resultPerPage
  });
});

// Get Single Product or Product Details......

exports.getProductdetail = AsyncCatcherror( async (req, res,next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product Not Found',404))
    
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Update a product -----Admin

exports.updateProduct = AsyncCatcherror( async (req, res,next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product Not Found',404))
    
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

// Delete A Product  ----Admin

exports.DeleteProduct = AsyncCatcherror( async (req, res,next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product Not Found',404))
    
  }

  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully !!",
  });
});
