export function addTodo(task) {
  return {
    type: "ADD_TODO",
    payload: task
  }
}
