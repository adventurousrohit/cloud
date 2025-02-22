import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,Pagination} from "swiper"
import { Link } from 'react-router-dom';
const GameHostingHero = () => {
  return (
    <>
       <div className="hero-7">
        <div className="container">
            <div className="row g-4 align-items-center">
                <div className="col-lg-7">
                    <span
                        className="d-inline-flex gap-1 align-items-center border border-primary bg-primary bg-opacity-10 px-3 py-1 rounded mb-3">
                        <span className="w-2 h-2 rounded-circle bg-primary"></span>
                    <span className="d-inline-block fw-bold text-primary">Game Servers / GTA 5</span>
                    </span>
                    <h1 className="hero-7__title mb-4 text-white">
                        Premium GTA 5
                        Game Server <span className="text-primary">Hosting</span>
                    </h1>
                    <p className="mb-6 fw-semibold text-white max-text-48 text-opacity-75">
                        Experience a new way to WordPress. Build, launch, & manage
                        high-performance WordPress sites
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-4">
                        <Link href="/server-location" className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded">
                            <span className="btn-arrow__text">
                                Game Server
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                        <Link href="/server-location" className="text-decoration-none text-white">
                            <span className="d-block mb-1">Starting at</span>
                            <span className="d-block h6 m-0 text-white">$16.00/mo</span>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-5">
      <div className="position-relative z-1">
        <Swiper
          modules={[Pagination,Autoplay]} // Include the Pagination module
          pagination={{
            clickable: true,
            el: '.hero-7-slider__pagination', // Custom pagination selector
          }}
          autoplay={{delay:3000}}
          loop
          
          // Enable clickable pagination
          className="hero-7-slider"
        >
          <SwiperSlide>
            <img src="/img/hero-7-slider-img-1.png" alt="image" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/hero-7-slider-img-1.png" alt="image" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/hero-7-slider-img-1.png" alt="image" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/hero-7-slider-img-1.png" alt="image" className="img-fluid" />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination hero-7-slider__pagination"></div>
        <img
          src="/img/hero-slider-7-shape.png"
          alt="image"
          className="img-fluid hero-7__shape hero-7__shape-1"
        />
      </div>
    </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default GameHostingHero
