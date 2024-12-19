const AuthService = require('../services/authService');

class AuthController {
    static async register(req, res) {
        try {
            const userId = await AuthService.register(req.body);
            res.status(201).json({ message: 'Usuário registrado com sucesso', userId });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async login(req, res) {
        try {
            const user = await AuthService.login(req.body.email, req.body.password);
            res.status(200).json({ message: 'Login bem-sucedido', user });
        } catch (err) {
            res.status(401).json({ message: err.message });
        }
    }
}

module.exports = AuthController;