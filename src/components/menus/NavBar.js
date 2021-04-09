import React, { Component, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
const NavBar = ({ toggle, isOpen }) => {
  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/dashboard">Todo List - AOS</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Tasks</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <NavLink href="/">Deconnect</NavLink>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
