import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Navigation } from 'swiper';

const WebHostngModernCard = () => {
  return (
    <section className="bg-warning-2 pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center">
              <h3 className="mb-8">Your Startup Journey with the Right Investments</h3>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            800: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          navigation={{
            nextEl: '.feedback-button-next',
            prevEl: '.feedback-button-prev',
          }}
          className="feedback-slider"
        >
          <SwiperSlide>
            <div className="bg-white p-7 shadow-sm rounded-3">
              <h5 className="text-black fw-bold mb-3">Word Press Hosting</h5>
              <img src="/img/shape/card-11-icon-1.png" alt="icon" className="img-fluid mb-3" />
              <p className="text-black fw-semibold mb-4">
                Our dedicated server experts are available whenever you need them. We will never leave you high and dry.
              </p>
              <p className="text-black text-opacity-75 mb-0">
                Starting at: <span className="text-warning fw-semibold">$20.00/mo</span>
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-7 shadow-sm rounded-3">
              <h5 className="text-black fw-bold mb-3">Shared Hosting</h5>
              <img src="/img/shape/card-11-icon-2.png" alt="icon" className="img-fluid mb-3" />
              <p className="text-black fw-semibold mb-4">
                Our dedicated server experts are available whenever you need them. We will never leave you high and dry.
              </p>
              <p className="text-black text-opacity-75 mb-0">
                Starting at: <span className="text-warning fw-semibold">$20.00/mo</span>
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-7 shadow-sm rounded-3">
              <h5 className="text-black fw-bold mb-3">Cloud Servers</h5>
              <img src="/img/shape/card-11-icon-3.png" alt="icon" className="img-fluid mb-3" />
              <p className="text-black fw-semibold mb-4">
                Our dedicated server experts are available whenever you need them. We will never leave you high and dry.
              </p>
              <p className="text-black text-opacity-75 mb-0">
                Starting at: <span className="text-warning fw-semibold">$20.00/mo</span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="feedback-navs d-flex align-items-center justify-content-between position-relative w-100 z-2 d-none d-md-flex">
          <span
            className="feedback-button-next w-10 h-10 rounded-circle bg-dark d-flex align-items-center justify-content-center text-white"
            tabIndex="0"
            role="button"
            aria-label="Next slide"
          >
            <i className="las la-arrow-right"></i>
          </span>
          <span
            className="feedback-button-prev w-10 h-10 rounded-circle bg-dark d-flex align-items-center justify-content-center text-white"
            tabIndex="0"
            role="button"
            aria-label="Previous slide"
          >
            <i className="las la-arrow-left"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default WebHostngModernCard;
