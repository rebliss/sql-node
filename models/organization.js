const db = require('../config/database');

const index = async () => {
        const [rows] = await db.query('SELECT * FROM organizations ORDER BY id DESC');
        return rows;   
}


const insert = async(body)=>{
    const [rows] = await db.query('INSERT INTO organizations (name,address) VALUES (?,?)', [body.name,body.address]);
    return {
        id:rows.insertId,
        name:body.name,
        address:body.address
    };
}

module.exports = { index , insert };