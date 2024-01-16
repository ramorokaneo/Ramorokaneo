import React from 'react';
import Header from '../../PublicComponent/Header';
import Footer from '../../PublicComponent/Footer';
import { Carousel } from 'react-bootstrap';

// Import your carousel images
import Image1 from '../../PublicComponent/Images/Home/image1.jpg';
import Image2 from '../../PublicComponent/Images/Home/image2.jpg';
import Image3 from '../../PublicComponent/Images/Home/image3.jpg';
import Image4 from '../../PublicComponent/Images/Home/image4.jpg';
import Image5 from '../../PublicComponent/Images/Home/image5.jpg';
import Image6 from '../../PublicComponent/Images/Home/image6.jpg';
import Image7 from '../../PublicComponent/Images/Home/image7.jpg';
import Image8 from '../../PublicComponent/Images/Home/image8.jpg';
import Image9 from '../../PublicComponent/Images/Home/image9.jpg';
import Image10 from '../../PublicComponent/Images/Home/image10.jpg';
import Image11 from '../../PublicComponent/Images/Home/image11.jpg';
import Image12 from '../../PublicComponent/Images/Home/image12.jpg';

function Home() {
  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center', paddingTop: '20px' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '32px' }}>
          Welcome to Amethyst Vine Hotel
        </h1>
        <Carousel style={{ maxWidth: '800px', margin: 'auto' }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image4}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image5}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image6}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image7}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image8}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image9}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image10}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image11}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image12}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
