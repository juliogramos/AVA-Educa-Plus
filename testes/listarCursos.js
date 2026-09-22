import { listarCursos } from "../js/cursos.js";
import { usuarios } from "../dados/listagem-usuarios.js";

usuarios.forEach((usuario) => {
    console.log(listarCursos(usuario));
});
