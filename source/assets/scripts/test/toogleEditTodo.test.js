import {toogleEditTodo} from '../lib';

test('toogleEditTodo deve mudar a propriedade isBeingEdit do tudo', () => {
  const startTodo = {text: "Ir pra praia", status: "todo", id: "f1dd5257-f9b8-41fd-8454-e781f621edb2", isBeingEdit: false};

  const expected = {text: "Ir pra praia", status: "todo", id: "f1dd5257-f9b8-41fd-8454-e781f621edb2", isBeingEdit: true}

  const result = toogleEditTodo(startTodo);

  expect(result).toEqual(expected);
});

test('toogleEditTodo não pode gerar mutações no objeto original', () => {
  const startTodo = {text: "Ir pra praia", status: "todo", id: "f1dd5257-f9b8-41fd-8454-e781f621edb2", isBeingEdit: false};
  const result = toogleEditTodo(startTodo);
  expect(result).not.toEqual(startTodo);
});

