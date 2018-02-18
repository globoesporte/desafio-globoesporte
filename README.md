# Resposta ao Desafio Globoesporte


Meu nome é Ricardo Girardi Sixel e essa é minha resposta ao [Desafio Globo Esporte](https://github.com/globoesporte/desafio-globoesporte.).

Essa resposta também pode ser encontrada [aqui no meu Github](https://github.com/rsixel/desafio-globoesporte)

Basicamente a tarefa consiste em desenvolver uma aplicação de tarefas (todo list) utilizando React.

## Devem ser atendidos os seguintes passos:

- Criar um fork desse projeto, e quando concluído crie um pull request do seu fork para esse repositório.

- Desenvolver as seguintes features  onde o usuário pode:

    - Inserir tarefas
    - Remover tarefas
    - Editar o texto das tarefas
    - Filtrar os items de acordo com o estado (Todos, Feitos, A fazer)
    - Marcar uma tarefa como feita (done) ou não feita

---

## Layout sugerido

Foi sugerido que se siga o seguinte `layout`:

![layout](./layout/layout.jpg)

---

## Dados

- É necessário que seja carregado um estado inicial a partir de um aquivo JSON , `api/data.json`.

- A partir do estado inicial, as ações de adicionar, remover e editar items devem se dar localmente no JS sem persistir estado.

- Cada item da lista só pode ter dois status, `done` ou `todo`.

- Para esse desafio não é necessário guardar as modificações que o usuário vai fazer na aplicação.

---

## Instruções de execução e teste

- Para preparar as dependências do projeto, tenha o npm instalado e execute na pasta do projeto o comando:

`npm install`

- Para executar a aplicação

`npm start`

---

### Foi solicitado um Bônus:*

Para executar os testes unitários automatizados execute o comando:

`npm test`
