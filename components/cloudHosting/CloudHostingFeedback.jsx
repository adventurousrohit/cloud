import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";


const CloudHostingFeedback = () => {




  return (
    <div className="feedback-section-1 pt-120 pb-120">
    <div className="pb-60">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-7 col-xl-6">
                    <div className="text-center">
                        <h2 className="h3 mb-0" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            We love our Customers & They love us too
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-12" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                <div className="feedback-3-slider">
                    <div className="swiper feedback-3-slider__init">
                        <Swiper 
                        loop
                        modules={[Pagination,Navigation]}
                        centeredSlides={true}
                        pagination= {{
                            el: ".feedback-3-slider__pagination ",
                            clickable: true
                          }}
                        breakpoints={{
                                640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                },
                                768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                                },
                                1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                                },
                            }}
                        className="feedback-3-slider__init">
                            <SwiperSlide className="swiper-slide">
                                <div className="feedback-3-slider__item">
                                    <div className="card rounded-4">
                                        <div className="card-body text-center px-8 py-10">
                                            <div className="feedback-3-slider__avatar w-18 h-18 rounded-circle overflow-hidden mb-3 mx-auto">
                                                <img src="/img/user-img-1.png" alt="image" className="w-100 h-100 object-fit-cover"/>
                                            </div>
                                            <h6 className="mb-0 fs-16">
                                                Peter Parker
                                            </h6>
                                            <ul className="list-unstyled p-0 m-0 hstack justify-content-center mb-6">
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-dark text-opacity-25">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                            </ul>
                                            <h6 className="mb-3">
                                                Awesome Services!
                                            </h6>
                                            <p className="mb-0">
                                                "Our AI image solutions have exceeded our customers' expectations.
                                                they
                                                appreciate
                                                the Here's a opportunities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="feedback-3-slider__item">
                                    <div className="card rounded-4">
                                        <div className="card-body text-center px-8 py-10">
                                            <div className="feedback-3-slider__avatar w-18 h-18 rounded-circle overflow-hidden mb-3 mx-auto">
                                                <img src="/img/user-img-3.png" alt="image" className="w-100 h-100 object-fit-cover"/>
                                            </div>
                                            <h6 className="mb-0 fs-16">
                                                Tony Stark
                                            </h6>
                                            <ul className="list-unstyled p-0 m-0 hstack justify-content-center mb-6">
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-dark text-opacity-25">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                            </ul>
                                            <h6 className="mb-3">
                                                Awesome Services!
                                            </h6>
                                            <p className="mb-0">
                                                "Our AI image solutions have exceeded our customers' expectations.
                                                they
                                                appreciate
                                                the Here's a opportunities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="feedback-3-slider__item">
                                    <div className="card rounded-4">
                                        <div className="card-body text-center px-8 py-10">
                                            <div className="feedback-3-slider__avatar w-18 h-18 rounded-circle overflow-hidden mb-3 mx-auto">
                                                <img src="/img/user-img-4.png" alt="image" className="w-100 h-100 object-fit-cover"/>
                                            </div>
                                            <h6 className="mb-0 fs-16">
                                                Bruce Wayne
                                            </h6>
                                            <ul className="list-unstyled p-0 m-0 hstack justify-content-center mb-6">
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-dark text-opacity-25">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                            </ul>
                                            <h6 className="mb-3">
                                                Awesome Services!
                                            </h6>
                                            <p className="mb-0">
                                                "Our AI image solutions have exceeded our customers' expectations.
                                                they
                                                appreciate
                                                the Here's a opportunities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="feedback-3-slider__item">
                                    <div className="card rounded-4">
                                        <div className="card-body text-center px-8 py-10">
                                            <div className="feedback-3-slider__avatar w-18 h-18 rounded-circle overflow-hidden mb-3 mx-auto">
                                                <img src="/img/user-img-5.png" alt="image" className="w-100 h-100 object-fit-cover"/>
                                            </div>
                                            <h6 className="mb-0 fs-16">
                                                Thomas Halloway
                                            </h6>
                                            <ul className="list-unstyled p-0 m-0 hstack justify-content-center mb-6">
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-warning">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="d-inline-block text-dark text-opacity-25">
                                                        <i className="las la-star"></i>
                                                    </span>
                                                </li>
                                            </ul>
                                            <h6 className="mb-3">
                                                Awesome Services!
                                            </h6>
                                            <p className="mb-0">
                                                "Our AI image solutions have exceeded our customers' expectations.
                                                they
                                                appreciate
                                                the Here's a opportunities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="swiper-pagination feedback-3-slider__pagination mt-4"></div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default CloudHostingFeedback;
