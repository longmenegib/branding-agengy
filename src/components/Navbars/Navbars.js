import { useState } from "react";
import {
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Collapse,
  NavbarToggler,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  NavbarText
} from "reactstrap";

import { NavLink as RRNavLink } from 'react-router-dom';

import './navbar.css'

const Navbars = () => {

  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <>
  <Navbar
    // color="light"
    expand="md"
    light
    container="sm"
  >
    <NavbarBrand href="/">
      reactstrap
    </NavbarBrand>
    <NavbarToggler 
      // className="me-2"
      onClick={()=> setIsCollapse(!isCollapse)} 
    />
    <Collapse navbar isOpen={isCollapse} className="w-100 mr-auto">
      <Nav
        className="ml-auto"
        navbar
      >
        <NavItem>
          <NavLink className="" to="/home" className="navitems" activeClassName="active" tag={RRNavLink} >
            Home
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
          className="navitems"
        >
          <DropdownToggle
            caret
            nav
            className="dropdownn"
          >
            Services
          </DropdownToggle>
          <DropdownMenu  right>
            <DropdownItem>
            Branding Design
            </DropdownItem>
            {/* <DropdownItem divider /> */}
            <DropdownItem>
            Website Design
            </DropdownItem>
            {/* <DropdownItem divider /> */}
            <DropdownItem>
            Mobile App Design
            </DropdownItem>
            <DropdownItem>
            Social Media Template Design
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink to="/portfolio" className="navitems" activeClassName="active" tag={RRNavLink}>
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/blogs" className="navitems" activeClassName="active" tag={RRNavLink}>
            Blog
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" className="navitems" activeClassName="active" tag={RRNavLink}>
            Contact Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="btn btn-primary text-white d-flex justify-content-center align-items-center mt-1" style={{borderRadius: '50px', width:'100px', height: '30px'}}>
            Login
          </NavLink>
        </NavItem>
      </Nav>
      {/* <NavbarText>
        Simple Text
      </NavbarText> */}
    </Collapse>
  </Navbar>
    </>
  );
};

export default Navbars;
