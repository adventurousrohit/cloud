import React from "react";
import { FaCheck, FaArrowRight  } from "react-icons/fa6";
import Link from "next/link";

const DataCenterWordpressHosting = () => {
  return (
    <section className="pt-60 pb-60">
      <div className="container">
        <div className="row align-items-center g-6">
          <div className="col-lg-6">
          <img src="/img/webh.png" alt="image" className="img-fluid" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine"/>
          </div>
          <div
            className="col-lg-6"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="300"
            data-sal-easing="ease-in-out-sine"
          >
            <span className="text-primary fw-semibold fs-16 mb-2">
            Cloud Web Hosting
            </span>
            <h3 className="mb-6" style={{fontSize:"30px"}}>
              Build your website with Fully Managed Cloud Web Hosting Services to Level Up Your Website
            </h3>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              <li className="d-flex align-items-center gap-3">
                <div className="w-4 h-4 bg-primary rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                  <FaCheck />
                </div>
                <p className="fw-medium mb-0">
                Fully Managed Server
                </p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <div className="w-4 h-4 bg-primary rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                  <FaCheck />
                </div>
                <p className="fw-medium mb-0">
                99.99% Uptime Guarantee
                </p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <div className="w-4 h-4 bg-primary rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                  <FaCheck />
                </div>
                <p className="fw-medium mb-0">Free Server and Website Migration</p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <div className="w-4 h-4 bg-primary rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                  <FaCheck />
                </div>
                <p className="fw-medium mb-0">
                Free Inclusive Backups
                </p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <div className="w-4 h-4 bg-primary rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                  <FaCheck />
                </div>
                <p className="fw-medium mb-0">
                Privacy and Security
                </p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <div className="w-4 h-4 bg-primary rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                  <FaCheck />
                </div>
                <p className="fw-medium mb-0">
                Employee Owned
                </p>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-5 flex-wrap mt-10">
              <Link
                href="/wp-hosting"
                className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded"
              >
                <span className="btn-arrow__text">
                  Get Started
                  <span className="btn-arrow__icon">
                    <i className="d-inline-block">
                      <FaArrowRight className="w_14 h_14" />
                    </i>
                  </span>
                </span>
              </Link>
              {/* <div>
                <p className="fs-14 mb-0">Starting at:</p>
                <h4>
                  $24.09 <span className="fs-16">/mo</span>
                </h4>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCenterWordpressHosting;
