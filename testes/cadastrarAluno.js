import { cadastrarAluno } from "../js/alunos.js";
import { Aluno } from "../js/Aluno.js";
import { listarAlunos } from "../dados/listagem-alunos.js";

async function testaCadastro(aluno) {
    try {
        const resultado = await cadastrarAluno(aluno);
        console.log(resultado);
    } catch (erro) {
        console.log(erro);
    }
}

const aluno = new Aluno(
    "Teste",
    "masculino",
    "01/01/2001",
    123,
    123,
    "a@gmail.com",
    123,
    "Florianópolis",
    "SC",
    "AAA",
    123,
    "AAA",
    "AAA",
);

listarAlunos();

testaCadastro(aluno);
testaCadastro("Teste");

listarAlunos();
