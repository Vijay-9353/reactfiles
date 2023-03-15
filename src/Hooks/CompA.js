import React,{useState, useEffect} from "react";

const CompA = () => {
    const[count, setCount] = useState(0);

    useEffect (() => {
        let timerId;
        console.log('effect goes here');
        if(count) {
            timerId = setInterval(() => {
                console.log('got price');
            },2000)
        }
        return () => {
            console.log('clean up goes here');
            clearInterval(timerId);
        }
    },[count]);
    return (
        <div>
            <p>Component A</p>
            <button onClick={()=>setCount(count+1)}>Get Price</button>
            <span>Count is {count}</span>
        </div>
    )
};
export default CompA;