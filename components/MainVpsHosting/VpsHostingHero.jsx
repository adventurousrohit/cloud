import React, { useContext } from "react";
import { CurrencyContext } from "../currencyconversion/Currencyconversion";

const VpsHostingHero = () => {
      const { convert, currency } = useContext(CurrencyContext);
  return (
    <>
      <section className="hero-4 position-relative z-1 bg-dark banner-security">
        <div className="container">
          <div className="row g-4 align-items-lg-center mb-20">
            <div className="col-lg-7 col-xl-6">
              <h1 className="mb-4 text-white">
                Unlock Seamless Performance with Our Advanced{" "}
                <span className="text-success-new"> VPS Hosting Solutions</span>
              </h1>
              <p className="max-text-52 mb-6 fw-medium text-white">
                Supercharge your website with our high-performance VPS hosting,
                offering unmatched speed, security, flexibility, and control for
                peak efficiency in today’s fast-paced digital world.
              </p>

              <div
                className="d-flex align-items-center gap-5 flex-wrap"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <a
                  href="https://manage.cloudminister.com/store/cloud-vps-india-new/cloud-vps-in-4"
                  className="btn btn-primary btn-arrow btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded"
                >
                  <a
                    href="https://manage.cloudminister.com/store/linux-shared-hosting//startup-shared-hosting"
                    target="_blank"
                    className="btn-arrow__text text-white text-decoration-none"
                  >
                    Get Started
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </a>
                </a>
                <h4 className="text-white mb-0">
                  {currency === "INR" ? "₹" : "$"} {convert(1800.00, "INR", currency)}
                  <span className="fw-normal fs-16">/mo</span>
                </h4>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6">
              <div className="text-center">
                <img
                  src="/img/VPS Hosting.png"
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
