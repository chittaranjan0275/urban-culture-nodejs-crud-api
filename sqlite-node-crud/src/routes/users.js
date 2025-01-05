const express = require('express');
const router = express.Router();
const db = require('../database');

// GET all users
router.get('/', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// GET one user
router.get('/:id', (req, res) => {
    db.get('SELECT * FROM users WHERE id = ?', [req.params.id], (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json(row);
    });
});

// CREATE user
router.post('/', (req, res) => {
    const { name, email } = req.body;
    db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], function(err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            id: this.lastID,
            name,
            email
        });
    });
});

// UPDATE user
router.put('/:id', (req, res) => {
    const { name, email } = req.body;
    db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, req.params.id], function(err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            id: req.params.id,
            name,
            email
        });
    });
});

// DELETE user
router.delete('/:id', (req, res) => {
    db.run('DELETE FROM users WHERE id = ?', req.params.id, function(err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ message: 'User deleted', id: req.params.id });
    });
});

module.exports = router;