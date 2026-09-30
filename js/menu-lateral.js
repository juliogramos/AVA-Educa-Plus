function criarBotaoNaNav(texto, func, desabilitado, nav) {
    const botao = document.createElement("button");
    botao.textContent = texto;
    botao.addEventListener("click", func);
    botao.disabled = desabilitado;

    nav.appendChild(botao);
}

function criaMenuLateral() {
    const container = document.getElementsByClassName("container")[0];

    // Div do menu (semântico)
    const menuLateral = document.createElement("aside");
    menuLateral.classList.add("shadow-default");

    // Nav que vai conter a lista de botões (semântico)
    const nav = document.createElement("nav");

    // Criação de botões
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
    container.appendChild(menuLateral);
}

criaMenuLateral();
