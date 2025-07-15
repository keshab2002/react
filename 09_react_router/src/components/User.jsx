import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams();

    

    return (
        <>
            <h1 className="text-center p-10 m-5 text-2xl bg-green-300/40" >User: {userid}</h1>
        </>
    );
}

export default User;