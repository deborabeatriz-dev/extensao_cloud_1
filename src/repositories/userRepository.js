const pool = require('../config/db');

class UserRepository {
    static async createUser(user) {
        const { username, password, email, telefone } = user;
        const [result] = await pool.query(
            'INSERT INTO users (username, password, email, telefone) VALUES (?, ?, ?, ?)',
            [username, password, email, telefone || null]
        );
        return result.insertId;
    }

    static async findByEmail(email) {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    }
}

module.exports = UserRepository;