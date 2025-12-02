import { useState } from 'react';
import styles from './todo.module.css';
import TodoItem from "./todoItem";

const ToDoList=({toDolist,SetToDoList})=>{
    const isEmpty = toDolist.length===0;
   
    const onDelete=(itemId)=>{
       
        SetToDoList((prev)=>{
            return prev.filter(el=>el.id!==itemId)
        })
    }
    return(
        <>
            {isEmpty && <h2 className={styles.listHeader}>No  List available</h2>}
            {!isEmpty && (
                <div>
                    {toDolist.map((el)=>(
                        <TodoItem todoDetails={el} onDelete={onDelete} key={el.id}/>
                    ))}
                </div>
            )}
        </>
    )
}

export default ToDoList
