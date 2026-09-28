import { alunos } from "../dados/listagem-alunos.js";
import { Aluno } from "./Aluno.js";

let proximoId = 3;

export function cadastrarAluno(aluno) {
    return new Promise((resolve, reject) => {
        // Não sei qual erro pode dar, mas o enunciado diz que pode dar erro
        //  então inventei um erro
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
