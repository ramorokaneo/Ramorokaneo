import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Card, Button, Form, Spinner } from 'react-bootstrap';
import Header from '../../../PublicComponent/Header';
import Footer from '../../../PublicComponent/Footer';
import Rooms from '../../../PublicComponent/Rooms';

import './Book.css';

function Book() {
  const { roomId } = useParams();
  const selectedRoom = Rooms.find((room) => room.id === roomId);

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [requests, setRequests] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleBookNow = () => {
    
    // Add your logic to handle the booking here
    console.log({
      checkInDate,
      checkOutDate,
      numAdults,
      numChildren,
      requests,
      selectedRoom,
    });


    // Redirect to the Confirmation screen with booking information
    navigate('/confirm', {
      state: {
        bookingInfo: {
          checkInDate,
          checkOutDate,
          numAdults,
          numChildren,
          requests,
          selectedRoom,
        },
      },
    });
  };
  return (
    <div className="book-container">
      <Header />
      <div className="container mt-4">
        <h2 className="mb-4">Book your stay at {selectedRoom.name}</h2>
        <div className="card-deck">
          <Card
            style={{
              marginBottom: '20px',
              height: '400px',
              border: '4px solid #000',
              position: 'relative',
            }}
          >
            <Card.Img
              variant="top"
              src={selectedRoom.image}
              alt={selectedRoom.name}
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <Card.Body
              style={{
                textAlign: 'center',
                padding: '15px',
                position: 'absolute',
                bottom: '0',
                width: '100%',
              }}
            >
              <Card.Title>{selectedRoom.name}</Card.Title>
              <Card.Text>{selectedRoom.price}</Card.Text>
              <Card.Text>
                <strong>Amenities:</strong> {selectedRoom.amenities.join(', ')}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br />
        <br/>
        <Form>
          <Form.Group controlId="checkInDate">
            <Form.Label>Check-In Date</Form.Label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              selectsStart
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={new Date()}
              className="form-control"
              placeholderText="Select check-in date"
            />
          </Form.Group>
          <Form.Group controlId="checkOutDate">
            <Form.Label>Check-Out Date</Form.Label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              selectsEnd
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={checkInDate}
              className="form-control"
              placeholderText="Select check-out date"
            />
          </Form.Group>
          <Form.Group controlId="numAdults">
            <Form.Label>Number of Adults</Form.Label>
            <Form.Control
              type="number"
              value={numAdults}
              onChange={(e) => setNumAdults(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="numChildren">
            <Form.Label>Number of Children</Form.Label>
            <Form.Control
              type="number"
              value={numChildren}
              onChange={(e) => setNumChildren(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="requests">
            <Form.Label>Special Requests</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={requests}
              onChange={(e) => setRequests(e.target.value)}
            />
          </Form.Group>
          <br/>
          <br/>
          <Button
            variant="dark"
            className="book-button"
            onClick={handleBookNow}
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  style={{ marginRight: '5px' }}
                />
                Loading...
              </>
            ) : (
              'Book Now'
            )}
          </Button>
        </Form>
        <br/>
        <br/>
      </div>
      <Footer />
    </div>
  );
}

export default Book;





