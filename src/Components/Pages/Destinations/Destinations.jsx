import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes, FaArrowRight } from "react-icons/fa"; 
import "./destination.css";
import destinationData from "./destinationdata";
import Footer from '../Footer/Footer'

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const navigate = useNavigate(); 

  const handleExploreClick = (destination) => {
    setSelectedDestination(destination);
  };

  const handleClose = () => {
    setSelectedDestination(null);
  };

  const handleVisitNowClick = () => {
    navigate("/Packages"); 
  };

  return (
    <div className="contain-destination">
     
      <div className="container">
        <div className="video-container">
          <video className="background-video" autoPlay loop muted>
            <source src="/assets/bg-video-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="bg-overlay">
            <h2 className="logo">Dream Destinations</h2>
            <span className="logo-text">Affordable Journeys</span>
            <p className="para-text">
              Exploring new destinations opens the door to unforgettable experiences, rich cultures,
              and breathtaking landscapes. Whether it's the serene beaches of Goa, the misty hill stations of Munnar and Ooty,
              the royal palaces of Rajasthan, or the historical wonders of Delhi and Agra, every place has a unique charm.
            </p>
          </div>
        </div>
      </div>

      
      <section className="destination-content">
        <div className="content-palce">
          <div className="about-destinations">
            <h1 className="destination-h1">
               Our Recent Destinations
            </h1>
            <hr  className="h-r"/>
            <div className="image-destinations">
              {destinationData.map((destination) => (
                <div key={destination.id} className="destination-card">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="destination-img"
                  />
                  
                  <button className="explore-btn" onClick={() => handleExploreClick(destination)}>
                    Explore More
                  </button>

                 
                  <button className="visit-now-btn" onClick={handleVisitNowClick}>
                    Visit Now <FaArrowRight className="visit-icon" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {selectedDestination && (
        <section className="destination-details active">
          <div className="destination-content-box">
            <img src={selectedDestination.image} alt={selectedDestination.name} />
            <div className="destination-description">
              <h2>{selectedDestination.name}</h2>
              <p>{selectedDestination.description}</p>
              <Link to="/packages" className="find-packages-btn">
                Find Packages
              </Link>
            </div>
            <FaTimes className="close-btn" onClick={handleClose} />
          </div>
        </section>
      )}

      
      <section className="destination-img-bg">
        <div className="text-destination-op">
          <p>
            Our SunHolidays specializes in organizing fun, educational, and budget-friendly Industrial Visit (IV)
            trips for college students, covering multiple destinations with customized itineraries. Our packages include
            visits to tech hubs, historical landmarks, adventure spots, and scenic locations, ensuring a perfect balance
            of learning and enjoyment. Whether it’s a tech-based trip to Bangalore & Mysore, an adventure-filled tour to
            Coorg & Chikmagalur, or a cultural exploration of Hyderabad & Delhi, we have the perfect plan for your group.
          </p>
        </div>
      </section>

      <div className="feature-container">
      <section className="section__container feature__container" id="service">
        <div className="feature__card">
          <img src="/assets/feature-1.png" alt="feature" />
          <div>
            <h4>Best Destinations</h4>
            <p>Discover the most breathtaking places around the globe.</p>
          </div>
        </div>
        <div className="feature__card">
          <img src="/assets/feature-2.png" alt="feature" />
          <div>
            <h4>Best Price Guaranteed</h4>
            <p>Enjoy unbeatable prices on every trip you book.</p>
          </div>
        </div>
        <div className="feature__card">
          <img src="/assets/feature-3.png" alt="feature" />
          <div>
            <h4>Instant Booking</h4>
            <p>Secure your dream vacation with just a click.</p>
          </div>
        </div>
      </section>
   </div>
     
      <section className="travel-india">
        <div className="container-text">
          <div className="text-india">
            <h2>Travel Information</h2>
            <div className="travel-img">
              <img src="/assets/T1.png" alt="" />
              <p>
                The best time to visit India for holidays depends on the type of experience you seek.
                The tourism season in India varies across regions due to its diverse climate. The peak tourism season
                in India starts from September to June. For wildlife enthusiasts, winter is ideal as national parks
                are open, and wildlife sightings are abundant. Hill stations are most enjoyable during summer to escape
                the scorching heat of the plains. For trekking and hiking adventures, winter, monsoon, autumn, and spring
                offer pleasant weather. Plan your trip according to your preferences, and you'll discover India's incredible
                beauty and cultural richness, making it an unforgettable holiday destination. September to April can be considered
                an ideal time to explore India for tourism holidays.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Destinations;
