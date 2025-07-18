import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile(){
    const {user} = useContext(UserContext);
    if(!user){
        return (
            <div>Please Login!</div>
        )
    }
    return(
        <>
            <h1>Welcome {user.userid}</h1>
        </>
    )
}

export default Profile;