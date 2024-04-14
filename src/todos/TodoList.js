import React, {useEffect} from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
//import { markTodoAsCompleted } from "./actions";
import './TodoList.css';
import  { connect } from 'react-redux'
import { displayAlert, removeTodoRequest,markTodoAsCompletedRequest } from "./thunks";
//import { isLoading } from "./reducers";
import { loadTodos } from "./thunks";
// import { removeTodo } from "./actions";
// import { ids } from "webpack";

// const TodoList = ({todos =[{text:'Helo'}]})=>{   //Added [] as default value to todos if it is not passed. This will prevent the app from breaking when there
const TodoList = ({todos =[],onRemovePressed,onCompletedPressed,onDisplayAlertClicked,isLoading,startLoadingTodos})=>{  
    
    useEffect(()=>{
        startLoadingTodos();
    })
    
    const loadingMessage=<div>Loading todos...</div>
    const content=   (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo=> <TodoListItem todo={todo} 
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onDisplayAlertClicked}
        //onDisplayAlertClicked={onDisplayAlertClicked}
        />)}
    </div>
)
            return isLoading ? loadingMessage: content;
};

const mapStateToProps=state=>({
    isLoading:state.isLoading,
    todos:state.todos,
})
const mapDispatchToProps=dispatch=>({
    startLoadingTodos:()=>dispatch(loadTodos),
    onRemovePressed:id=>dispatch(removeTodoRequest(id)),
    onCompletedPressed:id=>dispatch(markTodoAsCompletedRequest(id)),
    onDisplayAlertClicked:()=>dispatch(displayAlert)
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);  //connects this