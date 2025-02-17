import { useState } from "react";
import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(item.name);

  function handleDelete(item) {
    console.log("Delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setTodos(
      todos.map((todo) =>
        todo.name === item.name ? { ...todo, name: newText } : todo
      )
    );
    setIsEditing(false);
  }

  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {isEditing ? (
          <textarea
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className={styles.editInput}
            rows="3"
          />
        ) : (
          <div className={className} onClick={() => handleClick(item.name)}>
            {item.name.split("\n").map((para, index) => (
              <p key={index} className={styles.paragraph}>
                {para}
              </p>
            ))}
          </div>
        )}

        <span className={styles.actions}>
          {isEditing ? (
            <button onClick={handleSave} className={styles.saveButton}>
              ✔
            </button>
          ) : (
            <button onClick={handleEdit} className={styles.editButton}>
              ✎
            </button>
          )}
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            ✖
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
