import React from "react";

function Student(props)
{

    return(
        <div style={{backgroundColor:'skyblue', margin:20}}>
            <h1>I'm {props.name}</h1>
            <h2>Email :{props.email}</h2>
            <h3>Address :{props.others.address}</h3>
        </div>
    )
}
export default Student;