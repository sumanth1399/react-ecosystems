import { loadTodosInProgress,
    loadTodosFailure,
    loadTodosSuccess,
    createTodo,
    removeTodo,
    markTodoAsCompleted } from "./actions";


export const loadTodos=()=> async(dispatch,getState)=>{
    dispatch(loadTodosInProgress());
    const reponse = await fetch('http://localhost:8000/todos')
    try{
        const todos = await reponse.json();
        dispatch(loadTodosSuccess(todos));
    }catch(e){
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }

}

export const addTodoRequest=text=>async dispatch=>{
    try{
            const boy =JSON.stringify({text});
            const reponse = await fetch('http://localhost:8000/todos',{
            headers:{
                'Content-Type': 'application/json',
            },
            method:'post',
            body:boy,
            });
            const todo = await reponse.json();
            dispatch(createTodo(todo));
        }catch(e)
        {
            dispatch(displayAlert(e));
        }

}

export const removeTodoRequest=id=>async dispatch=>{
    try{
        const reponse = await fetch(`http://localhost:8000/todos/${id}`,{
            method:'delete',
        });
        const todo = await reponse.json();
        dispatch(removeTodo(todo));
    }catch(e){
        dispatch(displayAlert(e));
    }
}

export const markTodoAsCompletedRequest = id=>async dispatch=>{
    try{
        const reponse = await fetch(`http://localhost:8000/todos/${id}/completed`,{
            method:'post',
        });
        const updatedTodo = await reponse.json();
        dispatch(markTodoAsCompleted(updatedTodo));
    }catch(e){
        dispatch(displayAlert(e));
    }

}

export const displayAlert =(text)=>()=>{   //Thunk function
    alert(`You clicked on: ${text}`)
};
