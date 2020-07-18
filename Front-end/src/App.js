import React, { Component } from 'react';
import './App.css';
import {  Navbar, Nav } from 'react-bootstrap';
import Footer from "./footer/footer";
import Aux from "./hoc/Aux";
import Layout from "./Layout/Layout";
// import { useSelector } from 'react-redux';

// const counter = useSelector(state => state.totalNum);

class App extends Component {

  render() {
    return (
    <Aux>
      <Navbar bg="dark" variant="dark">
        {/* <Navbar.Brand href="#home">BookStore</Navbar.Brand> */}
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link> 
        </Nav>
      </Navbar>
        {/* {counter} */}
      <Layout />
      <Footer />
      </Aux>
     
    );
  }
}

export default App;
