import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

import styles from './TaskForm.module.css'

import ITask from '../interfaces/Task'

interface Props {
    btnText: string
}

export default function TaskForm({ btnText }: Props) {

    const [id, setID] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [difficulty, setdifficulty] = useState<number>(0)

    const addTaskHandler = () => {

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
                <input type='text' name='title' placeholder='Título da tarefa' onChange={handleChange} />
            </div>

            <div className={styles.input_container}>
                <label htmlFor='dificulty'>Dificuldade</label>
                <input type='number' name='dificulty' placeholder='Dificuldade da tarefa' onChange={handleChange} />
            </div>

            <input type='submit' value={btnText} />
        </form>
    );
}
