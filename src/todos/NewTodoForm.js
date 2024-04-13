import React,{useState} from "react";
import "./NewTodoForm.css";
import { connect } from "react-redux";
import { createTodo } from "./actions";

const NewTodoForm=({todos,onCreatePressed})=>{
    const [inputValue, setInputValue]=useState("");
    
    return(
    <div className="new-todo-form">
        <input className="new-todo-input" 
            type="text" 
            //added a useState for input so 
            //we can keep track of the current value contained in the text input
            placeholder="Type your New Todo here"
            value={inputValue}
            onChange={e  =>setInputValue(e.target.value)}    
        />

        <button onClick={()=>{

            const isDuplicateText=
                todos.some(todo => todo.text===inputValue); //This field is to check if the text is equal to the current input value
            if(!isDuplicateText){
                onCreatePressed(inputValue);
                setInputValue("");
            }
        }}
        className="new-todo-button">Create Todo</button>
    </div>
)};

const mapStateToProps= state =>({
    todos: state.todos,
});

const mapDispatchToProps= dispatch =>({
    onCreatePressed:text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);
//this is used to connect our component to Redux