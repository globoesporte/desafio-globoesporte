export const toogleEditTodo = (todo) => Object.assign({}, todo, {
  isBeingEdit: !todo.isBeingEdit
})