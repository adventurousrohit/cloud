import React from 'react';
import { Link } from 'react-router-dom';

const WebHostingPartner = () => {
  return (
    <section className="partner-area bg-dark pt-120 pb-120 position-relative z-1">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-7">
            <div
              className="d-flex align-items-center gap-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <span>
                <img src="/img/shape/bage-1.png" alt="Trusted Partner" />
              </span>
              <span className="text-white fw-bold">A Trusted Partner Since 2001</span>
            </div>
            <h2
              className="text-white mt-2 mb-8"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              Reliability Performance And Personalized Support you Can trust.
            </h2>
            <img
              src="/img/partner-1.png"
              alt="Partner"
              className="img-fluid"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            />
          </div>
          <div className="col-xl-5">
            <div className="ps-xl-8">
              <img
                src="/img/partner-2.png"
                alt="Experience"
                className="img-fluid mb-8"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              />
              <h6
                className="text-white mb-8"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                With over two decades of experience in high quality We are with you every step of the way.
              </h6>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                <li
                  className="d-flex align-items-center gap-2 opacity-75"
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  <div className="w-2 h-2 rounded-circle bg-white"></div>
                  <small className="text-white">Rated 5 stars on both Google and Trustpilot.</small>
                </li>
                <li
                  className="d-flex align-items-center gap-2 opacity-75"
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="400"
                  data-sal-easing="ease-in-out-sine"
                >
                  <div className="w-2 h-2 rounded-circle bg-white"></div>
                  <small className="text-white">ISO 27001 Certified.</small>
                </li>
                <li
                  className="d-flex align-items-center gap-2 opacity-75"
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="500"
                  data-sal-easing="ease-in-out-sine"
                >
                  <div className="w-2 h-2 rounded-circle bg-white"></div>
                  <small className="text-white">Cyber Essentials Plus Certified.</small>
                </li>
                <li
                  className="d-flex align-items-center gap-2 opacity-75"
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="600"
                  data-sal-easing="ease-in-out-sine"
                >
                  <div className="w-2 h-2 rounded-circle bg-white"></div>
                  <small className="text-white">UK / EU GPDR Compliant.</small>
                </li>
                <li
                  className="d-flex align-items-center gap-2 opacity-75"
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="700"
                  data-sal-easing="ease-in-out-sine"
                >
                  <div className="w-2 h-2 rounded-circle bg-white"></div>
                  <small className="text-white">Global, ISO-certified data centres</small>
                </li>
              </ul>
              <Link
                href="/contact/"
                className="btn btn-primary btn-arrow btn-arrow-xl btn-lg fs-14 fw-medium rounded mt-8"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <span className="btn-arrow__text">
                  Arrange a Call Back
                  <span className="btn-arrow__icon">
                    <i className="las la-arrow-right"></i>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHostingPartner;
