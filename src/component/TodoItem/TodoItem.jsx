import React from 'react';
import {FaTrashAlt} from "react-icons/fa";
import styles from './TodoItem.module.css';

function TodoItem({item, onUpdate, onDelete}) {
    const {id, text, status} = item;
    const handleClick = e => {
        e.preventDefault();
        onDelete(item);
    }
    const handleChange = e => {
        onUpdate({...item, status: e.target.checked ? 'done' : 'active'})
    }
    return (
        <div className={styles.todoItem}>
            <input type="checkbox" className={styles.checkbox} id={id} checked={status === 'done'}
                   onChange={handleChange}/>
            <label className={styles.text} htmlFor={id}>{text}</label>
            <span className={styles.icon}>
                <button className={styles.button} onClick={handleClick}><FaTrashAlt/></button>
            </span>
        </div>
    );
}

export default TodoItem;