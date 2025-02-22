import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import  { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const ModerHomeFeedback = () => {
  return (
    <section className="pt-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-5">
            <Swiper
              spaceBetween={20}
              loop
              slidesPerView={1}
              pagination={{ clickable: true }}
              
              className="feedback-2"
            >
              <SwiperSlide>
                <div className="bg-white px-6 py-10 rounded-4">
                  <h5 className="mb-6">Genuine Customer Testimonials</h5>
                  <p className="fs-18 fw-medium text-black mb-8">
                    I highly recommend their Registration, Email Hosting & Web
                    Hosting Service for Competitive pricing. Their Support Team
                    is impressively prompt in addressing any doubt or question.”
                  </p>
                  <div className="d-flex align-items-center gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src="/img/user-img-1.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <h6 className="fs-16 mb-0">Lola Ross</h6>
                      <ul className="list-unstyled p-0 m-0 hstack">
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
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Add more SwiperSlides here */}
            </Swiper>
          </div>

          <div className="col-xl-7">
            <div className="row g-4">
              {[
                { img: "opensuse.svg", name: "open SUSE" },
                { img: "webmin.svg", name: "Webmin" },
                { img: "docker.svg", name: "Docker" },
                { img: "proxmox.svg", name: "ProxMox" },
                { img: "cpanel.svg", name: "Cpanel" },
                { img: "rockylinux.svg", name: "Rocky Linux" },
                { img: "partner-logo-5.png", name: "Alma Linux" },
                { img: "freebsd.svg", name: "Free BSD" },
              ].map((partner, index) => (
                <div className="col-sm-6 col-md-3" key={index}>
                  <div className="tech-partner transition bg-white px-6 py-8 rounded-2 shadow-sm text-center h-100">
                    <img
                      src={`/img/${partner.img}`}
                      alt={partner.name}
                      className="img-fluid w-12"
                    />
                    <h6 className="fs-16 fw-bold mt-4">{partner.name}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModerHomeFeedback;
