import TodoForm from './todoForm';
import ToDoList from './toDoList';
import styles from './todo.module.css';
import { useState } from 'react';

const ToDo=()=>{
    const [toInput, setTodoInput]= useState({title:''})
    const [toDolist, SetToDoList]=useState([]);
    const ranDomID=parseInt(Math.random()*100000)

    const onsubmit=()=>{
        SetToDoList((curr)=>([{...toInput,id:ranDomID},...curr]))
    }
    return(
        <>
            <div className={styles.container}>
                <h3>To-Do-List</h3>
                <TodoForm toInput={toInput} setTodoInput={setTodoInput} onsubmit={onsubmit}></TodoForm>
            </div>
            <ToDoList toDolist = {toDolist} SetToDoList={SetToDoList}/>
        </>
    )
} 

export default ToDo;