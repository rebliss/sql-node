const db = require('../config/database');

const index = async () => {
    const [rows] = await db.query('SELECT * FROM companies ORDER BY id DESC');
    return rows;
}

const insert = async (body) => {
    const [rows] = await db.query('INSERT INTO companies (name,`lat`,`long`,address,organization_id) VALUES (?,?,?,?,?)', [body.name, body.lat, body.long, body.address, body.organization_id]);
    return {
        id: rows.insertId,
        name: body.name,
        lat: body.lat,
        long: body.long,
        address: body.address,
        organization_id: body.organization_id
    };
}

module.exports = { insert, index }
