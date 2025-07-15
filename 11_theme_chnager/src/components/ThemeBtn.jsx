import useTheme from "../context/ThemeContext";

export default function ThemeBtn() {

    const {themeMode, darkTheme, lightTheme} =useTheme();
    const onChangeBtn = (e)=>{
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus){
            darkTheme()
        } else{
            lightTheme()
        }
    }
    return (
        <div>
            <input type="checkbox"
            value=""
            onChange={onChangeBtn}
            checked = {themeMode === 'dark'}
            />
            <label >Toggle Theme</label>    
        </div>

    );
}

