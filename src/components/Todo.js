//  SINGLE TODO
const Todo = ({ text, todo, todos, setTodos }) => {
  //  DELETE TODO
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  //  MARK TODO AS COMPLETED
  const completeHandler = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={() => completeHandler()} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => deleteHandler()} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
