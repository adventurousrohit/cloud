import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import { Pagination } from 'swiper';
import { Link } from 'react-router-dom';


const WebHostingFeedback = () => {
  return (
    <section className="feedback-2-area pt-120 pb-120 bg-dark position-relative z-1">
      <div className="container">
        <div className="row g-4 justify-content-xxl-between align-items-center">
          <div className="col-lg-6 col-xxl-5 order-lg-2">
            <h2 className="text-white mb-4">
              Don’t take Our Word for it take theirs
            </h2>
            <p className="mb-8 text-white text-opacity-75">
              With over two decades of experience in high-quality, secure web hosting online journey. We are with you every step of the way.
            </p>
            <Link href="/contact/" className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded">
              <span className="btn-arrow__text">
                About Us
                <span className="btn-arrow__icon">
                  <i className="las la-arrow-right"></i>
                </span>
              </span>
            </Link>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="feedback-2-container">
              <Swiper
               modules={[Pagination]}
               loop={true}
                pagination={{ clickable: true,el: ".feedback-2__pagination", }}
                className="feedback-2"
              >
                <SwiperSlide>
                  <div className="card rounded-3">
                    <div className="card-body p-sm-6 p-md-12 position-relative z-1">
                      <ul className="list-unstyled p-0 m-0 hstack">
                        {[...Array(4)].map((_, index) => (
                          <li key={index}>
                            <span className="d-inline-block text-warning">
                              <i className="las la-star"></i>
                            </span>
                          </li>
                        ))}
                        <li>
                          <span className="d-inline-block text-dark text-opacity-25">
                            <i className="las la-star"></i>
                          </span>
                        </li>
                      </ul>
                      <h6 className="mb-4">Awesome Hosting Services!</h6>
                      <p className="mb-6">
                        With over two decades of experience in high-quality, secure web hosting, Hostingard is the strategic partner for your online journey. Design a great experience for your users on the web.
                      </p>
                      <div className="d-flex align-items-center gap-4">
                        <div className="flex-shrink-0">
                          <img src="/img/user-img-1.png" alt="user" className="img-fluid" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fs-16 mb-0">Lola Ross</h6>
                          <small>Digital Marketing Director</small>
                        </div>
                      </div>
                      <span className="d-inline-block position-absolute top-0 end-0 p-6 z-n1">
                        <img src="/img/icon-quote.png" alt="quote" className="img-fluid" />
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card rounded-3">
                    <div className="card-body p-sm-6 p-md-12 position-relative z-1">
                      <ul className="list-unstyled p-0 m-0 hstack">
                        {[...Array(4)].map((_, index) => (
                          <li key={index}>
                            <span className="d-inline-block text-warning">
                              <i className="las la-star"></i>
                            </span>
                          </li>
                        ))}
                        <li>
                          <span className="d-inline-block text-dark text-opacity-25">
                            <i className="las la-star"></i>
                          </span>
                        </li>
                      </ul>
                      <h6 className="mb-4">Awesome Hosting Services!</h6>
                      <p className="mb-6">
                        With over two decades of experience in high-quality, secure web hosting, Hostingard is the strategic partner for your online journey. Design a great experience for your users on the web.
                      </p>
                      <div className="d-flex align-items-center gap-4">
                        <div className="flex-shrink-0">
                          <img src="/img/user-img-1.png" alt="user" className="img-fluid" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fs-16 mb-0">Lola Ross</h6>
                          <small>Digital Marketing Director</small>
                        </div>
                      </div>
                      <span className="d-inline-block position-absolute top-0 end-0 p-6 z-n1">
                        <img src="/img/icon-quote.png" alt="quote" className="img-fluid" />
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card rounded-3">
                    <div className="card-body p-sm-6 p-md-12 position-relative z-1">
                      <ul className="list-unstyled p-0 m-0 hstack">
                        {[...Array(4)].map((_, index) => (
                          <li key={index}>
                            <span className="d-inline-block text-warning">
                              <i className="las la-star"></i>
                            </span>
                          </li>
                        ))}
                        <li>
                          <span className="d-inline-block text-dark text-opacity-25">
                            <i className="las la-star"></i>
                          </span>
                        </li>
                      </ul>
                      <h6 className="mb-4">Awesome Hosting Services!</h6>
                      <p className="mb-6">
                        With over two decades of experience in high-quality, secure web hosting, Hostingard is the strategic partner for your online journey. Design a great experience for your users on the web.
                      </p>
                      <div className="d-flex align-items-center gap-4">
                        <div className="flex-shrink-0">
                          <img src="/img/user-img-1.png" alt="user" className="img-fluid" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fs-16 mb-0">Lola Ross</h6>
                          <small>Digital Marketing Director</small>
                        </div>
                      </div>
                      <span className="d-inline-block position-absolute top-0 end-0 p-6 z-n1">
                        <img src="/img/icon-quote.png" alt="quote" className="img-fluid" />
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Add more SwiperSlide components here with similar structure */}
              </Swiper>
              <div className="swiper-pagination feedback-2__pagination mt-2 text-start"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHostingFeedback;
