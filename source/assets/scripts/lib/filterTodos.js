export const filterTodos = (list, route) => {
  switch (route) {
    case '/feitos':
      return list.filter((item) => item.status === 'done');
    case '/fazer':
      return list.filter((item) => item.status === 'todo');
    default:
      return list;
  }
}