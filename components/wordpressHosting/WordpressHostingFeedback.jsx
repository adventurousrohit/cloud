// FeedbackSlider.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import {Autoplay} from "swiper"

const feedbacks = [
  {
    userImage: '/img/feedback-5-user-1.png',
    logoImage: '/img/feedback-5-logo-1.png',
    text: '“Hostcity has been instrumental in helping me plan for my retirement. Their expert financial advisors provided personalized guidance, and I feel confident about my financial future.”',
    name: 'Saiful Talukdar',
    location: 'Dubai',
    shapeImage: '/img/shape/feedback-5-shape.png'
  },
  {
    userImage: '/img/feedback-5-user-2.png',
    logoImage: '/img/feedback-5-logo-2.png',
    text: '“Hostcity has been instrumental in helping me plan for my retirement. Their expert financial advisors provided personalized guidance, and I feel confident about my financial future.”',
    name: 'Saiful Talukdar',
    location: 'Dubai',
    shapeImage: '/img/shape/feedback-5-shape.png'
  },
  // Add more feedbacks as needed
];

const WordpressHostingFeedback = () => {
  return (
    <section className="pt-120 pb-120 bg-success">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <h2 className="text-white mb-8" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              What our Customers Have to Say About us.
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
            modules={[Autoplay]}
            autoplay={{delay:3000}}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
        
              pagination={{ clickable: true }}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
              
              
              }}
              className="feedback-slider-4"
            
            >
              {feedbacks.map((feedback, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-10 rounded-3 position-relative z-1">
                    <img src={feedback.shapeImage} alt="shape" className="img-fluid position-absolute top-0 end-0 z-n1" />
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-6">
                      <img src={feedback.userImage} alt="user" className="img-fluid" />
                      <img src={feedback.logoImage} alt="logo" className="img-fluid" />
                    </div>
                    <p className="fs-16 fw-semibold mb-6">{feedback.text}</p>
                    <div>
                      <h6 className="fs-16 mb-0">{feedback.name}</h6>
                      <small>{feedback.location}</small>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="text-center mt-10" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
          <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
            <p className="text-white fw-bold mb-0">
              Ranked among the top server providers in the industry on
            </p>
            <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
              <img src="/img/feedback-4-sub-1.png" alt="sub1" className="img-fluid" />
              <img src="/img/feedback-4-sub-2.png" alt="sub2" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordpressHostingFeedback;
