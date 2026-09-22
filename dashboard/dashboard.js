import { listarCursos } from "../js/cursos.js";

const cardContainer = document.getElementById("card-container");

function criarCard(curso) {
    const card = document.createElement("div");
    card.classList.add("card", "shadow-default");

    const titulo = document.createElement("h2");
    titulo.textContent = curso.nomeCurso;
    card.appendChild(titulo);

    const cardRow = document.createElement("div");
    cardRow.classList.add("card-row");
    card.appendChild(cardRow);

    const datas = document.createElement("div");
    const inicio = document.createElement("p");
    inicio.textContent = moment(curso.dataInicio).format("DD/MM/YYYY");
    datas.appendChild(inicio);
    const fim = document.createElement("p");
    fim.textContent = moment(curso.dataFim).format("DD/MM/YYYY");
    datas.appendChild(fim);
    cardRow.appendChild(datas);

    const cardIcon = document.createElement("div");
    cardIcon.classList.add("card-icon", "shadow-default");
    const svg = document.createElement("i");
    svg.setAttribute("data-lucide", "book-open-text");
    cardIcon.appendChild(svg);
    cardRow.appendChild(cardIcon);

    cardContainer.appendChild(card);
}

async function exibirCursos() {
    const usuarioString = sessionStorage.getItem("usuario");
    if (!usuarioString) {
        alert("Erro! Você não está logado!");
    }

    const usuario = JSON.parse(usuarioString);

    try {
        const cursos = await listarCursos(usuario);
        cursos.forEach((curso) => {
            criarCard(curso);
        });
        lucide.createIcons();
    } catch (erro) {
        console.log(erro);
    }
}

exibirCursos();
