import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Header from '../../../PublicComponent/Header';
import Footer from '../../../PublicComponent/Footer';
import Rooms from '../../../PublicComponent/Rooms';
import { Link } from 'react-router-dom';

function Room() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="mb-4">Book your stay Sanctuary</h2>
        <div className="card-deck">
          {Rooms.map((room) => (
            <Card
              key={room.id}
              style={{
                marginBottom: '20px',
                height: '400px',
                border: '4px solid #000',
                position: 'relative',
              }}
            >
              <Card.Img
                variant="top"
                src={room.image}
                alt={room.name}
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <Card.Body style={{ textAlign: 'center', padding: '15px', position: 'absolute', bottom: '0', width: '100%' }}>
                <Card.Title>{room.name}</Card.Title>
                <Card.Text>{room.price}</Card.Text>
                <Card.Text>
                  <strong>Amenities:</strong> {room.amenities.join(', ')}
                </Card.Text>
                <Link to={`/book/${room.id}`}>
                  <Button variant="dark" style={{ color: '#fff' }}>
                    Book Now
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Room;





