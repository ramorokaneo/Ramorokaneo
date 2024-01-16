import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaSnapchat, FaTiktok, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h4>Amethyst Vine Hotel</h4>
            <p>
              123 Made-Up Street, <br />
              Pretoria, 0001, <br />
              South Africa
            </p>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <p>
              <strong>Website:</strong> <a href="https://www.amethystvinehotel.com">www.amethystvinehotel.com</a>
              <br />
              <strong>Email:</strong> info@amethystvinehotel.com
              <br />
              <strong>Phone:</strong> +27 123 456 789
            </p>
          </Col>
          <Col md={4}>
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com"><FaFacebook /></a>
              <a href="https://www.twitter.com"><FaTwitter /></a>
              <a href="https://www.instagram.com"><FaInstagram /></a>
              <a href="https://www.snapchat.com"><FaSnapchat /></a>
              <a href="https://www.tiktok.com"><FaTiktok /></a>
              <a href="https://www.linkedin.com"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
