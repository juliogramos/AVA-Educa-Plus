import { login } from "../js/auth.js";

const esqueceuSenha = document.getElementById("esqueceu-senha");
esqueceuSenha.addEventListener("click", () =>
    window.alert("Funcionalidade em desenvolvimento!"),
);

const form = document.querySelector("form");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const msgErro = document.getElementById("erro");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        const user = await login(email.value, senha.value);

        msgErro.textContent = "";
        sessionStorage.setItem("usuario", JSON.stringify(user));
        navigation.navigate("../dashboard/dashboard.html");
    } catch (erro) {
        msgErro.textContent = erro;
    }
});
