const errorHandler = require("../middelwares/errorMiddleware");
const userModel = require("../models/userModel.");
const errorResponse = require("../utils/errorResponse");

//JWT Token
exports.sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken(res);
  res.statusCode(statusCode).json({
    success: true,
    token,
  });
};

//REGISTER
exports.registerController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    //existing User
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return next(new errorResponse("Email is already registered", 500));
    }
    const user = await userModel.create({ username, email, password });
    this.sendToken(user, 201, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
//LOGIN
exports.loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return next(new errorHandler("Please provide email or password!"));
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return next(new errorHandler("Invalid Credentials", 401));
    }
    const isMatch = await userModel.matchPassword(password);
    if (!isMatch) {
      return next(new errorHandler("Invalid Credentials", 401));
    }
    //res
    this.sendToken(user, 200, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.logoutController = async (req, res) => {
  res.clearCookie("refreshToken");
  return res.status(200).json({
    success: true,
    message: "Logout Successfully",
  });
};
