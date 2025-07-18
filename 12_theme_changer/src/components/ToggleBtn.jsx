import React, { useContext } from "react"
import ThemeContext from "../context/ThemeContext";

function ToggleBtn(){
    const {currentTheme,  setCurrentTheme , changeToDark, changeToLight} = useContext(ThemeContext)
    const onChangeHandeler = (e)=>{
        if(e.target.checked){
            changeToDark()
        }
        else{
            changeToLight()
        }
    }
    return(    
        <>
            <label className="inline-flex items-center me-5 cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" 
            checked = {currentTheme === 'dark'}
            onChange={onChangeHandeler }
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600 dark:peer-checked:bg-teal-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Change Theme</span>
            </label>
        </>
    )
}

export default ToggleBtn;