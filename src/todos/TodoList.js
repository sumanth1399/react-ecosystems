import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { removeTodo,markTodoAsCompleted } from "./actions";
import './TodoList.css';
import  { connect } from 'react-redux'

// const TodoList = ({todos =[{text:'Helo'}]})=>{   //Added [] as default value to todos if it is not passed. This will prevent the app from breaking when there
const TodoList = ({todos =[],onRemovePressed,onCompletedPressed})=>{     
return (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo=> <TodoListItem todo={todo} 
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}
        />)}
    </div>
)};

const mapStateToProps=state=>({
    todos:state.todos,
})
const mapDispatchToProps=dispatch=>({
    onRemovePressed:text=>dispatch(removeTodo(text)),
    onCompletedPressed:text=>dispatch(markTodoAsCompleted(text)),
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);  //connects this