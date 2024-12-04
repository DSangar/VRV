import React from 'react'
// import { NBar } from '../Nav-bar/NBar'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";


import {Link, Outlet, } from 'react-router-dom'




const Admin = () => {
  return (
    <div>
        
    
        <Container>
            <Nav className="d-flex justify-content-around" >
              <Nav.Item>
                <Nav.Link >
                <Link id="ad-btn" to="dashborad"> <Button variant="outline-info"> DashBoard</Button></Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link >
                <Link id="ad-btn" to="users"> <Button variant="outline-dark"> Users </Button></Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link >
                <Link id="ad-btn" to="roles"><Button variant="outline-dark">Roles </Button></Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link >
                <Link id="ad-btn" to="permissions"><Button variant="outline-dark">Permissions </Button></Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>,

          <Outlet/>
        
    </div>
  )
}

export default Admin
