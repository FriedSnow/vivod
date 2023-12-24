const db = require('./db.js');

class Controller {
    async get(req, res){
        const items = await db.query(`SELECT id, name, title, price, img FROM cooldatabase`);
        res.json(items.rows);
        console.log('get items', items.rows[0]);        
    }
}

module.exports = new Controller();