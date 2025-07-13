import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn from './components/button'

function App() {
  const [color, setColor] = useState('red');
  return (
    <>
      <div className='w-screen h-screen m-0 p-0 flex flex-row items-end justify-center' style={{backgroundColor: "black"}}>
        <div className='w-350 h-20 rounded-3xl mb-8 flex felx-row items-center justify-center' style={{backgroundColor: "green"}} >
        <Btn/>

          
        </div>
      </div>
    </>
  )
}

export default App
