const express = require('express');
const AttendanceController = require('../controllers/attendance');
const router = express.Router();

router.get('/',[AttendanceController.FetchAllAttendance]);
router.post('/mark',[AttendanceController.MarkAttendance]);


module.exports =router;