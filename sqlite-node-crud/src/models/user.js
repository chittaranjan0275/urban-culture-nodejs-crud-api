const sqlite3 = require('sqlite3').verbose();
const db = require('../database');

// User model
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    static create(name, email, callback) {
        const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
        db.run(sql, [name, email], function(err) {
            if (err) {
                return callback(err);
            }
            callback(null, { id: this.lastID, name, email });
        });
    }

    static findAll(callback) {
        const sql = 'SELECT * FROM users';
        db.all(sql, [], (err, rows) => {
            if (err) {
                return callback(err);
            }
            callback(null, rows);
        });
    }

    static findById(id, callback) {
        const sql = 'SELECT * FROM users WHERE id = ?';
        db.get(sql, [id], (err, row) => {
            if (err) {
                return callback(err);
            }
            callback(null, row);
        });
    }

    static update(id, name, email, callback) {
        const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
        db.run(sql, [name, email, id], function(err) {
            if (err) {
                return callback(err);
            }
            callback(null, { id, name, email });
        });
    }

    static delete(id, callback) {
        const sql = 'DELETE FROM users WHERE id = ?';
        db.run(sql, [id], function(err) {
            if (err) {
                return callback(err);
            }
            callback(null, { id });
        });
    }
}

module.exports = User;