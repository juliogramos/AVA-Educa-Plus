function criarBotaoNaNav(texto, func, desabilitado, nav) {
    const botao = document.createElement("button");
    botao.textContent = texto;
    botao.addEventListener("click", func);
    botao.disabled = desabilitado;

    nav.appendChild(botao);
}

const menuLateral = document.createElement("aside");
menuLateral.classList.add("shadow-default");

const nav = document.createElement("nav");

criarBotaoNaNav(
    "Dashboard",
    () => navigation.navigate("../dashboard/dashboard.html"),
    false,
    nav,
);

criarBotaoNaNav("Cursos", undefined, true, nav);

criarBotaoNaNav(
    "Cadastro de Alunos",
    () => navigation.navigate("../cadastro-aluno/cadastro-aluno.html"),
    false,
    nav,
);

criarBotaoNaNav(
    "Sair",
    () => {
        sessionStorage.removeItem("usuario");
        navigation.navigate("../login/login.html");
    },
    false,
    nav,
);

menuLateral.appendChild(nav);
document.getElementsByClassName("container")[0].appendChild(menuLateral);
