import {changeTextTodo} from '../lib';

test('changeTextTodo deve mudar o texto do tudo', () => {
  const startTodo = {text: "Ir pra praia", status: "todo", id: "f1dd5257-f9b8-41fd-8454-e781f621edb2", isBeingEdit: false};

  const expected = {text: "Sair de Férias", status: "todo", id: "f1dd5257-f9b8-41fd-8454-e781f621edb2", isBeingEdit: false}

  const result = changeTextTodo('Sair de Férias', startTodo);

  expect(result).toEqual(expected);
});

test('changeTextTodo não pode gerar mutações no objeto original', () => {
  const startTodo = {text: "Ir pra praia", status: "todo", id: "f1dd5257-f9b8-41fd-8454-e781f621edb2", isBeingEdit: false};
  const result = changeTextTodo('Sair de Férias', startTodo);
  expect(result).not.toEqual(startTodo);
});

