import React from "react";
import ITask from "../interfaces/Task";

import styles from "./TaskList.module.css";

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

export default function TaskList({
  taskList,
  handleDelete,
  handleEdit,
}: Props) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => {
          return (
            <div key={task.id} className={styles.task}>
              <div className={styles.details}>
                <h4>{task.title}</h4>
                <p>Dificuldade {task.difficulty}</p>
              </div>

              <div className={styles.actions}>
                <i className="bi bi-pencil" onClick={() => handleEdit(task)} />
                <i
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                  className="bi bi-trash"
                />
              </div>
            </div>
          );
        })
      ) : (
        <p>Sem tarefas cadastradas!</p>
      )}
    </>
  );
}
