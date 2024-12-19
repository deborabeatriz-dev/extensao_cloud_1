document.getElementById('loginButton')?.addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Enviar a requisição para a rota de login
    fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        if (data.message === 'Login bem-sucedido') {
            alert('Login bem-sucedido!');
            // Redirecionar para a página principal após login bem-sucedido
            window.location.href = '/home';
        } else {
            alert('Erro: ' + data.message);
        }
    })
    .catch(function (error) {
        alert('Erro na conexão com o servidor: ' + error);
    });
});

document.getElementById('registerButton')?.addEventListener('click', function () {
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const password = document.getElementById('password').value;

    // Enviar a requisição para a rota de registro
    fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, telefone, email, password }),
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        if (data.message === 'Usuário registrado com sucesso') {
            alert('Usuário registrado!');
            // Redirecionar para a página de login após cadstro bem-sucedido
            window.location.href = '/login';
        } else {
            alert('Erro: ' + data.message);
        }
    })
    .catch(function (error) {
        alert('Erro na conexão com o servidor: ' + error);
    });
});