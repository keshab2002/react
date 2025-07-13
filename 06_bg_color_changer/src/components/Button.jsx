import React from "react";

function Btn( {color, setBgColor} ){
    return (
        <button className='h-15 w-30 rounded-2xl text-xl' style={{backgroundColor:color}}   onClick={()=> setBgColor(color)} >{color}</button>
    )
}

export default Btn;