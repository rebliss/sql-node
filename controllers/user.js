const User = require('../models/user');
const validation = require('../helpers/validations');


const index = async (req, res, next) => {
  try {
    const data = await User.index();
    res.json(data);
  } catch (error) {
    
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error','error-message':error.message });
  }
};

const SearchUser = async (req, res, next) => {
  const name = req.params.name;
  try {
    const SearchValue = await User.SearchUser(name);
    if (SearchValue.length > 0) {
      res.status(200).json({ 'status': true, 'status_code': 200, 'message': 'Searching records', 'data': SearchValue })
      
    }
    else {
      res.status(404).json({ 'status': true, 'status_code': 404, 'message': 'Record not found', 'data': '[]' })
      
    }
  } catch (error) {
    
  }
}


const UpdateByID = async (req, res, next) => {
  const orders1 = await validation.validate(req.body);
  if (orders1.status == '400') {
    res.send(orders1);
  }
  try {
    const orders = await User.UpdateByID(req.params.id, req.body);
    if (orders == '0') {
      res.status(400).json({ "messages": 'Record not found', 'status': 400 });
    }
    res.status(200).json({ "messages": 'Record Updated', 'status': 200, orders });
  } catch (err) {
    next(err);
  }
};

module.exports = { index, UpdateByID, SearchUser }
