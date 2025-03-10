import React from 'react'
import { useNavigate } from "react-router-dom";
import './packages.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import Footer from '../Footer/Footer'

import { useEffect } from 'react';
import { FreeMode, Pagination } from 'swiper/modules';
import { BiBorderRadius } from 'react-icons/bi';

const Packages = () => {
  const navigate = useNavigate(); 

  const handleContactRedirect = () => {
    navigate("/contact");
  };


  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  



  return (
    <div>
      <section className='package-section'>
      <div className='package-container'>
        <div className='container-package'>
         
          <img src="public/assets/p1-1.png" alt="" />
           <div className='package-item'>
            <h3>Let us plan you a
            perfect IV Trips </h3>
            <h6>Custom-Crafted Tour Packages for Unforgettable Holiday Experiences in India.</h6>
            
              <div className='pc-bg'>
              <div className='bg-package'>
              <h2>Heritage</h2>
              <img src="public/assets/p-b-1.png" alt="" />
               </div>
            </div>

           
            <div className='pc-bgs'>
            <div className='bg-package'>
              <h2>Wildlife</h2>
              <img src="public/assets/p-b-2.png" alt="" />
              </div>
            </div>

            
            <div className='pc-bgs-s'>
            <div className='bg-package'>
              <h2>Trecking</h2>
              <img src="public/assets/p-b-3.png" alt="" />
              </div>
            </div>
           </div>
        </div>
      </div>
      </section>

      <section className='benifits'>
        <h5>Benifits of our Packages </h5>
        <p>  Our tour packages offer a convenient and cost-effective way to travel, eliminating the stress of planning
           and organizing every detail. They provide an all-in-one solution, covering accommodations, transportation, 
           meals, and guided tours, often at a lower cost than booking everything separately. One of the biggest advantages
            is the time-saving aspect travelers don’t have to spend hours researching destinations, comparing hotel prices,
             or arranging transport. Everything is pre-planned, ensuring a smooth and hassle-free experience.Additionally, tour 
             packages provide a sense of security, as they are designed by experienced travel professionals who prioritize safety 
             and comfort. Many packages also include local guides who offer valuable insights into the culture, history, and 
             attractions of a destination, enhancing the overall experience. For those traveling in groups or with family, these 
             packages make coordination easier, allowing everyone to enjoy the trip without logistical concerns.</p>
      </section>

     
      <div className="package-destinations">
      <div className="package-india">
        <div className="package-southindia">
          <h2>Our Popular South-India Packages</h2>
          <hr />
          <div className="south-packages">
            {[
              { img: "/assets/packages-6.png", name: "Kerala" },
              { img: "/assets/packages-7.png", name: "Karnataka" },
              { img: "/assets/packages-0.png", name: "Tamil Nadu" },
              { img: "/assets/packages-5.png", name: "Andhra Pradesh" },
              { img: "/assets/packages-4.png", name: "Madhya Pradesh" },
              { img: "/assets/packages-8.png", name: "Hyderbad"},
              
            ].map((pkg, index) => (
              <div key={index} className="south-india">
                <img src={pkg.img} alt={pkg.name} />
                <h5>{pkg.name}</h5>
                <button onClick={handleContactRedirect}>Get Package</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
     

     <div className="swiper-container">
    <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
         <SwiperSlide>
        <img src="public/assets/swiper-2.png" className='swiper-img' alt="Slide 1" style={{ width: "400px", height: "390px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="public/assets/swiper-3.png"className='swiper-img' alt="Slide 2" style={{ width: "400px", height: "380px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="public/assets/swiper-4.png" className='swiper-img'alt="Slide 3"style={{ width: "400px", height: "380px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="public/assets/swiper-5.png"className='swiper-img' alt="Slide 4" style={{ width: "400px", height: "380px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="public/assets/swiper-6.png" className='swiper-img'alt="Slide 5"  style={{ width: "400px", height: "380px" }}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="public/assets/mysoure.png"className='swiper-img' alt="Slide 6" style={{ width: "400px", height: "380px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="public/assets/Maharasta-1.png" className='swiper-img'alt="Slide 7" style={{ width: "400px", height: "380px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="public/assets/H1.png" className='swiper-img'alt="Slide 8" style={{ width: "400px", height: "380px" }} />
      </SwiperSlide>
    </Swiper>
</div>


     <div className="para-text-container">
      <p>SunHolidays isn’t just about exploring the serene backwaters of Kerala or the misty hills of Karnataka—we go
         beyond! Our carefully curated travel packages extend far beyond South India, offering you the chance to witness
          the majestic beauty of North India as well. From the snow-capped peaks of Himachal Pradesh to the royal heritage 
          of Rajasthan and the spiritual charm of Varanasi, SunHolidays ensures that every traveler finds their perfect 
          getaway. Whether you crave the tranquility of South or the grandeur of North, we have the ideal package to 
        turn your dream vacation into reality. Adventure, culture, and unforgettable memories await.Our North India packages let 
        you witness the grandeur of the Taj Mahal, the cultural richness of Punjab, the wildlife of Uttarakhand, and the bustling 
        energy of Mumbai. We craft experiences that are more than just vacations—they are unforgettable journeys filled with discovery, 
        relaxation, and joy.</p>
     </div>


    <div className="package-destinations">
      <div className="package-india">
        <div className="package-southindia">
          <h2>Our Popular North-India Packages</h2>
          <hr />
          <div className="south-packages">
            {[
              { img: "/assets/packages-1.png", name: "Delhi" },
              { img: "/assets/packages-9.png", name: "Uttra pradesh" },
              { img: "/assets/packages-10.png", name: "Uttarakhand" },
              { img: "/assets/packages-11.png", name: "Rajasthan" },
              { img: "/assets/packages-12.png", name: "Punjab" },
              
            ].map((pkg, index) => (
              <div key={index} className="south-india">
                <img src={pkg.img} alt={pkg.name} />
                <h5>{pkg.name}</h5>
                <button onClick={handleContactRedirect}>Get Package</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="para-text-container">
      <h3>Our Upcomings</h3>
      <hr  className='h-r'/>
      <p>Exciting news for all travel enthusiasts! We are expanding our horizons and bringing you international trips 
        alongside our incredible India tour packages! Whether you dream of exploring the breathtaking landscapes of 
        Switzerland, the vibrant streets of Bangkok, the romantic charm of Paris, or the serene beaches of the Maldives, 
        we’ve got the perfect package for you!.But that’s not all! For those who love discovering the beauty of India, we continue 
        to offer amazing trips to Kerala, Rajasthan, Himachal Pradesh, Goa, and more! From snowy mountains to tropical beaches, ancient
         temples to bustling cities, we ensure every journey is seamless, affordable, and filled with unforgettable experiences.</p>
    </div>

    <Footer />
      
    </div>
  )
}

export default Packages
