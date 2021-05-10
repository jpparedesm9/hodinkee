import React, { Component } from 'react';
import { Navbar, Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../common/css/style.css';
import { Link } from 'react-router-dom';



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