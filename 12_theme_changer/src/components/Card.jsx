import React from "react";

function Card(){
    return(
        <>
            <div className="w-110 h-120 bg-amber-50 rounded-2xl dark:bg-gray-950 flex justify-center items-center flex-col gap-5 p-8">
                <img src="https://img.freepik.com/premium-vector/vector-portrait-beautiful-young-woman_810281-76.jpg?semt=ais_hybrid&w=740" alt="" width={250}/>
                <h1 className="text-2xl dark:text-amber-50">Lorem ipsum dolor sit</h1>
                <p className="text-sm text-centerb dark:text-amber-50" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quaerat? In impedit perspiciatis sunt adipisci sed a maiores repudiandae mollitia cupiditate dolorum. Ad, consequuntur nulla officia cumque alias enim molestiae.</p>
            </div>
        </>
    );
}

export default Card;