    // import logo from './logo.svg';
    // import './App.css';

    // function App() {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn React
    //         </a>
    //       </header>
    //     </div>
    //   );
    // }

    // export default App;

/*
    import React from "react";
    import { Component } from "react";

    class App extends Component{
        constructor(){
            super();
            this.state={value:"Welcome",name:"Guys"}
        }
        componentWillMount()
        {
            alert("Learn Reactjs lifecycle");
        }
        render(){

            return  <div>
                <h1>{this.state.value} {this.state.name}</h1>
                <br/>
                <button type="button" onClick={this.Changevalue}>Change value</button>
                <button type="button" onClick={this.Deleteheader}>Delete Header</button>

            </div>
        }
        Changevalue=() =>
        {
            this.setState({value :"Learn react in tamil"});
        }
    componentDidMount()
    {
        setTimeout(()=>{
            this.setState({value :"Thank you"})},3000)
        }


    componentWillUpdate() 
    {
        alert("Do you want update a new value");
    }
    componentDidUpdate()
    {
        document.getElementById("mydiv").innerHTML = `New value Update Successfully ${this.state.value}`
    }
    shouldComponentUpdate()
    {
    return false;
    }
    Deleteheader=()=>
    {
        this.setState({value:false, name:false});
    }
    componentWillUnmount()
    {
        alert("Header Delete");
    }
    }
    export default App;

    */
import React from "react";
// import Timer from "./Hooks/useState";
// import ValueChange from "./Hooks/useState";
// import Counter from "./Hooks/useState";
// import ValueChanging from "./Hooks/useState";
// import CounteruseEffect from "./Hooks/useEffect";
// import Cleanup from "./Hooks/useEffect";
import StyleElement from "./Hooks/useRef";

function App(){
    return (
        <div>
            {/* <Timer /> */}
            {/* <ValueChange /> */}
            {/* <Counter /> */}
            {/* <ValueChanging /> */}
            {/* <CounteruseEffect /> */}
            {/* <Cleanup /> */}
            <StyleElement />
          
        </div>
    )
}
export default App;