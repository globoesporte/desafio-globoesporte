import {toogleTodo} from '../lib';

test('toogleTodo deve mudar a propriedade status do tudo', () => {
  const startTodo = {text: "Ir pra praia", status: "todo", id: "f1dd5257-f9b8-41fd-8454-e781f621edb2", isBeingEdit: false};

  const expected = {text: "Ir pra praia", status: "done", id: "f1dd5257-f9b8-41fd-8454-e781f621edb2", isBeingEdit: false}

  const result = toogleTodo(startTodo);

  expect(result).toEqual(expected);
});

test('toogleTodo não pode gerar mutações no objeto original', () => {
  const startTodo = {text: "Ir pra praia", status: "todo", id: "f1dd5257-f9b8-41fd-8454-e781f621edb2", isBeingEdit: false};
  const result = toogleTodo(startTodo);
  expect(result).not.toEqual(startTodo);
});

