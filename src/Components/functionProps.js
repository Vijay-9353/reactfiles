import React from "react";
import { useState } from "react";
import Student from "./Student";
import './Style.css'

function FuncProps()
{
    const[name,setName]= useState("Surya")
    return(
        <div className="fp">
            <h1>Props in React</h1>
            <Student name={name} email ="surya@gmail.com"
            others ={{address:"Bengalure", mobile:"1234567890"}} />
            <button onClick={()=> {setName("Vijay")}}className="g">Change Name</button>
        </div>
    );
}
export default FuncProps;