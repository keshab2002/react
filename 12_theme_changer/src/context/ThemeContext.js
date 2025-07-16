import { createContext } from "react";

const ThemeContext = createContext({
    currentTheme: 'light',
    changeToDark: ()=>{},
    changeToLight: ()=> {}
});

export default ThemeContext;