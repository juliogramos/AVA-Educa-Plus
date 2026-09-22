import { cursos } from "../dados/listagem-cursos.js";

export function listarCursos(usuario) {
    return cursos.filter((curso) => curso.emailProfessor == usuario.email);
}
