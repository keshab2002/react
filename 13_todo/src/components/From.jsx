import { useState } from "react";
import { useTodo } from "../contexts";

function Form() {

    const [todo, setTodo] = useState('');
    const {addTodo} = useTodo();

    const add = (e)=>{
        e.preventDefault();
        if(!todo) return;
        addTodo({todo: todo, completed: false});
        setTodo('');
    }
    return (
        
        <>
            <div className='flex justify-center items-center h-17 w-155 bg-purple-400/30 py-5 ' >
                <form onClick={add} >
                    <input type="text"
                        placeholder='Add todo'
                        className='w-125 bg-purple-200 focus:border-none focus:outline-none p-2 rounded-l-xl'
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button type="submit"
                        className='w-20 bg-purple-500/50 p-2 rounded-r-xl'
                    >Add</button>
                </form>
            </div>
        </>
    )
}

export default Form;