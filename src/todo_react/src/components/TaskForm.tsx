import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

import styles from './TaskForm.module.css'

import ITask from '../interfaces/Task'

interface Props {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function TaskForm({ btnText, taskList, setTaskList }: Props) {

    const [id, setID] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [difficulty, setdifficulty] = useState<number>(0)


    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const id = Math.floor(Math.random() * 1000)

        const newTask: ITask = { id, title, difficulty }

        setTaskList!([...taskList, newTask])

        setTitle('')
        setdifficulty(0)
        
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.name === 'title') {
            setTitle(e.target.value)
        } else {
            setdifficulty(parseInt(e.target.value))
        }
    }

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor='title'>Título</label>
                <input value={title} type='text' name='title' placeholder='Título da tarefa' onChange={handleChange} />
            </div>

            <div className={styles.input_container}>
                <label htmlFor='dificulty'>Dificuldade</label>
                <input value={difficulty} type='number' name='dificulty' placeholder='Dificuldade da tarefa' onChange={handleChange} />
            </div>

            <input type='submit' value={btnText} />
        </form>
    );
}
