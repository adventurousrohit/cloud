import React from 'react';
import Link from "next/link";// Assuming you are using react-router for navigation

const DataCenterCta = () => {
  return (
    <section className="mt-n10">
      <div className="container">
        <div className="cta-wrapper-one pt-60 pb-60 px-6 rounded-3">
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-9">
              <div className="d-flex justify-content-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                <div className="px-3 py-1 border border-primary rounded d-inline-flex align-items-center gap-2">
                  <div className="w-2 h-2 rounded-circle bg-primary"></div>
                  <small className="text-primary fw-bold">Starts at ₹ 525/mo</small>
                </div>
              </div>
              <div className="text-center mt-5">
                <h2 className="mb-5" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                Power Up Your Website with Cloud Hosting
                </h2>
                <p className="mb-8" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                Whether you're a startup or an enterprise, cloud hosting gives you the freedom to grow effortlessly. Join the future of web hosting!
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap flex-md-nowrap" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                <Link href="/cloud-hosting/" className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded">
                  <span className="btn-arrow__text">
                  Get Started
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </Link>
                <a href="https://wa.me/+918233040013"
                             target="_blank"  className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded">
                  <span className="btn-arrow__text">
                  Talk to Expert
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCenterCta;
