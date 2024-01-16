import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../PublicComponent/Header';
import Footer from '../../../PublicComponent/Footer';

function Reservation() {
  const { restaurantName, restaurantImage } = useParams();

  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    numberOfGuests: '',
    userName: '',
    userEmail: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReserveClick = () => {
    console.log('Reservation details:', reservationData);
  };

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src={decodeURIComponent(restaurantImage)}
              alt={`${restaurantName} Restaurant`}
              className="img-fluid"
            />
          </div>

          {/* Right column for the form */}
          <div className="col-md-6">
            <h2 className="mb-4">Reservation for {restaurantName}</h2>

            {/* Reservation form */}
            <form>
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  value={reservationData.date}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Time:</label>
                <input
                  type="time"
                  name="time"
                  value={reservationData.time}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Number of Guests:</label>
                <input
                  type="number"
                  name="numberOfGuests"
                  value={reservationData.numberOfGuests}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Your Name:</label>
                <input
                  type="text"
                  name="userName"
                  value={reservationData.userName}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Your Email:</label>
                <input
                  type="email"
                  name="userEmail"
                  value={reservationData.userEmail}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Contact Number:</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={reservationData.phoneNumber}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter your contact number"
                />
              </div>
              <button
                type="button"
                className="btn btn-book-reservation"
                onClick={handleReserveClick}
              >
                Reserve
              </button>
            </form>
          </div>
        </div>

        {/* Placeholder content - replace with your actual content */}
        <p>This is the Reservation component content.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Reservation;
