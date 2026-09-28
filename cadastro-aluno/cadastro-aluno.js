import { listarAlunos } from "../dados/listagem-alunos.js";
import { Aluno } from "../js/Aluno.js";
import { cadastrarAluno } from "../js/alunos.js";

const form = document.querySelector("form");

const nome = document.getElementById("nome");
const genero = document.getElementById("genero");
const data = document.getElementById("data");
const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const cep = document.getElementById("cep");

const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const logradouro = document.getElementById("logradouro");
const numero = document.getElementById("numero");
const complemento = document.getElementById("complemento");
const bairro = document.getElementById("bairro");

const msg = document.getElementById("msg");
const msgCep = document.getElementById("msg-cep");
let cepValido = false;

async function consultarCEP(cep) {
    let enderecoCep;
    try {
        enderecoCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        cepValido = true;
    } catch (erro) {
        msgCep.textContent = "CEP inválido!";
        cepValido = false;
        return;
    }

    msgCep.textContent = "";

    enderecoCep = await enderecoCep.json();
    logradouro.value = enderecoCep.logradouro;
    bairro.value = enderecoCep.bairro;
    cidade.value = enderecoCep.localidade;
    estado.value = enderecoCep.estado;
    // O retorno do ViaCEP também possui um campo de complemento, mas ele é
    //  bem geral então deixei sem preenchimento para que o usuário possa
    //  preencher com algo mais personalizado para ele.
}

// Quando o usuário clicar no botão salvar, o campo de CEP vai ser obrigatoriamente
//  tirado de foco, o que garante que a variável cepValido vai ser setada pela
//  função consultarCEP
cep.addEventListener("focusout", () => {
    consultarCEP(cep.value);
});

// Essa checagem já é feita pelo required no HTML, mas é bom garantir
function validarObrigatorios() {
    const obrigatorios = [
        nome,
        genero,
        data,
        cpf,
        telefone,
        email,
        cep,
        cidade,
        estado,
        logradouro,
        numero,
        bairro,
    ].map((campo) => campo.value);

    console.log(obrigatorios);

    const temFaltantes = obrigatorios.some(
        (valor) => valor == undefined || valor == null || valor == "",
    );

    if (temFaltantes) {
        throw new Error("Preencha todos os atributos obrigatórios!");
    } else {
        console.log("Obrigatórios preenchidos!");
    }
}

// Essa checagem já é feita pelo required no HTML, mas é bom garantir
function validarComprimentoNome(nome) {
    if (nome.length < 4 || nome.length > 80) {
        throw new Error("O nome deve ter entre 4 e 80 caracteres!");
    } else {
        console.log("Nome validado!");
    }
}

// O input tipo date cuida da formatação de data, mas não dá pra escolher o formato.
// O formato do formulário depende do fuso horário do navegador, e o formato
//  do valor em si vem como YYYY-MM-DD.
// Mas não tem problema já que da pra converter com o Moment na hora do cadastro.
function validarData(data) {
    const dataMoment = moment(data);
    if (!dataMoment.isValid()) throw new Error("Data inválida!");

    if (dataMoment.isBefore("1900-01-01"))
        throw new Error("Data de nascimento deve ser após 01/01/1900!");

    if (dataMoment.isAfter(moment()))
        throw new Error("Data de nascimento não pode ser no futuro!");

    console.log("Data válida!");
}

function validarCep() {
    if (!cepValido) {
        throw new Error("CEP inválido");
    }

    console.log("CEP validado!");
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        validarObrigatorios();
        validarComprimentoNome(nome.value);
        validarData(data.value);
        validarCep();
    } catch (erro) {
        msg.textContent = erro.message;
        return;
    }

    msg.textContent = "";

    const dataFormatada = moment(data.value).format("DD/MM/YYYY");

    const novoAluno = new Aluno(
        nome.value,
        genero.value,
        dataFormatada,
        cpf.value,
        telefone.value,
        email.value,
        cep.value,
        cidade.value,
        estado.value,
        logradouro.value,
        numero.value,
        complemento.value,
        bairro.value,
    );

    let resultado;

    // Não é para dar erro já que as validações são todas feitas nesse script,
    //  mas o cadastrarAluno deve ter uma possibilidade de erro para que
    //  retorne o promise reject. Então inventei um erro (que nunca será acionado)
    try {
        resultado = await cadastrarAluno(novoAluno);
    } catch (erro) {
        resultado = erro;
    } finally {
        alert(resultado);

        // Para debugar
        listarAlunos();
    }
});
