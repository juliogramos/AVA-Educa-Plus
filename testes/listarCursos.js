import { listarCursos } from "../js/cursos.js";
import { usuarios } from "../dados/listagem-usuarios.js";

usuarios.forEach(async (usuario) => {
    try {
        const cursos = await listarCursos(usuario);
        console.log(cursos);
    } catch (erro) {
        console.log(erro);
    }
});
