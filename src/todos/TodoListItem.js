import React from "react";
import './TodoListItem.css';


const TodoListItem =({todo,onRemovePressed,onCompletedPressed})=>{
    return (
        <div className="todo-item-container">
            <h3>{todo.id}</h3>

            <div className="buttons-container">
            {todo.isCompleted
            ? null
            : <button onClick={()=>onCompletedPressed(todo.id)}
                className="completed-button">Mark As Completed</button>}
                
                <button onClick={()=>onRemovePressed(todo.id)}
                className="remove-button">Remove</button>
            
            </div>     
        </div>
    )
}

export default TodoListItem;