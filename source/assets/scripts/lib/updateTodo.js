export const updateTodo = (list, updateTodo) => {
  const updateIndex = list.findIndex(item => item.id === updateTodo.id);
  return [
    ...list.slice(0, updateIndex),
    updateTodo,
    ...list.slice(updateIndex + 1)
  ]
}