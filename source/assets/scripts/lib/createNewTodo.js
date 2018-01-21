import uuidv4 from 'uuid/v4';

export const createNewTodo = (text) => ({ text, status: 'todo', id: uuidv4(), isBeingEdit: false })