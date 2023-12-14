const db = require('../config/database');

const index = async () => {
    const [rows] = await db.query('SELECT * FROM task_categories');
    return rows;
}

const insert = async (body) => {
    const [rows] = await db.query('INSERT INTO task_categories (name) VALUES (?)', [body.name]);
    return {
        id: rows.insertId,
        name: body.name
    };
}

module.exports = { index, insert }