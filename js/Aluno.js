export class Aluno {
    // id é número inteiro, o resto é string

    #id; // Definido fora da classe
    #nome;
    #genero; // Masculino, Feminino, Outro
    #dataNascimento;
    #cpf;
    #telefone;
    #email;
    #cep;
    #cidade;
    #estado;
    #logradouro;
    #numero; // String
    #complemento;
    #bairro;

    constructor(
        id,
        nome,
        genero,
        dataNascimento,
        cpf,
        telefone,
        email,
        cep,
        cidade,
        estado,
        logradouro,
        numero,
        complemento,
        bairro,
    ) {
        this.#id = id;
        this.#nome = nome;
        this.#genero = genero;
        this.#dataNascimento = dataNascimento;
        this.#cpf = cpf;
        this.#telefone = telefone;
        this.#email = email;
        this.#cep = cep;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#logradouro = logradouro;
        this.#numero = numero;
        this.#complemento = complemento;
        this.#bairro = bairro;
    }

    // Isso não vai ser utilizado no site, é só pra debugar
    logInfo() {
        console.log(`Nome: ${this.#nome}`);
        console.log(`Gênero: ${this.#genero}`);
        console.log(`Data de Nascimento: ${this.#dataNascimento}`);
        console.log(`CPF: ${this.#cpf}`);
        console.log(`Telefone: ${this.#telefone}`);
        console.log(`Email: ${this.#email}`);
        console.log(`CEP: ${this.#cep}`);
        console.log(`Cidade: ${this.#cidade}`);
        console.log(`Estado: ${this.#estado}`);
        console.log(`Logradouro: ${this.#logradouro}`);
        console.log(`Número: ${this.#numero}`);
        console.log(`Complemento: ${this.#complemento}`);
        console.log(`Bairro: ${this.#bairro}`);
    }
}
