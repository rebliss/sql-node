const express = require('express');
const organizationController = require('../controllers/organization');
const router = express.Router();

router.get('/',organizationController.index);
router.post('/',organizationController.insert);



module.exports =router;