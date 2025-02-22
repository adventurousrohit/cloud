import React, { useContext } from "react";
import { CurrencyContext } from "../currencyconversion/Currencyconversion";

const VpsHostingHero = () => {
     const { convert, currency } = useContext(CurrencyContext);
  return (
    <>
      <section className="hero-4 position-relative z-1 bg-dark banner-security">
        <div className="container">
          <div className="row g-4 align-items-lg-center">
            <div className="col-lg-7 col-xl-6">
              <h1 className="mb-4 text-white">
                High-Performance{" "}
                <span className="text-success-new">Linux GPU Servers</span> for
                AI & Gaming at Unbeatable Prices
              </h1>
              <p className="max-text-52 mb-6 fw-medium text-white">
                Power up the Linux GPU servers from CloudMinister to grow your
                company! Experience the lightning-fast speed, unparalleled
                performance, and state-of-the-art gear that will push you to new
                heights. Today, discover the wonders of computing!
              </p>
              <div className="hstack gap-4 flex-wrap mb-10">
                <a
                  href="https://manage.cloudminister.com/store/gpu-server//linux-gpu-a30-02"
                  target="_blank"
                  className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded"
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
                  <span className="fw-normal fs-16">/mo</span>
                </h4>
                {/* <Link href="/price" className="btn btn-light btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded">
                            <span className="btn-arrow__text">
                                View All Plan
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link> */}
              </div>
            </div>
            <div className="col-lg-5 col-xl-6">
              <div className="text-center">
                <img
                  src="/img/Linux GPU Server.png"
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
