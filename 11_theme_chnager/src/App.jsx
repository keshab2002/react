import { useState } from "react"
import { ThemeContextProvider } from "./context/ThemeContext"
import { useEffect } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {

  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = ()=>{
    setThemeMode('dark');
  }

  const lightTheme = ()=>{
    setThemeMode('light');
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}} >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
            <Card/>
          </div>

          <div className="w-full max-w-sm mx-auto">

          </div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
