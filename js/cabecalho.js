function criaCabecalho() {
    const body = document.querySelector("body");
    const container = document.getElementsByClassName("container")[0];

    const cabecalho = document.createElement("header");

    const logo = document.createElement("h2");
    logo.textContent = "AVA-Educa+";
    cabecalho.appendChild(logo);

    const userDiv = document.createElement("div");
    userDiv.classList.add("user-div");

    const userIcon = document.createElement("div");
    userIcon.classList.add("user-icon");
    const svg = document.createElement("i");
    svg.setAttribute("data-lucide", "user");
    userIcon.appendChild(svg);

    userDiv.appendChild(userIcon);

    const user = sessionStorage.getItem("usuario");
    if (!user) {
        alert("Você não está logado!");
        return;
    }
    const username = JSON.parse(user).nome;

    const usernameDisplay = document.createElement("p");
    usernameDisplay.textContent = username;
    userDiv.appendChild(usernameDisplay);

    cabecalho.appendChild(userDiv);

    body.insertBefore(cabecalho, container);
}

criaCabecalho();
