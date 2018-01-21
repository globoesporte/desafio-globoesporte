import {addTodo} from '../lib';

test('addTodo deve adicionar um todo na lista de todos', () => {
  const startTodos = [
    {text: "Ir pra praia", status: "done", id: "f1dd5257-f9b8-41fd-8454-e781f621edb2", isBeingEdit: false},
    {text: "Fazer exercício", status: "done", id: "c8af0989-bd15-486a-a6e7-fe0226287208", isBeingEdit: false},
    {text: "Estudar React", status: "done", id: "6236b42d-4110-4558-8151-752b7ab2933b", isBeingEdit: false},
    {text: "Assistir série", status: "todo", id: "33b32936-d962-4b7c-a8e2-1a87a2656776", isBeingEdit: false}
  ];
  const newTodo = {text: "Ler o Globosporte", status: "todo", id: "f1714cc2-2f20-4c17-954e-c5b443d25c83", isBeingEdit: false};
  const expected = [
    {text: "Ir pra praia", status: "done", id: "f1dd5257-f9b8-41fd-8454-e781f621edb2", isBeingEdit: false},
    {text: "Fazer exercício", status: "done", id: "c8af0989-bd15-486a-a6e7-fe0226287208", isBeingEdit: false},
    {text: "Estudar React", status: "done", id: "6236b42d-4110-4558-8151-752b7ab2933b", isBeingEdit: false},
    {text: "Assistir série", status: "todo", id: "33b32936-d962-4b7c-a8e2-1a87a2656776", isBeingEdit: false},
    {text: "Ler o Globosporte", status: "todo", id: "f1714cc2-2f20-4c17-954e-c5b443d25c83", isBeingEdit: false}
  ];
  const result = addTodo(startTodos, newTodo);
  expect(result).toEqual(expected);
});

test('addTodo não pode gerar mutações no array original', () => {
  const startTodos = [
    {text: "Ir pra praia", status: "done", id: "f1dd5257-f9b8-41fd-8454-e781f621edb2", isBeingEdit: false},
    {text: "Fazer exercício", status: "done", id: "c8af0989-bd15-486a-a6e7-fe0226287208", isBeingEdit: false},
    {text: "Estudar React", status: "done", id: "6236b42d-4110-4558-8151-752b7ab2933b", isBeingEdit: false},
    {text: "Assistir série", status: "todo", id: "33b32936-d962-4b7c-a8e2-1a87a2656776", isBeingEdit: false}
  ];
  const newTodo = {text: "Ler o Globosporte", status: "todo", id: "f1714cc2-2f20-4c17-954e-c5b443d25c83", isBeingEdit: false};
  const expected = [
    {text: "Ir pra praia", status: "done", id: "f1dd5257-f9b8-41fd-8454-e781f621edb2", isBeingEdit: false},
    {text: "Fazer exercício", status: "done", id: "c8af0989-bd15-486a-a6e7-fe0226287208", isBeingEdit: false},
    {text: "Estudar React", status: "done", id: "6236b42d-4110-4558-8151-752b7ab2933b", isBeingEdit: false},
    {text: "Assistir série", status: "todo", id: "33b32936-d962-4b7c-a8e2-1a87a2656776", isBeingEdit: false},
    {text: "Ler o Globosporte", status: "todo", id: "f1714cc2-2f20-4c17-954e-c5b443d25c83", isBeingEdit: false}
  ];
  const result = addTodo(startTodos, newTodo);
  expect(result).not.toEqual(startTodos);
});



