# Resposta ao Desafio Globoesporte


Meu nome é Ricardo Girardi Sixel. Meus contatos são pelo email rsixel@gmail.com e [Facebook](https://www.facebook.com/rsixel).


Essa é minha resposta ao [Desafio Globo Esporte](https://github.com/globoesporte/desafio-globoesporte.) e também pode ser encontrada [aqui no meu Github](https://github.com/rsixel/desafio-globoesporte).



Basicamente a tarefa consiste em desenvolver uma aplicação de tarefas (todo list) utilizando React.

## Breve descrição do problema

- Criar um fork do projeto [Desafio Globo Esporte](https://github.com/globoesporte/desafio-globoesporte.), e quando concluído criar um pull request do fork para esse repositório.

- Devem ser desenolvidas as seguintes features,  onde o usuário pode:

    - Inserir tarefas
    - Remover tarefas
    - Editar o texto das tarefas
    - Filtrar os items de acordo com o estado (Todos, Feitos, A fazer)
    - Marcar uma tarefa como feita (done) ou não feita

---

## Layout sugerido

Foi sugerido que se siga o seguinte `layout`:

![layout](./layout/layout.jpg)


## Abordagem da solução

- Utilizei o Visual Studio Code , a.k.a., VS Code para desenvolver todo o projeto. Open source, funciona nas plataformas Linux, Mac e Windows e tem vários plugins com suporte a HTML5, css, React etc.;
- Utilizo Ubuntu 17;
- Foi criada uma estrutura componentizada demonstrando como seria organizado um projeto cujo os componentes seriam passíveis de reaproveitamento;

- Utilizou-se `css` simples devido ao grande número de possibilidades existentes tais como scss, sass 

- Apesar de saber da existência das [respostas de concorrentes ](https://github.com/globoesporte/desafio-globoesporte/pulls) me ative a desenvolver a solução da maneira. O única exceção foi obter o [SVG da logo ](https://github.com/globoesporte/desafio-globoesporte/pull/3/files#diff-b8e567eb97ee515bcba54d4868ae77e6) contida no pull request do concorrente/futuro colega  [Rodolfo Mói de Oliveira](https://github.com/rodmoioliveira). Mas dando os créditos merecidos aqui a ele.

- Foram "esprestados" da web algumas soluções tais como :
    - [Todo list](https://codepen.io/marekdano/pen/bVNYpq);
    - [Pure css toggle button](https://codepen.io/mallendeo/pen/eLIiG);
    - [SVG Toggle check](https://react.rocks/example/SVG_toggle_check).

    Faz parte da cultura da equipe reutilizar fontes open source disponíveis e quis demonstrar a capacidade de fazê-lo.
- Foi feita um prototipação inicial :
    - Construção básica do layout com form;
    - Refatoração em componentes do render e do css;

- Uma vez o layout pronto, foi utilizado TDD para a abordagem final das *features* solicitadas no desafio.

## Sobre mim e o desafio

- Trabalho com front-end há muito tempo. Já desenvolvi frameworks como Sencha ExtJS, GWT, JSF e Angular 5. 
- Graças ao desfio aprendi mais um: React :) .
- Tenho uma enorme atração por aprender o *hype*.
- Vejo com bons olhos o trabalho que a equipe do [globosporte.com]() e a [globo.com]() vem fazendo , na fronteira de novas tecnologias tanto de front-end como back-end e *DevOps*.

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
