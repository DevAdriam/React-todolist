import React from "react";
import "../Todoitems/Todoitem.css";
function Todoitem({ todos, deletehandler }) {
  return (
    <div className="todoitems">
      {todos.length ? (
        todos.map((todo) => {
          return (
            <span key={todo.id} className="todoitem">
              {todo.title}

              <button onClick={() => deletehandler(todo.id)}>x</button>
            </span>
          );
        })
      ) : (
        <h3>There is no list</h3>
      )}
    </div>
  );
}

export default Todoitem;
