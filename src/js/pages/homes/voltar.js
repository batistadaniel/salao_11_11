const btnEntrada = document.getElementById('btnEntrar');
const btnCadastrar = document.getElementById('btnCadastrar');

btnEntrar.onclick = () => {
    window.location.href = 'login.html';
}

btnCadastrar.onclick = () => {
    window.location.href = 'cadastro.html';
}