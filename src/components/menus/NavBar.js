import React, { Component, useEffect, useState } from "react";
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

const NavBar = ({
  toggle,
  isOpen,
  navClickHome,
  navClickHandler,
  navClickHandlerR2,
}) => {
  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand onClick={navClickHome} href="/welcome">
            Todo List - AOS
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink onClick={navClickHandler} href="/welcome">
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={navClickHandlerR2} href="">
                  Tasks
                </NavLink>
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
