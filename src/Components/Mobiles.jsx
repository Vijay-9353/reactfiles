
import React from "react";
import './Style.css'

function Mobiles(props)
{
    return(
        <div className="mobile">
        <h3>{props.brandname}</h3>
        <p>Displaying the price details of mobiles</p>
        <p>{props.brandprice}</p>
        </div>
    );
}
export default Mobiles;



//function Mobiles({brandname="ABCD", brandprice})
//const {brandname , brandprice} = props;

