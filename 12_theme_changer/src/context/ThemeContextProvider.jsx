import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeContextProvider({children}){

    const [currentTheme, setCurrentTheme] = useState('light');
    const changeToDark = () => setCurrentTheme('dark'); 
    const changeToLight = () => setCurrentTheme('light');

    useEffect( () => {
        document.querySelector('html').classList.remove('light', 'dark');
        document.querySelector('html').classList.add(currentTheme);

    }, [currentTheme] );
    return(
        <ThemeContext.Provider  value={ { currentTheme, changeToDark, changeToLight, setCurrentTheme } }>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider