class User {
    constructor(id, username, password, email, telefone, createdAt) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.telefone = telefone;
        this.createdAt = createdAt;
    }
}

module.exports = User;