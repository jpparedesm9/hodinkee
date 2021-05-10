import React, { Component } from 'react';
import { Navbar, Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../common/css/style.css';
import { Link } from 'react-router-dom';

/* 
Author: Juan Pablo Paredes
Class: Main
   This is the start point for the application. The main goal of the same is to provide a common interface to manage the whole application. 
   This class is referenced from Router.jsx. 
*/
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg" className="sticky-nav" style={{ zIndex: 3 }}>
          <Navbar.Brand href="/">Code Challenge</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className="postLinks">Local Posts</Link>
              <Link to="/externalPost" className="postLinks">External Posts (GNews)</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="articlesMargin" style={{ paddingBottom: "50px" }}>
        <Container>
              {this.props.children}
        </Container>
        </div>
        <div className="footer" style={{ paddingTop: "20px;" }}>
          Copyright © 2021, CODE CHALLENGE. All Rights Reserved.
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
