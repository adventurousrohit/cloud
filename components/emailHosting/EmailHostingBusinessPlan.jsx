import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmailHostingBusinessPlan = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isYearlyX, setIsYearlyX] = useState(false);

  const toggleYearly = () => setIsYearly(!isYearly);
  const toggleYearlyX = () => setIsYearlyX(!isYearlyX);

  return (
    <div className="pt-120 pb-120">
      <div className="pb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <h2
                className="text-center mb-0"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Purchase Your Business Email Plan
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4 g-lg-0 align-items-center justify-content-center">
          <div
            className="col-md-6 col-lg-5 col-xl-4"
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease-in-out-sine"
          >
            <div className="card border-0 rounded-4 bg-primary popular-price-card">
              <div className="card-body px-md-8 px-xl-12 py-md-12">
                <div className="d-flex gap-2 align-items-center justify-content-between flex-wrap">
                  <h5 className="text-white m-0">Premium</h5>
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <small className="fw-medium text-white">Yearly</small>
                    <div className="form-check form-switch toggle-switch">
                      <input
                        className="form-check-input pricing-toggle"
                        type="checkbox"
                        role="switch"
                        checked={isYearly}
                        onChange={toggleYearly}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="d-inline-block fs-14 text-white">$49.99</span>
                    <span className="badge text-bg-light rounded-pill">$49.99</span>
                  </div>
                  <div className="monthly-price">
                  
                    {
                        isYearly ?  <h2 className="text-white">
                        $15 <span className="fs-14 fw-normal">/monthly</span>
                      </h2> :<h2 className="text-white">
                        $160<span className="fs-14 fw-normal">/yearly</span>
                      </h2>
                    }
                  </div>
                 
                  <h6 className="mt-2 mb-0 text-white fs-18 fw-semibold">Price per mail box</h6>
                </div>

                <div className="my-8">
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                    {[
                      'Standard Performance',
                      '100 Websites',
                      '100 GB SSD Storage',
                      'Unlimited Bandwidth',
                      'Unlimited Free SSL',
                      'Warranty 10,000'
                    ].map((item, index) => (
                      <li key={index} className="d-flex align-items-center gap-3">
                        <div className="w-5 h-5 flex-shrink-0 bg-success rounded-circle fs-10 text-white d-flex align-items-center justify-content-center">
                          <i className="las la-check"></i>
                        </div>
                        <small className="text-white">{item}</small>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-semibold rounded mt-6"
                  href="/price"
                >
                  <span className="btn-arrow__text">
                    Buy Now
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-5 col-xl-4"
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease-in-out-sine"
          >
            <div className="card border-0 rounded-4">
              <div className="card-body px-md-8 px-xl-12 py-md-12">
                <div className="d-flex gap-2 align-items-center justify-content-between flex-wrap">
                  <h5 className="m-0">Premium</h5>
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <small className="fw-medium">Yearly</small>
                    <div className="form-check form-switch toggle-switch">
                      <input
                        className="form-check-input pricing-toggle-x"
                        type="checkbox"
                        role="switch"
                        checked={isYearlyX}
                        onChange={toggleYearlyX}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="d-inline-block fs-14">$49.99</span>
                    <span className="badge bg-primary-subtle text-primary-emphasis rounded-pill">
                      $49.99
                    </span>
                  </div>
                  <div className="monthly-price-x">
                   
                    {
                        isYearlyX ?  <h2>
                        $15 <span className="fs-14 fw-normal">/monthly</span>
                      </h2> :<h2>
                      $160<span className="fs-14 fw-normal">/yearly</span>
                    </h2>
                    }
                  </div>
                 
                  <h6 className="mt-2 mb-0 fs-18 fw-semibold">Price per mail box</h6>
                </div>

                <div className="my-8">
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                    {[
                      'Standard Performance',
                      '100 Websites',
                      '100 GB SSD Storage',
                      'Unlimited Bandwidth'
                    ].map((item, index) => (
                      <li key={index} className="d-flex align-items-center gap-3">
                        <div className="w-5 h-5 flex-shrink-0 bg-success rounded-circle fs-10 text-white d-flex align-items-center justify-content-center">
                          <i className="las la-check"></i>
                        </div>
                        <small>{item}</small>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-semibold rounded mt-6"
                  href="/price"
                >
                  <span className="btn-arrow__text">
                    Buy Now
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailHostingBusinessPlan;
