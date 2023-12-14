const bcrypt = require('bcrypt');
const { sign } = require('../config/jwt');
const Auth = require('../models/auth');
const validation = require('../helpers/validations');
const Response = require('../helpers/response-status');


const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Auth.login(email);
    if (!user) {
      res.status(401).json(Response.errorResponse(401, 'Invalid Email & Password credentials'));
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = sign({ user: user.user });
      return res.json(Response.LoginSuccessResponse(token, user));
    }
    res.status(401).json(Response.errorResponse(401, 'Wrong Password! Please try again'));
  } catch (error) {
    next(error);
    res.status(401).json(Response.errorResponse(401, error.message));
  }
};


const register = async (req, res, next) => {
  try {
    const bodyData = req.body;
    const password = await bcrypt.hash(req.body.password, 10);
    const user = await Auth.create(bodyData, password);
    if (user == 0) {
      res.status(409).json(Response.errorResponse(409, 'Email already exists'));
    }
    else if (user) {
      res.status(201).json(Response.InsertSuccessResponse(user));
    }
  } catch (error) {
    next(error);
    res.status(409).json(Response.errorResponse(404, error.message));
  }
};

const UpdateByID = async (req, res, next) => {
  const orders1 = await validation.validate(req.body);
  if (orders1.status == '400') {
    res.send(orders1);
  }
  try {
    const orders = await User.UpdateByID(req.params.id, req.body);
    if (orders == '0') {
      res.status(400).json(Response.errorResponse(400, 'Record not found'));
    }
    else {
      res.status(200).json(Response.InsertSuccessResponse(orders));
    }
  } catch (error) {
    next(error);
    res.status(500).json(Response.errorResponse(500, error.message))
  }
};

module.exports = { login, register, UpdateByID }
