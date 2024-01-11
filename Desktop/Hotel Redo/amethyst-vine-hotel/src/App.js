import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/User/Client/Home';
import About from './Components/User/Client/About';
import Room from './Components/User/Client/RoomBooking/Room';
import Eats from './Components/User/Client/ResturantReservation/Eats';
import Relax from './Components/User/Client/SpaBooking/Relax';
import Experience from './Components/User/Client/OutdoorBooking/Experience';
import Contact from './Components/User/Client/Contact';
import SignUp from './Components/User/Client/User/Signup';
import SignIn from './Components/User/Client/User/SignIn';
import Book from './Components/User/Client/RoomBooking/Book';
import Confirm from './Components/User/Client/RoomBooking/Confirm';
import Payment from './Components/User/Client/RoomBooking/Payment';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/room" element={<Room />} />
          <Route path="/eats" element={<Eats />} />
          <Route path="/relax" element={<Relax />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/book/:roomId" element={<Book />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/pay" element={<Payment />} />
        </Routes>
    </Router>
  );
}
export default App;


