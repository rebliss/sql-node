const db = require('../config/database');
const moment = require('moment');

const FetchAllAttendance = async () => {
    const [rows] = await db.query('SELECT * FROM users ORDER BY id DESC');
    const [attendance] = await db.query('SELECT * FROM attendances ORDER BY id DESC');
    const joinedData = rows.map(user => {
        const userAttendance = attendance
            .filter(attendance => attendance.user_id === user.id)
            .map(attendance => ({
                id: attendance.id,
                user_id: attendance.user_id,
                attendance_date: moment(attendance.attendance_date).format('YYYY-MM-DD'),
                attendance_status: attendance.attendance_status,
                created_at: moment(attendance.created_at).format('YYYY-MM-DD HH:mm:ss'),
                updated_at: moment(attendance.updated_at).format('YYYY-MM-DD HH:mm:ss'),
            }));
        return {
            ...user,
            attendance: userAttendance,
        };
    });
    return joinedData;
}

const MarkAttendance = async (body) => {
   
        const sql = `
        SELECT *
        FROM attendances
        WHERE attendance_date = ?  
        AND user_id = ?
        `;
        const [rows] = await db.execute(sql, [body.attendance_date, body.user_id]);
       
        if (rows.length > 0) {
            const  [is_update] = await db.query('UPDATE attendances SET attendance_status = ?  WHERE user_id = ? And attendance_date = ?', [body.attendance_status, body.user_id, body.attendance_date]);
            return is_update;
        }
        else {
           const  [rows] = await db.query('INSERT INTO attendances (user_id,attendance_date,attendance_status) VALUES (?,?,?)', [body.user_id, body.attendance_date, body.attendance_status]);
            return rows;
        }
    
}

module.exports = { MarkAttendance, FetchAllAttendance }