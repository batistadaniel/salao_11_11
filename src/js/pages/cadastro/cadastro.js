const btnVoltar = document.getElementById('btnVoltar');
const btnSubmit = document.getElementById('btnSubmit');
const cadastroForm = document.getElementById('cadastroForm');

btnVoltar.onclick = () => {
    window.location.href = 'index.html' ;
}

cadastroForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // let email = document.getElementById('email').value;
    // let senha = document.getElementById('senha').value;
    // let nome = document.getElementById('nome').value;
    // let cpf = document.getElementById('cpf').value;
    // let dataNascimento = document.getElementById('dataNascimento').value;
    // let sexo = document.getElementById('sexo').value;
    // let cep = document.getElementById('cep').value;
    // let rua = document.getElementById('rua').value;
    // let numero = document.getElementById('numero').value;
    // let bairro = document.getElementById('bairro').value;
    // let cidade = document.getElementById('cidade').value;
    // let estado = document.getElementById('estado').value;
    // let complemento = document.getElementById('complemento').value;
    // let telefone = document.getElementById('telefone').value;
    // let celular = document.getElementById('celular').value;

    // let cadastro = {
    //     email,
    //     senha,
    //     nome,
    //     cpf,
    //     dataNascimento,
    //     sexo,
    //     cep,
    //     rua,
    //     numero,
    //     bairro,
    //     cidade,
    //     estado,
    //     complemento,
    //     telefone,
    //     celular
    // }

    // let cadastroJson = JSON.stringify(cadastro);
    // localStorage.setItem('cadastro', cadastroJson);
    window.location.href = 'index.html' ;
});

