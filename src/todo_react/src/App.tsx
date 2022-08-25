import React from 'react'

//Components
import Header from './components/Header'
import Footer from './components/Footer'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

//styles
import styles from './App.module.css'

//Interface
import ITask from './interfaces/Task'


export default function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>

          <TaskForm
            btnText='Criar tarefa' />

          <TaskList>

          </TaskList>

        </div>

        <div>
          <h2>Suas tarefas</h2>
          <p>Lista</p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
