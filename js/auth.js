import { usuarios } from "../dados/listagem-usuarios.js";

export function login(usuario, senha) {
    return new Promise((resolve, reject) => {
        usuarios.forEach((user) => {
            if (user.email == usuario && user.senha == senha) {
                return resolve(user);
            }
        });
        reject("Dados incorretos. Favor verificar e tentar novamente");
    });
}
