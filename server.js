const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
const port = 3000;

const path = require('path');

const fs = require('fs');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta 'public' (HTML, CSS, JS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/auth', authRoutes);

// Rota para servir o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para servir o arquivo login.html e register.html
app.get('/:page', (req, res) => {
    const { page } = req.params;
    const filePath = path.join(__dirname, 'public', `${page}.html`);
    
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('Página não encontrada');
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});