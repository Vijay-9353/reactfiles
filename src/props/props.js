import React from 'react';
import  ReactDOM  from 'react-dom';

class Name extends React.Component {
    render(){
        return<h1>Learn {this.props.topic}in {this.props.language}</h1>
    }
}
ReactDOM.render(<Name topic="React js" language="Tamil" />,document.getElementById('root'));