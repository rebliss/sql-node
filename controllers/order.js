const Order = require('../models/order');
const validation = require('../helpers/validations');
const path = require('path');
const moment = require('moment-timezone');


const MakeOrder = async (req, res, next) => {

  moment.tz.setDefault('Asia/Kolkata');

const now = moment();
const order_date = now.format('YYYY-MM-DD HH:mm:ss');
const order_no = 'OrderNo'+ now.format('YYYYMDHHms');

  try {
    const {customer_name,item_name,status,total } = req.body;
    const user = await Order.create(customer_name, item_name, status, order_no,total,order_date);
    if(user==0){
    res.status(400).json({ 'message':'Email Already Exists','status':400});
    }
    if(user){
    res.status(201).json({ 'message':'Recored created','status':201,data:user});
    }
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });
    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(401).json({ error: 'Invalid email or password' });
    const token = sign({ id: user.id });
    res.json({ token });
  } catch (err) {
    next(err);
  }
}

const getAllOrder = async (req, res, next) => {

  try {
    const orders = await Order.findAll();
    if(orders!=null){
      res.json(orders);
    }
    else{
  res.send({'Message':'Record not found'});
    }
  } catch (err) {


    next(err);
  }
};

const fetchByID = async (req, res, next) => {
  try {
    const orders = await Order.fetchByID(req.params.id);
   if(orders=='0'){
    res.status(400).json({"messages":'Record not found','status':400});
   }
    res.status(200).json({"messages":'Record found','status':200,orders});
  } catch (err) {
    next(err);
  }
};
  const deleteOrder = async (req, res, next) => {
    try {
      const orders = await Order.deleteOrder(req.params.id);
     if(orders=='0'){
      res.status(400).json({"messages":'Record not found','status':400});
     }
      res.status(200).json({"messages":'Record deleted','status':200,orders});
    } catch (err) {
      next(err);
    }
  };


  const UpdateByID = async (req, res, next) => {
   const orders1 = await validation.validate(req.body);
   if(orders1.status=='400'){
     res.send(orders1);
   }
    try {
      const orders = await Order.UpdateByID(req.params.id, req.body);
     if(orders=='0'){
      res.status(400).json({"messages":'Record not found','status':400});
     }
      res.status(200).json({"messages":'Record Updated','status':200,orders});
    } catch (err) {
      next(err);
    }
};

const totalOrder = async (req, res, next) => {

  const countOrdertype = req.params.id;
  moment.tz.setDefault('Asia/Kolkata');
  const now = moment();
  const order_today = now.format('YYYY-MM-DD');
  try {
    const totalOrderCount = await Order.countOrder(countOrdertype, order_today);
    if (totalOrderCount) {
      res.send(totalOrderCount);
    }
    else {
      res.send('Nothing to found');
    }
  } catch (err) {
    next(err);

  }
}

module.exports = { MakeOrder, UpdateByID, getAllOrder, deleteOrder, fetchByID, totalOrder }