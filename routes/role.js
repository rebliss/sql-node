const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role');
const { authenticate } = require('../middleware/auth');

router.get('/',authenticate,[roleController.index]);
router.post('/',roleController.insert);


module.exports = router;