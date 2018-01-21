export const deleteTodo = (list ,id) => {
  const updateTodos = [...list];
  updateTodos.forEach((todo, i) => {
    if(todo.id === id) {
      updateTodos.splice(i, 1);
    }
  });
  return updateTodos
}