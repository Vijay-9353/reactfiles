/*
import { Component } from "react"
import Table from "./App.js";
import  ReactDOM  from "react-dom";
import './App.css'

class App extends Component{
    render(){
        const characters =[ {
            name: 'Vijay.G',
            job: 'React js',
            Email: 'vijayajay@gmail.com'
        },
        {
            name: 'Kanagavel.M',
            job: 'Java',
            Email: 'vel@gmail.com'
        },
        {
            name: 'Dileep.B',
            job: 'Business',
            Email: 'dilsuma@gmail.com'
        },
        {
            name: 'Mithun.S',
            job: 'Data Analyst',
            Email: 'coorgo@gmail.com'
        },
        {
          name: 'Kiran.K',
          job: 'Forest off',
          Email: 'Kirankupeer@gmail.com'
      },]
        return (
            <div className="container">
                <h1>Friends </h1>
                <Table charactersData={characters} />
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'));

*/


/*
import React from 'react';
import ReactDOM from 'react-dom';

class Lparent extends React.Component{
  render()
  {
    return<h1>Learn React-{this.props.var.concept} in {this.props.var.language}</h1>
  }
}

class Lchild extends React.Component {
  render()
  {
    const v={topic : "react js" ,language :"Tamil",concept : "props"}
    return <Lparent var ={v}/>
  }
}
ReactDOM.render(<Lchild/>,document.getElementById('root'));
*/

/*
 Lparent.defaultProps ={Concept :"Props" , language: "English"}

ReactDOM.render(<Lparent concept ="Component Vs State" language ="English" />,
document.getElementById('root'));

*/

/*
import React from 'react';
import ReactDOM from 'react-dom';

class Lparent extends React.Component{
  render()
  {
    const v={topic : "react js" ,language :"Tamil",concept : "props"}
    return <Lchild var ={v}/>
  }
}

class Lchild extends React.Component {
  render()
  {
    return<h1>Learn React-{this.props.var.concept} in {this.props.var.language}</h1>
    
  }
}
ReactDOM.render(<Lparent/>,document.getElementById('root'));
*/

/*
import React from 'react';
import  ReactDOM  from 'react-dom';
import ClassComp from './App';
import './App.css';


class App extends React.Component{
  render(){
  return(
    <ClassComp />
  )
}
}
ReactDOM.render(<App />,document.getElementById('root'));



*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Price from './Components/price';
import reportWebVitals from './reportWebVitals';
import Changename from './Components/functionstate';
import FuncProps from './Components/functionProps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Price />
        <hr></hr>
      <br></br>
        <Changename/>
        <hr></hr>
        <FuncProps />
       
  </React.StrictMode>

);


reportWebVitals();
