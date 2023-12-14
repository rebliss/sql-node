const AttendanceModel = require('../models/attendance');

const FetchAllAttendance = async (req, res, next) => {
    const FetchAllAttendance = await AttendanceModel.FetchAllAttendance();
    res.status(200).json({ 'status': true, 'status_code': 200, "messages": 'Record fetch Successfully', 'data': FetchAllAttendance });

}

const MarkAttendance = async (req, res, next) => {
    try {
        const MarkAttendance = await AttendanceModel.MarkAttendance(req.body);
        if (MarkAttendance.changedRows > 0) {
            res.status(200).json({ 'status': true, 'status_code': 200, "messages": 'Record Updated Successfully', 'data': req.body });
        }
        else if (MarkAttendance.insertId > 0) {
            res.status(200).json({ 'status': true, 'status_code': 200, "messages": 'Record Ineserted Successfully', 'data': req.body });
        }
        else {
            res.status(200).json({ 'status': true, 'status_code': 200, "messages": 'Nothing to do', 'data': req.body });
        }

    } catch (error) {

        console.log(error);
        next(error);
    }


}

module.exports = { MarkAttendance, FetchAllAttendance }