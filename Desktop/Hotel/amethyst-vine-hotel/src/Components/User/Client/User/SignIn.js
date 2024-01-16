import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Logo from '../../../PublicComponent/Images/Blue Classy Luxury Spa Resort Logo.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../User/AuthContex';


function SignIn() {
  const { login } = useAuth();

  const handleLogin = () => {
    // Assume some login logic, and then call login function from the context
    // For example, you might get the user name from the form
    const userName = 'John Doe'; // Replace with actual user name from the form
    login(userName);
  };
  
  return (
    <div className="container-fluid">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} sm={6} md={6} lg={6}>
          {/* Logo Section */}
          <img
            src={Logo}
            alt="Logo"
            style={{ width: '100%', marginBottom: '20px' }}
          />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          {/* Sign In Form Section */}
          <h2 style={{ textAlign: 'center', marginBottom: '30px', fontWeight: 'bold' }}>
            Sign In
          </h2>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formRememberMe" className="mb-3">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="dark" type="submit" block style={{ textDecoration: 'none' }}>
              Sign In
            </Button>

            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              Do not have an account? <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default SignIn;

