// Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaBed, FaUtensils, FaHotTub, FaStar, FaEnvelope, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import Logo from "../PublicComponent/Images/Blue Classy Luxury Spa Resort Logo.png";
import { Link } from 'react-router-dom'; // Import Link for routing
import { useAuth } from '../../Components/User/Client/User/AuthContex';

function Header() {
  const { isLoggedIn, userName, login, logout } = useAuth();

  const handleLogin = () => {
    // Replace this with your actual login logic
    // For now, we'll use a placeholder user name
    const placeholderUserName = 'John Doe';
    login(placeholderUserName);
  };

  const handleLogout = () => {
    // Replace this with your actual logout logic
    logout();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={Logo}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="Hotel Logo"
        />
        {' Amethyst Vine Hotel'}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="mr-auto">
          <Nav.Link href="/"><FaHome /> Home</Nav.Link>
          <Nav.Link href="/about"><FaInfoCircle /> About</Nav.Link>
          <Nav.Link href="/room"><FaBed /> Room</Nav.Link>
          <Nav.Link href="/eats"><FaUtensils /> Eats</Nav.Link>
          <Nav.Link href="/relax"><FaHotTub /> Relax</Nav.Link>
          <Nav.Link href="/experience"><FaStar /> Experience</Nav.Link>
          <Nav.Link href="/contact"><FaEnvelope /> Contact</Nav.Link>
        </Nav>
        <Nav style={{ fontWeight: 'bold', margin: '0 15px' }}>
          {isLoggedIn ? (
            <>
              <Nav.Link disabled>Welcome {userName}</Nav.Link>
              <Nav.Link onClick={handleLogout}><FaSignOutAlt /> Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link onClick={handleLogin}><FaSignInAlt /> Sign In</Nav.Link>
              <Link to="/signup" className="nav-link"><FaUserPlus /> Sign Up</Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;


