import { listarCursos } from "../js/cursos.js";

const cardContainer = document.getElementById("card-container");

function criarCard(curso) {
    // Div principal
    const card = document.createElement("div");
    card.classList.add("card", "shadow-default");

    // Título do card
    const titulo = document.createElement("h2");
    titulo.textContent = curso.nomeCurso;
    card.appendChild(titulo);

    // Div para deixar as datas e o ícone lado-a-lado
    const cardRow = document.createElement("div");
    cardRow.classList.add("card-row");
    card.appendChild(cardRow);

    // Datas do curso
    const datas = document.createElement("div");
    const inicio = document.createElement("p");
    inicio.textContent = moment(curso.dataInicio).format("DD/MM/YYYY");
    datas.appendChild(inicio);
    const fim = document.createElement("p");
    fim.textContent = moment(curso.dataFim).format("DD/MM/YYYY");
    datas.appendChild(fim);
    cardRow.appendChild(datas);

    // Ícone do card
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

        // A criação de ícones Lucide deve ser feita aqui no final pois todos
        //  os cards devem ter sido criados
        lucide.createIcons();
    } catch (erro) {
        console.log(erro);
    }
}

exibirCursos();
