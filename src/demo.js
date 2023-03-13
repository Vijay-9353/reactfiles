import React from 'react';
import ReactDOM from 'react-dom';

function Header() {
    return <div><h1>VLP Pvt ltd..</h1>
    <p>Welcome All</p></div>
  }
   function Sidebar()  {
    return <h1>Hii All! </h1>
   }
   function Navbar() {
    return <h2>I'm Vijay </h2>
   }
   function Myweb() {
    return <div>
      <Header />
      <Sidebar />
      <Navbar />
      <h4>Thank you for coming.</h4>
    </div>
   }
   ReactDOM.render(<Myweb />,document.getElementById("root"));