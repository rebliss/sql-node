const express = require('express');
const orders = require('../controllers/order');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticate, [orders.MakeOrder]);
router.get('/', authenticate, [orders.getAllOrder]);
router.get('/:id', authenticate, [orders.fetchByID]);
router.put('/:id', authenticate, [orders.UpdateByID]);
router.delete('/:id', authenticate, [orders.deleteOrder]);
router.get('/total/order/:id', [orders.totalOrder]);

module.exports = router;