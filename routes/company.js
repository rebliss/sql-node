const express = require('express');
const companyController = require('../controllers/company');
const router = express.Router();

router.get('/',companyController.index);
router.post('/',companyController.insert);



module.exports =router;