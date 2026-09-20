import { login } from "../js/auth.js";

async function testaLogin() {
    // Usuário e senha corretos
    try {
        const user = await login("ana.silva@edutech.com", "123456");
        console.log("Usuário:", user);
    } catch (erro) {
        console.log("Erro:", erro);
    }

    // Usuário correto e senha errada
    try {
        const user = await login("ana.silva@edutech.com", "senha");
        console.log("Usuário:", user);
    } catch (erro) {
        console.log("Erro:", erro);
    }

    // Usuário e senha errados
    try {
        const user = await login("teste@teste.com", "teste");
        console.log("Usuário:", user);
    } catch (erro) {
        console.log("Erro:", erro);
    }
}

testaLogin();
