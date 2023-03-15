/*
import React, {useState, useEffect} from "react";

const CounteruseEffect = () =>  {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('Initial Message');

    useEffect(()=>{
        console.log('Component mounted / updated');
        console.log(msg);
        console.log('count is increased to',count);
    },[count, msg]);

    return(
        <div>
            <button onClick={() =>{setCount(count + 1)}}>Increase Count</button>
            <p>The count value is :{count}</p>
            <button onClick={()=>{setMsg('msg updated on click event')}}>Update message</button>
        </div>
    );
};
export default CounteruseEffect;

/************************************************************************************* */

import React,{useState} from "react";
import CompA from "./CompA";
// import CompB from "./CompB";

const Cleanup =() => {
    const [toggle,setToggle] = useState(true);
    return(
        <div>
            <p>UseEffect with Cleanup</p>
            {/* <button onClick={()=>{setToggle(!toggle)}}>Show/Hide CompA</button>
            {toggle?<CompB/> : null} */}
            <CompA />
        </div>
    )
};
export default Cleanup;