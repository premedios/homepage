import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="dark" expand="md" dark fixed="top">
        <NavbarBrand href="#">Pedro Remedios</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="text-center">
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem className="text-center">
              <NavLink href="#services-section-head">Services</NavLink>
            </NavItem>
            <NavItem className="text-center">
              <NavLink href="#portfolio-section-head">Portfolio</NavLink>
            </NavItem>
            <NavItem className="text-center">
              <NavLink href="#footer-section">Contacts</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
  
}
