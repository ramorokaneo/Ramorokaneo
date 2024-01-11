import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../../PublicComponent/Header';
import Footer from '../../../PublicComponent/Footer';
import './Confirm.css'; // Import the stylesheet

function Confirm() {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const bookingInfo = location.state?.bookingInfo;

  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    alternativeNumber: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculateTotalAmount = () => {
    if (bookingInfo) {
      const checkInDate = new Date(bookingInfo.checkInDate);
      const checkOutDate = new Date(bookingInfo.checkOutDate);
      if (!isNaN(checkInDate) && !isNaN(checkOutDate)) {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const numberOfDays = Math.round(Math.abs((checkOutDate - checkInDate) / oneDay)) || 1; // Ensure at least 1 day
        const pricePerNight = parseFloat(bookingInfo.selectedRoom.price.substring(1)); // Remove the 'R' and convert to a number
        const totalAmount = numberOfDays * pricePerNight;
        return totalAmount;
      }
    }
    return 0;
  };

  const calculateGrandTotal = () => {
    const totalAmount = calculateTotalAmount();
    const vatRate = 0.15; // 15% VAT
    const vatAmount = totalAmount * vatRate;
    const grandTotal = totalAmount + vatAmount;
    return grandTotal.toFixed(2); // Adjust the precision as needed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate an asynchronous operation (e.g., API call) with a timeout
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating a delay of 1.5 seconds
    setLoading(false);

    // Redirect to the payment screen
    navigate('/pay'); 
  };

  return (
    <div className="confirm-container">
      <Header />
      <div className="confirm-content">
        <h2>Confirm your booking</h2>
        {bookingInfo && (
          <div className="booking-details">
            <img
              src={bookingInfo.selectedRoom.image}
              alt={bookingInfo.selectedRoom.name}
              className="room-image"
            />
            <div className="room-details">
              <p>Room: {bookingInfo.selectedRoom.name}</p>
              <p>Price: {bookingInfo.selectedRoom.price}</p>
              <p>Amenities: {bookingInfo.selectedRoom.amenities.join(', ')}</p>
              <p>Check-In: {bookingInfo.checkInDate?.toLocaleDateString()}</p>
              <p>Check-Out: {bookingInfo.checkOutDate?.toLocaleDateString()}</p>
              <p>Number of Adults: {bookingInfo.numAdults}</p>
              <p>Number of Children: {bookingInfo.numChildren}</p>
              <p>Total Amount: R{calculateTotalAmount().toFixed(2)}</p>
              <p>VAT (15%): R{(calculateTotalAmount() * 0.15).toFixed(2)}</p>
              <p><strong>Grand Total: R{calculateGrandTotal()}</strong></p>
            </div>
          </div>
        )}
        {/* User Details Form */}
        <div className="user-details">
          <h3>Guest Details</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Full Name:
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Date of Birth:
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Alternative Number:
              <input
                type="tel"
                name="alternativeNumber"
                value={formData.alternativeNumber}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Processing...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Confirm;


