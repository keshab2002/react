import React, { useState } from "react";
import { useTodo } from "../contexts";

function Todo({todo}) {
    const {updateTodo, deleteTodo, toggleCompleted} = useTodo()

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todomessage, setTodomessage]  = useState(todo.todo);


    const editTodo = ()=>{
        updateTodo(todo.id, {...todo, todo: todomessage});
        setIsTodoEditable(false);
    }

    const toggle = ()=>{
        toggleCompleted(todo.id);
    }
    return (
        <>
            <div className='w-150 h-15 bg-purple-300 rounded-lg flex justify-center items-center' >
                <input type="checkbox"
                    className='m-2 mx-3'
                    checked = {todo.completed}
                    onChange={toggle}
                />
                
                <input type="text"
                    className= {`w-100  focus:border-none focus:outline-none p-1.5 rounded-lg
                        ${todo.completed? `bg-green-300/50`:`bg-purple-200`} `}
                    value={todomessage}
                    disabled = {!isTodoEditable}
                    onChange={(e) => setTodomessage(e.target.value)}
                />
                <button
                    className='p-2 ms-15 bg-purple-400/70 rounded-lg focus:bg-purple-400'
                    onClick={()=> {
                        if(isTodoEditable){
                            editTodo();
                        }else{
                            setIsTodoEditable(!isTodoEditable);
                        }
                    }}
                >
                    
                    {isTodoEditable? '🗃️' : '✒️'}
                
                </button>
                <button
                    className=' p-2 ms-2 bg-purple-400/70 rounded-lg focus:bg-purple-400'
                    onClick={()=> deleteTodo(todo.id)}
                >❌</button>
            </div>
        </>
    )
}


export default Todo;