const ErrorHandler = require("../utils/errorhandler");
const AsyncCatcherror= require('../middleware/AsyncCatcherror');
const User = require("../Models/userModels");
const sendToken = require("../utils/jwtToken");
/// Register a user or  sign up

exports.registerUser = AsyncCatcherror(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "this is sample url",
    },
  });

  sendToken(user, 201, res);
});


// Login User
exports.loginUser = AsyncCatcherror(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
    if (!email || !password) {
      return next(new ErrorHandler("Please Enter Email & Password", 400));
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }
  
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }
  
    sendToken(user, 200, res);
   
  });


  // Logout User
exports.logout = AsyncCatcherror(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});