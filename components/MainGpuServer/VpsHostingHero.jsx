import React, { useContext } from "react";
import { CurrencyContext } from "../currencyconversion/Currencyconversion";
const VpsHostingHero = () => {
        const { convert, currency } = useContext(CurrencyContext);
  return (
    <>
      <section className="hero-4 position-relative z-1 bg-dark banner-security">
        <div className="container">
          <div className="row g-4 align-items-lg-center">
            <div className="col-lg-7 col-xl-6 ">
              <h1 className="mb-4 text-white">
                Best <span className="text-success-new">GPU Servers</span> in
                India for AI, ML & Gaming at affordable prices
              </h1>
              <p className="max-text-52 mb-6 fw-medium text-white">
                Whether it is about AI, machine learning, or rendering
                streamlined GPU management makes sure that your servers provide
                the best efficiency, freeing you to focus on innovation and not
                technical roadblocks. Take control and make your productivity
                soar today!
              </p>
              <div
                className="d-flex align-items-center gap-5 flex-wrap"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <a
                  href="https://manage.cloudminister.com/store/gpu-server//linux-gpu-a30-02"
                  className="btn btn-primary btn-arrow btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded"
                >
                  <span className="btn-arrow__text">
                    Get Started
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </a>
                <h4 className="text-white mb-0">
                {currency === "INR" ? "₹" : "$"} {convert(50000.00, "INR", currency)}
                 <span className="fw-normal fs-16">
                    /mo</span>
                </h4>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6">
              <div className="text-center">
                <img
                  src="/img/GPU Server.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VpsHostingHero;
