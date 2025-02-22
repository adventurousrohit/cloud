import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

const feedbackData = [
  {
    id: 1,
    imgSrc: "/img/user-img-4.png",
    title: "Awesome Services!",
    description: "Our AI image solutions have exceeded our customers' expectations. They appreciate the opportunities.",
    name: "Bruce Wayne",
    rating: 4
  },
  {
    id: 2,
    imgSrc: "/img/user-img-3.png",
    title: "Great Hosting Service",
    description: "Our AI image solutions have exceeded our customers' expectations. They appreciate the opportunities.",
    name: "Bruce Wayne",
    rating: 4
  },
  {
    id: 3,
    imgSrc: "/img/user-img-5.png",
    title: "Awesome Services!",
    description: "Our AI image solutions have exceeded our customers' expectations. They appreciate the opportunities.",
    name: "Bruce Wayne",
    rating: 4
  },
];

const WebHostingModernFeedback = () => {
  const renderStars = (rating) => {
    return (
      <ul className="list-unstyled p-0 m-0 hstack justify-content-center mb-0">
        {[...Array(5)].map((_, i) => (
          <li key={i}>
            <span className={`d-inline-block ${i < rating ? 'text-warning' : 'text-dark text-opacity-25'}`}>
              <i className="las la-star"></i>
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="bg-warning-2 pt-60 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-between gap-3 mb-8">
          <div className="col-lg-5">
            <h3>What People Think About Our Products</h3>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-end">
              <Link className="btn btn-outline-secondary btn-lg fw-bold rounded text-primary fs-14" href="/contact/" role="button">See All Feedback</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="feedback-slider swiper">
              <Swiper modules={[Autoplay]} autoplay={{delay:3000}}  breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
         
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
          }} loop={true}>
                {feedbackData.map((feedback) => (
                  <SwiperSlide key={feedback.id}>
                    <div className="bg-white text-center shadow-sm px-8 py-10 rounded-4">
                      <img src={feedback.imgSrc} alt="User" className="img-fluid mb-3" />
                      <h6 className="mb-3">{feedback.title}</h6>
                      <p className="mb-0">{feedback.description}</p>
                      <div className="mt-4">
                        <h6 className="mb-0 fs-16">{feedback.name}</h6>
                        {renderStars(feedback.rating)}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHostingModernFeedback;
