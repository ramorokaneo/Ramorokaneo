import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../../PublicComponent/Header';
import Footer from '../../../PublicComponent/Footer';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Payment() {
  const location = useLocation();
  const bookingInfo = location.state?.bookingInfo;

  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-4">
          <Col>
            <h2 style={{ fontWeight: 'bold' }}>Payment</h2>
            {bookingInfo && (
              <div>
                <Image
                  src={bookingInfo.selectedRoom.image}
                  alt={bookingInfo.selectedRoom.name}
                  fluid
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <p>Room: {bookingInfo.selectedRoom.name}</p>
                <p>Check-In: {bookingInfo.checkInDate?.toLocaleDateString()}</p>
                <p>Check-Out: {bookingInfo.checkOutDate?.toLocaleDateString()}</p>
                <p>
                  Number of Guests: {bookingInfo.numAdults} Adults, {bookingInfo.numChildren} Children
                </p>

                <h3>User Details</h3>
                <p>Full Name: {bookingInfo.userDetails.fullName}</p>
                <p>Date of Birth: {bookingInfo.userDetails.dateOfBirth}</p>
                <p>Email: {bookingInfo.userDetails.email}</p>
                <p>Phone Number: {bookingInfo.userDetails.phoneNumber}</p>
                {bookingInfo.userDetails.alternativeNumber && (
                  <p>Alternative Number: {bookingInfo.userDetails.alternativeNumber}</p>
                )}

                <p>Total Amount: R{bookingInfo.totalAmount.toFixed(2)}</p>
                <p>VAT (15%): R{(bookingInfo.totalAmount * 0.15).toFixed(2)}</p>
                <p><strong>Grand Total: R{bookingInfo.grandTotal.toFixed(2)}</strong></p>
                {/* Add more details as needed */}
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Payment;
