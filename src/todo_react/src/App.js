import React, { useState } from "react";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
//styles
import styles from "./App.module.css";
import Modal from "./components/Modal";
export default function App() {
    const [taskList, setTaskList] = useState([]);
    const [taskToUpdate, setTaskToUpdate] = useState(null);
    const deleteTask = (id) => {
        setTaskList(taskList.filter((task) => {
            return task.id !== id;
        }));
    };
    const hideOrShowModal = (display) => {
        const modal = document.querySelector("#modal");
        display ? modal.classList.remove("hide") : modal.classList.add("hide");
    };
    const editTask = (task) => {
        hideOrShowModal(true);
        setTaskToUpdate(task);
        console.log(task);
    };
    const updateTask = (id, title, difficulty) => {
        const updateTask = { id, title, difficulty };
        const updatedItens = taskList.map((task) => {
            return task.id === updateTask.id ? updateTask : task;
        });
        setTaskList(updatedItens);
        hideOrShowModal(false);
    };
    return (<div>
      <Modal 
    //MODAL EDITAR
    //envia o componente Task form para o Modal
    children={<TaskForm btnText="Editar Tarefa" taskList={taskList} task={taskToUpdate} handleUpdate={updateTask}/>}/>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList handleDelete={deleteTask} taskList={taskList} handleEdit={editTask}/>
        </div>
      </main>
      <Footer />
    </div>);
}
