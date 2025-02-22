import React, { useContext } from "react";
import { CurrencyContext } from "../currencyconversion/Currencyconversion";// dedicatedwindowshosting
const SharedHostingHero = () => {
          const { convert, currency } = useContext(CurrencyContext);
  return (
    <>
          <section className="banner banner-security bg-dark control-panel-banner">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-xl-6"> 
                    <h1 className="text-white mb-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    Get High Performance with <span className="text-success-new">Windows Dedicated</span>  Server Hosting
                        
                    </h1>
                    <p className="mb-8 text-white max-text-72 text-opacity-75" data-sal="slide-up" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    Experience peak reliability with our customizable Windows Dedicated Server Hosting. Benefit from real-time monitoring, top-tier security, and 100% uptime. Empower your business with efficient, robust servers for a seamless, high-performance hosting experience.
                    </p>
                    <div className="d-flex align-items-center gap-5 flex-wrap" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <a href="https://manage.cloudminister.com/store/managed-dedicated-server/bronze-windows-dedicated-server" className="btn btn-primary btn-arrow btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded" target="_blank">
                            <span className="btn-arrow__text">
                                Get Started
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </a>
                        <h4 className="text-white mb-0">   {currency === "INR" ? "₹" : "$"} {convert(9775.00, "INR", currency)} <span className="fw-normal fs-16">/mo</span></h4>
                    </div>
                    {/* <span className="d-block fs-14 text-white text-opacity-75 mt-2" data-sal="slide-up" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        Worry-free - 45 Days Money Back
                    </span> */}
                </div>
                <div className="col-lg-5 col-xl-6 text-lg-end">
                    <img src="/img/Windows Dedicated Server.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default SharedHostingHero
