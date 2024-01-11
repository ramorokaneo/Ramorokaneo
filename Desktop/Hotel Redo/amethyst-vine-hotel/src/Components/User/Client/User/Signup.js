import React, { useState } from 'react';
import { Form, Button, Row, Col, Image } from 'react-bootstrap';
import Logo from '../../../PublicComponent/Images/Blue Classy Luxury Spa Resort Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    title: '',
    surname: '',
    name: '',
    gender: '',
    address: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = 'http://localhost:5000/api/users';
      const { data: res } = await axios.post(url, formData);
      console.log(res.message);
      navigate('/signin');
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        console.error(error.response.data.message);
      }
    }

    // Simulate an asynchronous operation (e.g., API call) with a timeout
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating a delay of 1.5 seconds

    setLoading(false);

    // Redirect to the sign-in screen
    navigate('/signin');

    // Reset form data after submission if needed
    setFormData({
      title: '',
      surname: '',
      name: '',
      gender: '',
      address: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="container-fluid">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} sm={6} md={6} lg={6}>
          {/* Logo Section */}
          <Image src={Logo} alt="Logo" fluid style={{ marginBottom: '20px' }} />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          {/* Sign Up Form Section */}
          <h2 style={{ textAlign: 'center', marginBottom: '30px', fontWeight: 'bold' }}>
            Sign Up
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control as="select" name="title" value={formData.title} onChange={handleChange} required>
                <option value="">Select Title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="surname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" name="surname" value={formData.surname} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </Form.Group>

            <Button variant="dark" type="submit" block disabled={loading} style={{ textDecoration: 'none' }}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </Button>

            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              Already have an account? <Link to="/signin" style={{ textDecoration: 'none' }}>Sign In</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
