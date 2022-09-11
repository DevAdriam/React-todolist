import React, { useState } from "react";
import Todoitem from "../Todoitems/Todoitem";
import styles from "../Todolist/Todo.module.css";
function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  let addtodo = (e) => {
    e.preventDefault();
    if (title.length === 0) {
      addtodo = false;
    } else {
      setTodos([...todos, { id: todos.length, title: title }]);
      setTitle("");
    }
  };
  const deletehandler = (id) => {
    let filtered = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filtered);
  };
  return (
    <div className={styles.todo}>
      <h3 className={styles.todoheader}>Todolist</h3>
      <form action="" className={styles.todoform} onSubmit={addtodo}>
        <input
          type="text"
          placeholder="Enter list"
          className={styles.todoforminput}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button className={styles.todoformsubmit}>Add</button>
      </form>
      <Todoitem todos={todos} deletehandler={deletehandler} />
    </div>
  );
}

export default Todo;
