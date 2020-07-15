import React, { Component } from 'react';
import './App.css';
import {  Navbar, Nav } from 'react-bootstrap';
import Routes from "./routes";
import Footer from "./footer/footer";


class App extends Component {
  render() {
    return (
    <div>
      <Navbar bg="dark" variant="dark">
        {/* <Navbar.Brand href="#home">BookStore</Navbar.Brand> */}
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
          {/* <div className="App-inline">
            <input onChange={this.handleAdd} type="text" id="text" placeholder="enter some text" />
            <button onClick={this.handleSubmit} id="submit" ><img src={search} alt="logo" />search</button>
          </div> */}
      </Navbar>
        <Routes />
        <Footer />
      </div>
     
    );
  }
}

export default App;
