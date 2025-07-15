import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login(){

    
    const [userid, setuserid] = useState('');
    const [passcode, setPasscode] = useState('');
    
    const {setUser} = useContext(UserContext);
    
    function handelSubmit(e){
        e.preventDefault();
        setUser({userid, passcode});
    }

    return(
        <>
            <h1>user login</h1>
            <label htmlFor="">Userid: </label>
            <input type="text"
            value={userid} 
            onChange={(e) => setuserid(e.target.value)}
            />
            <label htmlFor="">Passcode: </label>
            <input type="text" 
            value={passcode}
            onChange={ (e) => setPasscode(e.target.value)}/>
            <button
                onClick={(e)=> handelSubmit(e)}
            >Submit</button>
        </>
    );

}
export default Login;