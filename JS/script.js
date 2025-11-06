document.addEventListener('DOMContentLoaded', () => {

    const botaoCadastro = document.getElementById('btn-cadastrar');

    if (botaoCadastro) { 
        botaoCadastro.addEventListener('click', () => {
            window.location.href = 'cadastro.html'; 
        });
    }
    
    const botaoAcessar = document.getElementById('btn-acessar');
    const inputEmail = document.getElementById('login-email');
    const inputSenha = document.getElementById('login-senha');

    if (botaoAcessar) {
        
        botaoAcessar.addEventListener('click', () => {
            
            const email = inputEmail.value.trim().toLowerCase(); 
            const senha = inputSenha.value.trim();

            if (email === '' || senha === '') {
                alert('Por favor, preencha seu email e senha.');
                return; 
            }

            const userDataString = localStorage.getItem(email); 

            if (userDataString) {
                const user = JSON.parse(userDataString);

                if (user.senha === senha) {
                    alert('Login bem-sucedido! Redirecionando...');
                    window.location.href = 'suites.html'; 

                } else {
                    alert('Senha incorreta.');
                }
            
            } else {
                alert('Email não cadastrado. Por favor, crie uma conta.');
            }
        });
    }
});