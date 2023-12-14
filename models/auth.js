const db = require('../config/database');
const login = async (email) => {
    const [rows] = await db.query('SELECT * FROM users WHERE official_email = ?', [email]);
    return rows[0];
};
const create = async (body, password) => {
    try {
        const [rows1] = await db.query('SELECT * FROM users WHERE official_email = ?', [body.official_email]);
        if (rows1.length > 0) {
            return '0';
        }
        else {
            const [rows] = await db.query('INSERT INTO users (name,role ,official_email,personal_email,official_number,personal_number,gender,address,dob,emp_id,company_id,password) VALUES (?,?, ?,?,?,?,?,?,?,?,?,?)', [body.name, body.role, body.official_email, body.personal_email, body.official_number, body.personal_number, body.gender, body.address, body.dob, body.emp_id, body.company_id, password]);
            return { id: rows.insertId, body }
        }
    }
    catch (error) {
        console.error('Error creating user:', error);
        throw error; // You may want to handle or log the error differently
    }
}
const UpdateByID = async (id, data) => {
    const { name, email } = data;
    const [rows1] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    if (rows1.length > 0) {
        const [data1] = await db.query('UPDATE users SET name = ?, email = ?  WHERE id = ?', [name, email, id]);
        return { name, email };
    }
    else {
        return '0';
    }
}
module.exports = { create, login, UpdateByID }