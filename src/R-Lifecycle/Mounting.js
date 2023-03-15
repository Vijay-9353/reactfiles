import React from "react";
import { Component } from "react";

class LifeCycleR extends Component{
    constructor(){
        super();
        this.state={value:"Welcome",name:"Guys"}
    }
    componentWillMount()
    {
        alert("Learn Reactjs lifecycle");
    }
    render(){
        return <h1>{this.state.value} {this.state.name}</h1>
    }
}
export default LifeCycleR;