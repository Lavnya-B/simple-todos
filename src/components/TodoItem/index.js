import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {id, title} = todoItem
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="todo-title">{title}</p>
      <button type="button" className="delete-button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
