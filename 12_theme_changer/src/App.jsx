import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import ToggleBtn from './components/ToggleBtn'
import ThemeContextProvider from './context/ThemeContextProvider'


function App() {

  return (
    <ThemeContextProvider>
      <div className= 'flex items-center justify-center w-screen h-screen bg-indigo-100 dark:bg-indigo-900/70 flex-col gap-7' >
        <ToggleBtn/>
        <Card/>

      </div>
    </ThemeContextProvider>
  )
}

export default App
