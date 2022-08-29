import React, { useState, useEffect } from "react";
import styles from "./TaskForm.module.css";
export default function TaskForm({ btnText, taskList, setTaskList, task, handleUpdate, }) {
    const [id, setID] = useState(0);
    const [title, setTitle] = useState("");
    const [difficulty, setdifficulty] = useState(0);
    useEffect(() => {
        if (task) {
            setID(task.id);
            setTitle(task.title);
            setdifficulty(task.difficulty);
        }
    }, [task]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleUpdate) {
            handleUpdate(id, title, difficulty);
        }
        else {
            const id = Math.floor(Math.random() * 1000);
            const newTask = { id, title, difficulty };
            setTaskList([...taskList, newTask]);
            setTitle("");
            setdifficulty(0);
        }
    };
    const handleChange = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        }
        else {
            setdifficulty(parseInt(e.target.value));
        }
    };
    return (<form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título</label>
        <input value={title} type="text" name="title" placeholder="Título da tarefa" onChange={handleChange}/>
      </div>

      <div className={styles.input_container}>
        <label htmlFor="dificulty">Dificuldade</label>
        <input value={difficulty} type="number" name="dificulty" placeholder="Dificuldade da tarefa" onChange={handleChange}/>
      </div>

      <input type="submit" value={btnText}/>
    </form>);
}
