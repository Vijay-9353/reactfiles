/*

const {Component} = require("react");

const TableHeader =() =>{
  return ( <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
      <th>E-mail</th>
    </tr>
  </thead>)
}

const TableBody = (props)=>{
  const {charactersData} = props

  const rows = charactersData.map((character,index)=>{
    return (<tr key={index}>
        <td>{character.name}</td>
        <td>{character.job}</td>
        <td>{character.Email}</td></tr>)
  })

  return (
    <tbody>
      {rows}
    </tbody>
  )
}

class Table extends Component {
  render(){
    const {charactersData} = this.props     
    return (
      <table>
        <TableHeader />
        <TableBody charactersData={charactersData} />
      </table>
    )
  }
}
export default Table;
*/


/*
import React from 'react';

  class Classcomp extends React.Component {
    constructor() {
        super();
        this.state = {
            index: null,
            show: false,
            data: [
                { id: 1, name: 'Vijay.G', email: 'vijayajay3535.@gmail.com', city: 'Mysore', Role: 'React Js' },
                { id: 2, name: 'Kanagavel.M', email: 'Vel99@gmail.com', city: 'Mysore', Role: 'Java' },
                { id: 3, name: 'Dileep.B', email: 'Dilsuma@gmail.com', city: 'Coorg', Role: 'Business ' },
                { id: 4, name: 'Mithun.R', email: 'corgo@gmail.com', city: 'Chennai', Role: 'Angular' },
                { id: 5, name:'Kiran.K', email: 'kupee@gmail.com', city: 'Rajasthan', Role: 'Testing' }
            ]
        }
    }

    toggleButton = (e,id) => {
        this.setState(
            {
                
                index: id,
                show: !this.state.show
            }
            )
    }

    render() {
        const { data,index,show } = this.state

        return (
            <table>
                <thead>
                    <tr className='Style'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>CITY</th>
                        <th>ROLE</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(rows => (
                        <tr key={rows.id}>
                            <td>{rows.id}</td>
                            <td>{show && index === rows.id ? rows.name?.split('')[0] : rows.name}</td>
                            <td>{rows.email}</td>
                            <td>{rows.city}</td>
                            <td>{rows.Role}</td>
                            <td><button className='edit' onClick={(e) => this.toggleButton(e,rows.id)}>{show && index === rows.id ? "Full name" : "First letter"}</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Classcomp;

*/
import Price from "./Components/price";

function App() {
  return(
    <>
   <Price />
   
   </>
  )
}
export default App;