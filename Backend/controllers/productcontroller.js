const Product= require('../Models/productModel')


// create a new product  -----Admin

exports.createProduct=  async (req,res,next)=>{
    const product = await Product.create(req.body);
     console.log(product)
    res.status(201).json({
      success: true,
      product
    });
}


//get all product  ---user

exports.getAllproduct= async (req,res)=>{

  products= await Product.find();
    res.status(200).json({ 
      success: true,
      products})
}

// Get Single Product or Product Details......

exports.getProductdetail = async (req,res)=>{

  let product=  await Product.findById(req.params.id)

  if(!product){
    return res.status(500).json({
      success:false,
      message:"Product not found !"
    })
  }

  
  res.status(200).json({
    success:true,
  product
  })


}







// Update a product -----Admin

exports.updateProduct = async (req,res)=>{

  let product= await Product.findById(req.params.id);

  if(!product){
    return res.status(500).json({
      success:false,
      message:"Product does not exits"
    })
  }

  product= await Product.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true,
    useFindAndModify:false
  })
res.status(200).json({
  success:true,
  product
})
}


// Delete A Product  ----Admin

exports.DeleteProduct = async (req,res)=>{

  let product=  await Product.findById(req.params.id)

  if(!product){
    return res.status(500).json({
      success:false,
      message:"Product not found !"
    })
  }

  await product.remove();
  res.status(200).json({
    success:true,
    message:"Product Deleted Successfully !!"
  })


}

