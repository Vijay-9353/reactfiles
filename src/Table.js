import React from 'react';
import ReactDOM from 'react-dom';
import ClassComp from './index';


class App extends React.Component{
  render(){
    return(
       <div>
       <h1>STATE AND USING MAP METHOD IN REACT</h1>
        <ClassComp />
        
       </div>
    )
  }
  }
  ReactDOM.render(<App/>,document.getElementById('root'));