const pool = require('../config/db');

class ProfileRepository {
    static async createProfile(profile) {
        const { userId, dataNascimento, fotoPerfil } = profile;
        await pool.query(
            'INSERT INTO profiles (user_id, data_nascimento, foto_perfil) VALUES (?, ?, ?)',
            [userId, dataNascimento, fotoPerfil || null]
        );
    }
}

module.exports = ProfileRepository;
