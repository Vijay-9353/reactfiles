import React, {useEffect} from "react";

const CompB =() => {
    useEffect(() => {
        console.log("Effect goes here");
        const timerId =setInterval(()=> {
            console.log('API call executed');
        },2000);
        return() => {
            console.log('Cleanup goes here');
            clearInterval (timerId);
        }
    },[]);
    return (
        <div>
            <p>Component B</p>
            <hr/>
            
        </div>
    );
};
export default CompB;