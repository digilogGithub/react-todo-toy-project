import React, {useState} from 'react';
import {v4 as uuid} from "uuid";
import styles from './AddTodo.module.css';

export default function AddTodo({onAdd}) {
    const [inputText, setInputText] = useState('');

    const handleChange = e => setInputText(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        const addTodo = inputText.trim();
        if (inputText.trim().length === 0) {
            setInputText('');
            return;
        }
        onAdd({id: uuid(), text: addTodo, status: 'active'});
        setInputText('');
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} id='todoList' type='text' value={inputText}
                   onChange={handleChange}/>
            <button className={styles.button}>Add</button>
        </form>
    );
}
