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

async function consultarCEP(cep) {
    let enderecoCep;
    try {
        enderecoCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    } catch (erro) {
        msgCep.textContent = "CEP inválido!";
        return;
    }

    msgCep.textContent = "";

    enderecoCep = await enderecoCep.json();
    logradouro.value = enderecoCep.logradouro;
    bairro.value = enderecoCep.bairro;
    cidade.value = enderecoCep.localidade;
    estado.value = enderecoCep.estado;
}

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

    const temFaltantes = obrigatorios.every(
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

form.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
        validarObrigatorios();
        validarComprimentoNome(nome.value);
        validarData(data.value);
    } catch (erro) {
        msg.textContent = erro.message;
        return;
    }
});
