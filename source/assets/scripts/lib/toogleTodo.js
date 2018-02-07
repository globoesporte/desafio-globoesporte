export const toogleTodo = todo => Object.assign({}, todo, {
  status: todo.status === 'done' ? 'todo' : 'done'
})