import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";
import Logo from "../assets/images/Logo-img1.jpg";

import { Link, Outlet } from 'react-router-dom'
import Footer from "./Footer";
import SignInModal from "../login/LogIn";
import SignUpModal from "../login/SignUp";

function Home() {

  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  // Functions to open/close modals
  const openSignInModal = () => setShowSignInModal(true);
  const closeSignInModal = () => setShowSignInModal(false);

  const openSignUpModal = () => setShowSignUpModal(true);
  const closeSignUpModal = () => setShowSignUpModal(false);

 
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="d-flex justify-content-around"
      >
        <Navbar.Brand href="#home">
          {"   "}
          <img
            alt="VRV"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          VRV Security
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Container>
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
              <Link id="ad-btn" to="section1"> <Nav.Link href="/"> Home</Nav.Link></Link>
              </Nav.Item>
              <Nav.Item>
              <Link id="ad-btn" to="about"> <Nav.Link href="/"> About</Nav.Link></Link>
              </Nav.Item>
              <Nav.Item>
              <Link id="ad-btn" to="section2"> <Nav.Link href="/"> Contact</Nav.Link></Link>
              </Nav.Item>
            </Nav>
          </Container>

          <Container>
            <Nav className="justify-content-end" >
              <Nav.Item>
                <Nav.Link >
                <Link id="ad-btn" to="/admin"><Button variant="outline-info"> Admin</Button></Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link >
                  <Button variant="outline-light" onClick={openSignInModal}>Login</Button>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link >
                  <Button variant="outline-light" onClick={openSignUpModal}>SignUp</Button>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>,

      <Outlet/>,

       {/* Modals */}
       <SignInModal show={showSignInModal} closeSignInModal={closeSignInModal} />
      <SignUpModal show={showSignUpModal} closeSignUpModal={closeSignUpModal} />

      <Footer/>

       

      
    </>
  );
}

export default Home;
