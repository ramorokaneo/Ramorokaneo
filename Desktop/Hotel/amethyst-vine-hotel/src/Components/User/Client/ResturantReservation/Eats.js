// Eats.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../PublicComponent/Header';
import Footer from '../../../PublicComponent/Footer';
import RestaurantData from '../../../PublicComponent/Resturants';
import './Eats.css';

function Eats() {
  const [loadingState, setLoadingState] = useState({});
  const navigate = useNavigate();

  const handleReservationClick = (restaurantId, restaurantName, restaurantImage) => {
    setLoadingState((prevLoadingState) => ({
      ...prevLoadingState,
      [restaurantId]: true,
    }));

    setTimeout(() => {
      setLoadingState((prevLoadingState) => ({
        ...prevLoadingState,
        [restaurantId]: false,
      }));
      navigate(`/reservation/${restaurantName}/${encodeURIComponent(restaurantImage)}`);
    }, 1500);
  };

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="mb-4">Let's Dine and Explore</h2>
        <div className="card-deck">
          {RestaurantData.map((restaurant) => (
            <div className="card" key={restaurant.id}>
              <img src={restaurant.image} className="card-img-top" alt={restaurant.name} />
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text">{restaurant.cuisine}</p>
                <p className="card-text">{restaurant.ambiance}</p>
                <button
                  className="btn btn-book-reservation"
                  onClick={() =>
                    handleReservationClick(
                      restaurant.id,
                      restaurant.name,
                      restaurant.image
                    )
                  }
                  disabled={loadingState[restaurant.id]}
                >
                  {loadingState[restaurant.id] ? 'Booking...' : 'Book Reservation'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Eats;
