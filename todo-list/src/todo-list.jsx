import React from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  <div>
  <form onSubmit={handleFormSubmit}>
    <input type="text" value={inputText} onChange={handleInputChange} />
    <button type="submit">Add</button>
  </form>
  <ul>
    {todos.map((todo) => (
      <li
        key={todo.id}
        className={todo.completed ? 'completed' : ''}
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </li>
    ))}
  </ul>
</div>
  return (
    <div>
      <h1>My To-Do List</h1>
      {/* Your to-do list components will go here */}
      <div>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={inputText} onChange={handleInputChange} />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={todo.completed ? "completed" : ""}
              onClick={() => completeTodo(todo.id)}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
