const db = require('../config/database');
const create = async (customer_name, item_name, status, order_no, total, order_date) => {
    const [rows] = await db.query('INSERT INTO orders (customer_name,item_name,status, order_no,total,order_date) VALUES (?,? ,?,?,?,?)', [customer_name, item_name, status, order_no, total, order_date]);
    return { id: rows.insertId, customer_name, item_name, status, order_no, total, order_date };
}

const findAll = async () => {
    const [rows] = await db.query('SELECT * FROM Orders ORDER BY id DESC');
    return rows;
};

const deleteOrder = async (id) => {
    const [rows1] = await db.query('SELECT * FROM orders WHERE id = ?', [id]);
    if (rows1.length > 0) {
        const [rows] = await db.query('DELETE FROM orders WHERE id = ?', [id]);
    }
    else {
        return '0';
    }
}
const fetchByID = async (id) => {
    const [rows1] = await db.query('SELECT * FROM orders WHERE id = ?', [id]);
    if (rows1.length > 0) {
        return rows1;
    }
    else {
        return '0';
    }
}

const UpdateByID = async (id, data) => {
    const { customer_name, item_name, total, status } = data;
    const [rows1] = await db.query('SELECT * FROM orders WHERE id = ?', [id]);
    if (rows1.length > 0) {
        const [data1] = await db.query('UPDATE orders SET customer_name = ?, item_name=?, total = ? , status = ? WHERE id = ?', [customer_name, item_name, total, status, id]);
        return { customer_name, total, status };
    }
    else {
        return '0';
    }
}

const countOrder = async (countOrdertype, order_today) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    if (countOrdertype == 'all') {
        const [row] = await db.query('select COUNT(*) as alldata from orders');
        return row[0];
    }
    else if (countOrdertype == 'today') {
        const [row] = await db.query(`SELECT COUNT(*) as todaydata FROM orders WHERE DATE(order_date) = '${order_today}'`);
        return row[0];
    }
    else if (countOrdertype == 'month') {
        const [row] = await db.query(`SELECT COUNT(*) as monthdata FROM orders WHERE YEAR(order_date) = ${year} AND MONTH(order_date) = ${month}`);
        return row[0];
    }
}

module.exports = { findAll, create, deleteOrder, fetchByID, UpdateByID, countOrder }