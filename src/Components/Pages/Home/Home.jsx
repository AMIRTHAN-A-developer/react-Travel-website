import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';



const Home = () => {

  const navigate = useNavigate();
  
  const places = [
    { img: "s-1.png", name: "Kerala" },
    { img: "s-2.png", name: "Karnataka" },
    { img: "s-3.png", name: "Chikmagalur" },
    { img: "s-4.png", name: "kollam" },
    { img: "s-5.png", name: "Bangalore" },
    { img: "s-6.png", name: "Wayanad" },
    { img: "s-7.png", name: "Mysore" },
    { img: "s-8.png", name: "Alleppey" },
    { img: "s-9.png", name: "pilgrimage" },
    { img: "s-10.png", name: "coorg" }
  ];
  

  return (
    <div className="container">
    <div className="video-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/assets/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      <div className="bg-overlay">
        <h2 className="logo">Travel Together</h2>
        <span className="logo-text"> Remember Forever .</span>
        <p className="para-text">Traveling is one of the most exciting and enriching experiences in life. 
          It allows us to explore new places, meet different people, and experience diverse cultures,
           broadening our understanding of the world. Every journey is an adventure, filled with unforgettable memories, 
          breathtaking landscapes, and exciting discoveries.</p>
      </div>
    </div>

    <div className="container-destinations" >
      <div className="destinations">
        <img src="/public/assets/H1.png" alt="" className="home-container" />
        <p>India is a land of incredible diversity, and traveling through its various states offers a unique blend of history,
           culture, nature, and modernity. Kerala,
           known as "God’s Own Country," mesmerizes travelers with its serene backwaters, 
           lush greenery, and Ayurvedic traditions, while Tamil Nadu boasts grand temples like Meenakshi Temple and
            Brihadeeswarar Temple, along with beautiful hill stations like Ooty and Kodaikanal. Karnataka offers a mix 
            of heritage and adventure, with the majestic ruins of Hampi, the royal Mysore Palace, and the scenic beauty of Coorg.
             In contrast, Delhi, the capital of India, is a vibrant mix of Mughal-era history and modern city life.
                 </p>
      </div>
    </div>



   <div className="swiper-slide">
   <Swiper spaceBetween={20} slidesPerView={3} loop={true}>
      {places.map((place, index) => (
        <SwiperSlide key={index}>
          <div className="slide">
            <img src={`assets/${place.img}`} alt={place.name} />
            <div className="overlay">{place.name}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      </div>


    <div className="popular-destinations">
<h2 className="destinations-head">Our Popular Destinations</h2>
   <hr className="h-r"/>
<div className="destinations-img">
  <img src="/assets/munar-4.png" alt="Munnar" onClick={() => navigate("/destinations")} />
  <img src="/assets/vagamon-5.png" alt="Vagamon" onClick={() => navigate("/destinations")} />
  <img src="/assets/mysore-1.png" alt="Mysore" onClick={() => navigate("/destinations")} />
  <img src="/assets/thekkady.png" alt="Thekkady" onClick={() => navigate("/destinations")} />
  <img src="/assets/gokararna-2.png" alt="Gokarna" onClick={() => navigate("/destinations")} />
  <img src="/assets/kerela-4.png" alt="Kerala" onClick={() => navigate("/destinations")} />
  <img src="/assets/chickmangular-3.png" alt="Kerala" onClick={() => navigate("/destinations")} />
  <img src="/assets/varkala-3.png" alt="Kerala" onClick={() => navigate("/destinations")} />
  <img src="/assets/banglore-3.png" alt="Kerala" onClick={() => navigate("/destinations")} />
  <img src="/assets/coorg-3.png" alt="Kerala" onClick={() => navigate("/destinations")} />
  <img src="/assets/kovlam-3.png" alt="Kerala" onClick={() => navigate("/destinations")} />
  <img src="/assets/smt-3.png" alt="Kerala" onClick={() => navigate("/destinations")} />
</div>
<p className="enjoy-destinations">We are excited to help you plan an unforgettable trip with affordable travel 
  packages that include multiple destinations at the best prices! Our specially curated budget-friendly travel 
  packages ensure that you experience breathtaking destinations, comfortable stays, and exciting activities without
   exceeding your budget. Whether you're looking for serene beach getaways, scenic hill stations, historical landmarks,
    or adventure-packed experiences, we have the perfect package tailored to your preferences. Our team takes care of 
    all travel essentials, including accommodation, sightseeing, transportation, and guided tours, ensuring a hassle-free
     and enjoyable journey. Additionally, we offer customized itineraries to match your needs, allowing you to explore 
     more destinations at the lowest cost possible. Let us know your preferred travel dates, budget, and destinations of 
     interest, and we will provide you with the best travel deal that guarantees both quality and affordability.
   We look forward to assisting you in creating a memorable and budget-friendly travel experience! </p>
</div>

<section class="section__container feature__container" id="service">
      <div class="feature__card">
        <img src="assets/feature-1.png" alt="feature" />
        <div>
          <h4>Best Destinations</h4>
          <p>Discover the most breathtaking places around the globe.</p>
        </div>
      </div>
      <div class="feature__card">
        <img src="assets/feature-2.png" alt="feature" />
        <div>
          <h4>Best Price Guaranteed</h4>
          <p>Enjoy unbeatable prices on every trip you book.</p>
        </div>
      </div>
      <div class="feature__card">
        <img src="assets/feature-3.png" alt="feature" />
        <div>
          <h4>Instant Booking</h4>
          <p>Secure your dream vacation with just a click.</p>
        </div>
      </div>
    </section>

  <div className="contain">
     <section className="section-image">
      <div className="section-img">
        <img src="assets/Travel-1.png" alt=""  className="section-img-img1"/>
      </div>
      </section>
       <section className="section-images">
        <div className="img-flex">
        <img src="assets/Travel-2.png" alt=" " />
          <img src="assets/Travel-3.png" alt="" />
          <img src="assets/Travel-4.png" alt="" />
          <img src="assets/Travel-5.png" alt="" />
          <img src="assets/Travel-6.png" alt="" />
          <img src="assets/Trabel-6.png" alt="" />
        </div>

      </section>
      </div>

   <Footer />
</div>
  );
};

export default Home;
