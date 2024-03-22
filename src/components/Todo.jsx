import { useEffect, useRef, useState } from "react";
import "./CSS/Todo.css";
import { TodoItems } from "./TodoItems";

const Todo = () => {
  let count = 0;
  const [todos, setTodos] = useState([]);
  const [isClearAll, setIsClearAll] = useState(false);
  const inputRef = useRef(null);

  const handleclrBtn = () => {
    localStorage.clear();
    setTodos([]);
  };
  const addBtnHandler = (e) => {
    setTodos([
      { no: Date.now(), text: inputRef.current.value, display: "" },
      ...todos,
    ]);
    inputRef.current.value = "";
    e.preventDefault();
  };

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  return (
    <>
      <div className="todo-container">
        <div className="todo-header">Add To-Do's</div>
        <form className="add-todo" onSubmit={addBtnHandler}>
          <input type="text" ref={inputRef} placeholder="Add Your Task" />
          <button
            className="add-btn"
            // onClick={() => {
            //   addBtnHandler();
            // }}
          >
            Add
          </button>
        </form>
        <div className="todo-list">
          {todos.map((todo, index) => {
            return (
              <TodoItems
                key={index}
                no={todo.no}
                display={todo.display}
                text={todo.text}
                setTodos={setTodos}
              />
            );
          })}
        </div>
        <button className="clearBtn" onClick={handleclrBtn}>
          Clear All
        </button>
      </div>
    </>
  );
};

export default Todo;
