export const buildTodosArray = state => {
  const todoIds = Object.keys(state);
  return todoIds.map(id => state[id]);
};

// const newTodos = {
//   3: { id: 3, title: 'blah', body: 'blah blah', done: false},
//   4: { id: 4, title: 'who', body: 'who who', done: true}
// };
//
// const newTodo = {
//   5: { id: 5, title: 'hooray', body: 'blah blah', done: false}
// };
