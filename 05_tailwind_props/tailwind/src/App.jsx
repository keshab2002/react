import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Card name='Higi bizbiz' price={2.03} />
    <Card name='Huji Sojaru' price={9.23} />
    <Card />
 
      
      
    </>
  )
}

export default App
