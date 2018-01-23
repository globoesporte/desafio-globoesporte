export const changeTextTodo = (text, todo) => Object.assign({}, todo, {
  text,
  isBeingEdit: false
})