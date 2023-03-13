import React from "react";
import { useState } from "react";
import './Style.css'

function Changename() {
    const[date, setDate] = useState("Vijay")//0
    function updateDate()
    {
        setDate("Surya")//Date+1
    }

return(
    <div className="fp">
        <h1>State in Function</h1>
    <h1>{date}</h1>
    <button onClick={updateDate}>Update Date</button>
    </div>
);
}
export default Changename;