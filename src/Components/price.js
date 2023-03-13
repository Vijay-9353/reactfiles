import React from "react";
import Mobiles from "./Mobiles";

 function Price()
{
    return(
        <div className="fp">
        <h1>Using Props:-</h1>
        <Mobiles brandname ="Nokia" brandprice ="12,500" />
        <Mobiles brandname ="Vivo" brandprice ="25,500" />
        <Mobiles brandname ="Oppo" brandprice ="15,500" />
        <Mobiles brandname ="IPhone" brandprice ="1,55,500" />
        <Mobiles brandname ="Sumsung" brandprice ="1,20,500" />

        </div>
    )
}
export default Price;