import React,{useRef, useEffect} from "react";

const StyleElement =() =>
{
    const colorParagraph = useRef(null);
    const colors =['#d429d0','#03a9f4','#9c27b0','#FF0000','#00FF00','#0000FF','#FFFF00','#FF00FF'];

    useEffect(() =>{
        console.log(colorParagraph);
        console.log(colorParagraph.current);
    });
    const styleParagraph =() => {
        const randomColor = Math.floor(Math.randam() * colors.length);
        colorParagraph.current.style.color = colors[randomColor];
    }
    return(
        <div>
            <button onClick={()=>{styleParagraph()}}>Click me!</button>
            <p ref={colorParagraph}>Welcome back to the Page</p>
        </div>
    )
};
export default StyleElement;