import React, { useContext } from "react";
import { CurrencyContext } from "../currencyconversion/Currencyconversion";

const VpsHostingHero = () => {
        const { convert, currency } = useContext(CurrencyContext);
  return (
    <>
       <section className="hero-4 position-relative z-1 bg-dark banner-security">
        <div className="container">
            <div className="row g-4 align-items-lg-center mb-20" >
                <div className="col-lg-7 col-xl-6">
                    <h1 className="mb-4 text-white">
                 
              <span className="text-success-new">Linux VPS Hosting : </span>  The Ultimate Choice for Speed, Flexibility, and Security
                    </h1>
                    <p className="max-text-52 mb-6 fw-medium text-white">
                    Linux VPS Hosting You Can Trust! Boost your website’s performance with our premium Linux VPS servers built for businesses ready to succeed.
                    </p>
                  
                    <div className="d-flex align-items-center gap-5 flex-wrap" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <a href="https://manage.cloudminister.com/store/cloud-vps-india-new/cloud-vps-in-4" className="btn btn-primary btn-arrow btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded" target="_blank">
                            <span className="btn-arrow__text">
                                Get Started
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </a>
                        <h4 className="text-white mb-0">
                            {currency === "INR" ? "₹" : "$"} {convert(1800.00, "INR", currency)}
                            <span className="fw-normal fs-16">/mo</span></h4>
                    </div>
                   
                </div>
                <div className="col-lg-5 col-xl-6">
                    <div className="text-center">
                        <img src="/img/Linux VPS Hosting.png" alt="image" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default VpsHostingHero
