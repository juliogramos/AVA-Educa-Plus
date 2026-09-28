function criaCabecalho() {
    const body = document.querySelector("body");
    const container = document.getElementsByClassName("container")[0];

    // Div principal (semântica)
    const cabecalho = document.createElement("header");

    // Logo do AVA-Educa+
    const logo = document.createElement("h2");
    logo.textContent = "AVA-Educa+";
    cabecalho.appendChild(logo);

    // Div com as informações do usuário logado
    const userDiv = document.createElement("div");
    userDiv.classList.add("user-div");

    // Div com o ícone de usuário
    // Ele será inserido após a execução dessa função pelo Lucide
    const userIcon = document.createElement("div");
    userIcon.classList.add("user-icon");
    const svg = document.createElement("i");
    svg.setAttribute("data-lucide", "user");
    userIcon.appendChild(svg);
    userDiv.appendChild(userIcon);

    // Checagem de erro é para fins de debug apenas
    // Idealmente deveria ser feito algum redirecionamento do usuário de volta
    //  para a página de login, mas isso não foi pedido então não fiz
    const user = sessionStorage.getItem("usuario");
    if (!user) {
        alert("Você não está logado!");
        return;
    }
    const username = JSON.parse(user).nome;

    // Exibição do nome do usuário logado
    const usernameDisplay = document.createElement("p");
    usernameDisplay.textContent = username;
    userDiv.appendChild(usernameDisplay);

    cabecalho.appendChild(userDiv);

    body.insertBefore(cabecalho, container);
}

criaCabecalho();

// Cria o ícone do usuário no final após ele ser inserido no documento
lucide.createIcons();
