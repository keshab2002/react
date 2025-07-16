import Form from './components/From'
import Todo from './components/Todo'
import './App.css'
import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo)=>{
    setTodos((prevTodos) => ([{id: Date.now(), ...todo}, ...prevTodos]))
  }

  const updateTodo = (id, todo) =>{
    setTodos((prevTodos) => prevTodos.map((prevTodo) => prevTodo.id === id? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo)=> prevTodo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos ( (prevTodos) => prevTodos.map( (prevTodo) => prevTodo.id === id ? {...prevTodo,completed: !prevTodo.completed } : prevTodo ) )
  }

  useEffect(()=>{
    const todos = JSON.parse( localStorage.getItem('todos') );
    if(todos && todos.length > 0){
      setTodos(todos);
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleCompleted }} >
      <div className='flex justify-center items-center'>
        <div className='w-160 h-170 bg-purple-300 mt-8 rounded-xl flex justify-center items-center flex-col gap-3'>
          <div className='flex justify-center items-center h-15 w-155 bg-purple-400/30 py-5 rounded-t-xl' >
            <h1 className='text-2xl ' >Add your todos</h1>
          </div>

          {/* Form */}
          <Form/>

          <div className='flex flex-col  items-center h-125 w-155 bg-purple-400/30 py-5 rounded-b-xl overflow-hidden gap-2.5' >       
            {/* Todos */}
            {
              todos.map( (todo)=>{
                return(
                  <div key={todo.id} >
                    <Todo todo = {todo} />
                  </div>
                )
              } )
            }
          </div>

        </div>
      </div>
    </TodoProvider>
  )
}

export default App
