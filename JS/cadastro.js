document.addEventListener('DOMContentLoaded', () => {

    const formCadastro = document.getElementById('form-cadastro');

    formCadastro.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const nomeInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');
        const senhaInput = document.getElementById('senha');
        const confirmarSenhaInput = document.getElementById('confirmar-senha');

        const nome = nomeInput.value.trim();
        
        const email = emailInput.value.trim().toLowerCase(); 
        
        const senha = senhaInput.value.trim();
        const confirmarSenha = confirmarSenhaInput.value.trim();

        if (nome === '' || email === '' || senha === '' || confirmarSenha === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        if (localStorage.getItem(email)) {
            alert('Este email já está cadastrado!');
            return;
        }

        const user = {
            nome: nome,
            email: email,
            senha: senha 
        };

        localStorage.setItem(email, JSON.stringify(user));

        alert('Cadastro realizado com sucesso! Você será redirecionado para o login.');
        window.location.href = 'login.html';
    });
});