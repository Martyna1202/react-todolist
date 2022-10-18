import Todo from "./Todo";

// TODO LIST OR OVERVIEW
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo, i) => (
            <Todo
              key={todo.id}
              text={todo.text}
              todos={todos}
              todo={todo}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoList;
