import React from 'react';
import styles from './todo.module.css';


const TodoForm=({toInput, setTodoInput, onsubmit})=>{
    const setInput=(e)=>{
        setTodoInput((curr)=>({...curr,title:e.target.value}))
    }

    const addToDoList=()=>{
        if(toInput.title) onsubmit()
    }

    return(
        <div>
            <input type='text' className={styles.inputBox} value={toInput.title} onChange={setInput}></input>
            <button onClick={addToDoList} className={styles.btn}>Add Todo</button>
        </div>
    )
}


export default TodoForm
