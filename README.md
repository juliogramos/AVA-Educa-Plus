# AVA-Educa+

## Descrição

Esse projeto foi produzido como a nota final do módulo 1 do curso de Front-End Angular do programa SCTEC. Ele serve como desafio para colocar em prática todos os conceitos de HTML, CSS e Javascript vistos ao longo do módulo.

A proposta do projeto é criar um protótipo de Ambiente Virtual de Aprendizagem (AVA) que atende a uma série de requisitos funcionais. Algumas das telas e funcionalidades do site incluem:

- Tela de login com contas pré-definidas;
- Dashboard que exibe todos os cursos em que o usuário atua;
- Página com um formulário para cadastrar novos alunos no sistema;
- Layout responsivo.

## Tecnologias e Técnicas Utilizadas

Quanto às tecnologias utilizadas:

- HTML, CSS, Javascript;
- Biblioteca [Moment.js](https://momentjs.com/) para a validação e manipulação de datas, incluida através de CDN;
- API [ViaCEP](https://viacep.com.br/) para a consulta e validação de CEPs;
- Biblioteca [Lucide](https://lucide.dev/) para a inclusão de ícones, incluída através de CDN;
- Biblioteca [http-server](https://www.npmjs.com/package/http-server) para hospedar o site localmente e evitar erros de CORS.

Quanto às técnicas utilizadas:

- Conceitos básicos de HTML, CSS e Javascript;
- Orientação à Objetos;
- Módulos;
- Assincronicidade e Fetch;
- Tags semânticas;
- Media queries e CSS responsivo;
- Organização através de Kanban e repositório Github com separação de branches;
- Etc.

## Estrutura do Projeto

```bash
.
├── assets (não utilizada)
│   ├── icons
│   └── images
├── cadastro-aluno
│   ├── cadastro-aluno.css
│   ├── cadastro-aluno.html
│   └── cadastro-aluno.js
├── css
│   ├── index.css
│   └── style.css
├── dados
│   ├── listagem-alunos.js
│   ├── listagem-cursos.js
│   └── listagem-usuarios.js
├── dashboard
│   ├── dashboard.css
│   ├── dashboard.html
│   └── dashboard.js
├── index.html
├── js
│   ├── Aluno.js
│   ├── alunos.js
│   ├── app.js
│   ├── auth.js
│   ├── cabecalho.js
│   ├── cursos.js
│   └── menu-lateral.js
├── login
│   ├── login.css
│   ├── login.html
│   └── login.js
├── node_modules (ocultado)
├── package.json
├── package-lock.json
├── README.md
└── testes
    ├── cadastrarAluno.js
    ├── classeAluno.js
    ├── estilo.html
    ├── listarCursos.js
    └── login.js
```

## Como Executar

1. Clone o repositório;
2. Execute o comando `npm install` para baixar a biblioteca http-server;
3. Execute o comando `npm start` para hospedar o site localmente utilizando a biblioteca http-server;
4. Use um navegador para acessar o endereço retornado pelo comando acima enquanto ele estiver em execução;
5. Para fechar o servidor, aperte CTRL + C no terminal.

É necessária uma conexão de internet para que todas as funcionalidades do site funcionem corretamente.

## Melhorias Possíveis

- Redirecionar o usuário para a tela de login caso ele tente acessar alguma página restrita sem estar logado;
- Não armazenar a senha do usuário em session storage;
- Melhorar o design do menu lateral;
- Deixar a gradiente de fundo consistente, sem depender da altura do conteúdo;
- Etc.
