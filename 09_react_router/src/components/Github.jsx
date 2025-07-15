import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";



export function Github(){
    // const [data, setData] = useState({});
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/keshab2002')
    //     .then(res => res.json())
    //     .then( res => setData(res))
    // }, [])
    // console.log(data);
    const data = useLoaderData();
    return (
        <>
            <div className="w-screen bg-green-800/10 flex justify-center items-center gap-15 py-5" >
                <div className="w-100 h-100 bg-green-700/5 rounded-2xl" >
                    <img  className="p-10" src= {data.avatar_url} alt="" />
                </div>
                <div className="w-100 h-100 flex flex-col justify-center items-center gap-4 text-3xl" >
                    <p>Name: <span className="text-4xl font-semibold text-amber-700" >{data.name}</span></p>
                    <p>Github id: <span className="text-4xl font-semibold text-amber-700" >{data.login}</span></p>
                    <p>Public Repo Count: <span className="text-4xl font-semibold text-amber-700" >{data.public_repos}</span></p>
                    <p>View All Works: <a  className="text-4xl font-semibold text-amber-700" href={data.repos_url} target="_blank">View Repo</a></p>
                    
                </div>
            </div>
        </>
    )
}



export async function GithubLoad(){
    const data =await  fetch('https://api.github.com/users/keshab2002');
    return data.json();
}

 