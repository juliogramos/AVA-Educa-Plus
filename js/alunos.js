import { alunos } from "../dados/listagem-alunos.js";
import { Aluno } from "./Aluno.js";

let proximoId = 3;

export function cadastrarAluno(aluno) {
    return new Promise((resolve, reject) => {
        // Nunca vai acontecer um erro já que as validações são feitas fora
        //  dessa função, mas o enunciado diz que pode dar erro então inventei um erro
        //  (que também nunca vai ser acionado)
        try {
            if (!(aluno instanceof Aluno))
                throw new Error("Função não recebeu um aluno!");

            aluno.setId(proximoId);
            proximoId++;

            alunos.push(aluno);

            resolve("Aluno cadastrado com sucesso!");
        } catch (erro) {
            reject("Erro ao cadastrar o aluno");
        }
    });
}
