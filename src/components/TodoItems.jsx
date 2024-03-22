import "./CSS/TodoItems.css";
import cross from "./assets/cross.png";
import not_tick from "./assets/not_tick.png";
import tick from "./assets/tick.png";

import React from "react";

export const TodoItems = ({ no, display, text, setTodos }) => {
  const toggle = (no) => {
    const data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no == no) {
        data[i].display = !data[i].display ? "line-through" : "";
      }
    }
    setTodos(data);
  };

  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    Date.now();
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };

  return (
    <div className="todoitems">
      <div
        className={`todoitems-container ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={not_tick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}

        <div className="todoitems-text">{text}</div>
      </div>
      <img
        className="todoitems-cross-icon"
        onClick={() => {
          deleteTodo(no);
        }}
        src={cross}
        alt=""
      />
    </div>
  );
};
