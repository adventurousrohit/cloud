import React from 'react';
import { Link } from 'react-router-dom';

const FooterCta = () => {
  return (
    <div className="footer-cta">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div
              className="bg-primary pt-60 pb-60 px-6 px-md-12 rounded-3 overflow-hidden position-relative z-1 text-center"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <div className="row justify-content-center">
                <div className="col-md-8 col-xl-7 col-xxl-6">
                  <h4 className="text-white mb-4">
                  Limited-Time Offer!
                    <br />
                    Claim Your VPS Hosting Now
                  </h4>
                  <a target='_blank'
                    href="https://manage.cloudminister.com/store/cloud-vps-india-new/cloud-vps-in-8"
                    className="btn btn-light btn-arrow btn-arrow-xl btn-lg fs-14 fw-semibold rounded"
                  >
                    <span className="btn-arrow__text">
                    Get Started
                      <span className="btn-arrow__icon">
                        <i className="las la-arrow-right"></i>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <img
                src="/img/footer-cta-left.png"
                alt="Decorative left"
                className="img-fluid d-none d-md-block position-absolute top-0 start-0 z-n1 opacity-75"
              />
              <img
                src="/img/footer-cta-right.png"
                alt="Decorative right"
                className="img-fluid d-none d-md-block position-absolute end-0 top-0 z-n1 opacity-75"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCta;