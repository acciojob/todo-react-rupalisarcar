import styles from './todo.module.css'
const TodoItem=({todoDetails, onDelete})=>{
    const deleteList = (itemId) =>{
        onDelete(itemId)
    }
    return(
        <>
        <div className={styles.toDolist}>
            <p>{todoDetails.title}</p>
            <button onClick={()=>deleteList(todoDetails.id)}>Delete</button>
        </div>
        </>
    )
}

export default TodoItem;