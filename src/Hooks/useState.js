
import React, {useState} from "react";
import './Style.css'
/*
const Timer = () => {
    const[counter, setCounter] = useState(0);

    const increment =()=>{
        setCounter(counter + 1);
    };
    return (
        <div>
            {counter}
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default Timer;

/***************************************************************** */
/*
const ValueChange =() => {
    const[inputValue, setInputValue] = useState("Vijay");

    let onchange =(event) =>{
        const newValue = event.target.value;
        setInputValue(newValue);
    };
    return(
        <div>
            <input placeholder="Enter something..." onChange={onchange} />
            {inputValue}
        </div>
    );
};
export default ValueChange;

/******************************************************************** */
/*
const Counter =() =>{
    const[count, setCount] = useState(0);
    const increaseFive =()=>
    {
        for(let i=0; i<5 ; i++){
            setCount(prevState => prevState + 1);
        }
    }
    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>Click me!</button>
            <p>Current value of count is {count}</p>
            <button onClick ={() => increaseFive()}>Click me to add 5</button>
        </div>
    );
};
export default Counter;

/**************************************************************************** */

const ValueChanging =() =>{
    const[count,setCount] = useState(0);
    const[person, setPerson] = useState({firstName:"",lastName:""});

    const increaseFive = () =>
    {
        for(let i=0;i<5;i++){
            setCount(prevstate => prevstate + 1);
        }
    }
    return(
        <div>
            <button onClick={()=> setCount(count + 1)}>click me!</button>
            <p>Current value of count is {count}</p>
            <button onClick={()=> increaseFive()}>Click me to add 5</button>
            <hr/>
            <input type="text" onChange={(e)=>setPerson({...person,firstName: e.target.value})}placeholder="Enter your First Name" />
            <input type="text" onChange={(e)=>setPerson({...person,lastName: e.target.value})}placeholder="Enter your Last Name" />
            {JSON.stringify(person)}
            <p>FirstName value is :{person.firstName}</p>
            <p>LastName Value is :{person.lastName}</p>
        </div>
    );
};
export default ValueChanging;

/******************************************************************************************** */