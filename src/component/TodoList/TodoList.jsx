import React, {useEffect, useState} from 'react';
import AddTodo from "../AddTodo/AddTodo";
import TodoItem from "../TodoItem/TodoItem";
import styles from './TodoList.module.css';


const readFromLocalStorage = () => {
    console.log('load storage')
    const todoList = localStorage.getItem('todoList');
    return todoList ? JSON.parse(todoList) : [];
}

export default function TodoList({filter}) {

    const [todoList, setTodoList] = useState(readFromLocalStorage);
    const getSelectedList = (todoList, filter) => {
        switch (filter) {
            case 'active':
                return todoList.filter(todo => todo.status === 'active');
            case 'done':
                return todoList.filter(todo => todo.status === 'done');
            default:
                return todoList;
        }
    };

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }, [todoList]);


    const selectedList = getSelectedList(todoList, filter);

    const handleAdd = (todo) => setTodoList(list => [
        ...list, todo
    ]);

    const handleDelete = (deletedItem) => setTodoList(list =>
        list.filter(item => item.id !== deletedItem.id)
    );

    const handleUpdate = updateItem => setTodoList(list =>
        list.map(item => item.id === updateItem.id ? updateItem : item)
    )

    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {
                    selectedList.map(item => <li key={item.id}>
                            <TodoItem key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                        </li>
                    )
                }
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}
