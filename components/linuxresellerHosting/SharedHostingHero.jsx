import React, { useContext } from "react";
import { CurrencyContext } from "../currencyconversion/Currencyconversion";
const SharedHostingHero = () => {
      const { convert, currency } = useContext(CurrencyContext);
  return (
    <>
      <section className="banner banner-security bg-dark control-panel-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6">
              <h1
                className="text-white mb-4"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Scale Your Hosting Business with Premium{" "}
                <span className="text-success-new">
                  {" "}
                  Reseller Linux Hosting{" "}
                </span>{" "}
                Plans!
              </h1>
              <p
                className="mb-8 text-white max-text-72 text-opacity-75"
                data-sal="slide-up"
                data-sal-duration="1500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Reseller Linux hosting offers scalable, reliable, and viable
                solutions, making it the perfect choice for growing providers
                looking to expand their hosting services efficiently.
              </p>
              <div
                className="d-flex align-items-center gap-5 flex-wrap"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <a
                  href="#"
                  className="btn btn-primary btn-arrow btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded"
                >
                  <a
                    href="https://manage.cloudminister.com/store/linux-reseller-hosting//mini-reseller-hosting"
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
                  {currency === "INR" ? "₹" : "$"} {convert(378.00, "INR", currency)}
                  <span className="fw-normal fs-16">/mo</span>
                </h4>
              </div>
              {/* <span className="d-block fs-14 text-white text-opacity-75 mt-2" data-sal="slide-up" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        Worry-free - 45 Days Money Back
                    </span> */}
            </div>
            <div className="col-lg-5 col-xl-6 text-lg-end">
              <img
                src="/img/Linux Reseller Hosting.png"
                alt="image"
                className="img-fluid"
                data-sal="fade"
                data-sal-duration="1500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SharedHostingHero;
