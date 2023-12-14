const express = require('express');
const  User = require('../controllers/user');
const router = express.Router();

router.get('/', [User.index]);
router.get('/search/:name', User.SearchUser);
router.put('/:id', [User.UpdateByID]);
module.exports = router;