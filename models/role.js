const db = require('../config/database');

const index = async () => {
    const [rows] = await db.query('SELECT * FROM roles');
    return rows;
}

const insert = async (body) => {
    const [rows] = await db.query('INSERT INTO roles (name) VALUES (?)', [body.name]);
    return {
        id: rows.insertId,
        name: body.name
    };
}

module.exports = { index, insert }