import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todo.name.trim() === "") {
      setError("Kindly enter a todo in the search box before clicking Insert.");
      return;
    }

    setError("");
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter todo item..."
        />
        <button className={styles.modernButton} type="submit">
          Insert
        </button>
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </form>
  );
}
