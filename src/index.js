
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);

reportWebVitals();
/*
import React from "react";
import { Component } from "react";
import  ReactDOM  from "react-dom";

class LifeCycle extends Component{
    Constructor(){
        this.state={value:"Welcome", name:"Guys"}
    }
     componentWillMount()
    {
        alert("Learn React js Lifecycle");
    }
    render(){
        return(
        <div>
            <h1>{this.state.value} {this.state.name}</h1>
            <br/>
            <button type="button" onClick={this.Changevalue}>Change value</button>
            <button type="button" onClick={this.Deleteheader}>Change value</button>

        </div>
    )}
    Changevalue=() =>
    {
        this.setState({value :"Learn react in tamil"});
    }
componentDidMount()
{
    setTimeout(()=>{
        this.setState({value :"Thank you"})},5000)
    }


componentWillUpdate()
{
    alert("Do you want update a new value");
}
componentDidUpdate()
{
    document.getElementById("mydiv").innerHTML ="New value Update Successfully" +this.state.value;
}
shouldComponentUpdate()
{
   return true;
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LifeCycle />
  </React.StrictMode>
);
*/