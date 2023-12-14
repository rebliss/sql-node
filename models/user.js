const db = require('../config/database');
const index = async () => {
    const [rows] = await db.query('SELECT * FROM users ORDER BY id DESC');
    return rows;
};
const SearchUser = async (searchTerm) => {
  
        const sql = `SELECT * FROM users 
        WHERE name LIKE ? 
        OR role LIKE ?
        OR id LIKE ?
        OR official_email LIKE ? 
        OR official_number LIKE ?
        OR personal_number LIKE ?
        `;
        const searchValue = `%${searchTerm}%`;
        const [rows, fields] = await db.execute(sql, [searchValue, searchValue, searchValue, searchValue, searchValue, searchValue]);
        return rows;
}

const findByEmail = async (email) => {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
};

const UpdateByID = async (id, data) => {
    const { name, email } = data;
    const [rows1] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    if (rows1.length > 0) {
        const [data1] = await db.query('UPDATE users SET name = ?, official_email = ?  WHERE id = ?', [name, email, id]);
        return { name, email };
    }
    else {
        return '0';
    }
}
module.exports = { SearchUser, index, findByEmail, UpdateByID }