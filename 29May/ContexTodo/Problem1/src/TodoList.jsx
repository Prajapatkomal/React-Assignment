
import { useContext } from "react";
import { TodoContext } from "./Context";

const TodoList = () => {
  const { todo, setTodo } = useContext(TodoContext);

  const handleStatusChange = (ind) => {
    const updatedTodos = todo.map((item, i) =>
      i === ind ? { ...item, status: !item.status } : item
    );
    setTodo(updatedTodos);
  };

  const removeTodo = (ind) => {
    setTodo(todo.filter((el, i) => i !== ind));
  };

  return (
    <div> <h4>Todo data will appear here</h4>
      <ul style={{ }}>
        {todo.map((el, ind) => (
          <li key={ind} style={{display:'flex', gap: '100px',border:'1px solid', paddingLeft: '10px'}}>
            {el.task}
            <input
              type="checkbox"
              checked={el.status}
              onChange={() => handleStatusChange(ind)}
            />
            {el.assignee}
            <button onClick={() => {removeTodo(ind)}} > Remove </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
