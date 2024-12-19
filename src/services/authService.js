const bcrypt = require('bcrypt');
const UserRepository = require('../repositories/userRepository');

class AuthService {
    static async register(user) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        return UserRepository.createUser(user);
    }

    static async login(email, password) {
        const user = await UserRepository.findByEmail(email);
        if (!user) throw new Error('Usuário não encontrado');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error('Senha inválida');

        return user;
    }
}

module.exports = AuthService;