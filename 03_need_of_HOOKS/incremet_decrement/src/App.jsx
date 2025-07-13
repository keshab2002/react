import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const incrementCounter =  ()=>{
    if(counter >= 20){
      setCounter(0)
      return
      }
      /*
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    This would not increment counter value 5 times ... as all tasks are batched 
    and preformed together 
    All the same tasks are interprteted as a single task
    
    */
  //  To update counter value five times we have to use a callback in setCounter that access the previus counter value
  setCounter( prevValue => prevValue + 1 );
  setCounter( prevValue => prevValue + 1 );
  setCounter( prevValue => prevValue + 1 );
  }
  
  const decrementCounter = ()=>{
    if(counter <= 0){
      setCounter(20)
      return
    }
    setCounter(counter - 1);
    setCounter(counter - 1);
    setCounter(counter - 1);
    setCounter(counter - 1);
    setCounter(counter - 1);

  setCounter( prevValue => prevValue - 1 );
  setCounter( prevValue => prevValue - 1 );
  setCounter( prevValue => prevValue - 1 );


  }

  return (
    <>
      <h1>Value of Counter is: {counter}</h1>
      <button onClick={incrementCounter} >Increment the value of {counter}</button>
      <br /><br />
      <button onClick={decrementCounter} >Decrement the value of {counter}</button>
      <br /><br /><br /><br />
      <footer>{counter}</footer>
    </>
  )
}

export default App
