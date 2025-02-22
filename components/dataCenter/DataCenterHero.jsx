"use client";
import { useState } from "react";
import Link from "next/link";

const DataCenterHero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="hero-1 pb-32 bg-dark position-relative z-1 overflow-hidden">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-10 col-xl-7">
              <div className="fs-14 text-white">
                <div
                  className="d-flex align-items-center gap-3"
                  data-sal="fade"
                  data-sal-duration="500"
                  data-sal-delay="200"
                  data-sal-easing="ease-in-out-sine"
                >
                  {/* <span>
                    <img src="/img/shape/bage-1.png" alt="" />
                  </span> */}
                  {/* <span>
                  Don't miss limited-time savings:
                    <span className="text-warning">Savings 15%</span> 
                  </span> */}
                </div>
              </div>
              <h1
                className="text-white mt-1"
                data-sal="fade"
                data-sal-duration="500"
                data-sal-delay="200"
                data-sal-easing="ease-in-out-sine"
              >
                Seamless Cloud Migration to{" "}
                <span className="text-warning d-inline-block">Akamai</span>
                {/* <span className="d-none d-md-inline-block position-relative z-1">
                  <img
                    src="/img/hero-title.png"
                    alt="image"
                    className="img-fluid"
                  />
                  <a
                    href="#"
                    type="submit"
                    onClick={()=>setOpen(true)}
                    className="video-btn popup-init position-absolute top-50 start-50 translate-middle"
                  >
                    <span className="w-7 h-7 rounded-circle d-flex align-items-center justify-content-center bg-primary">
                      <span className="text-white fs-14">
                        <i className="las la-play"></i>
                      </span>
                    </span>
                  </a>
                </span> */}
                {/* Web Hosting */}
              </h1>
              <p
                className="text-white mt-5 max-text-68 mb-8"
                data-sal="fade"
                data-sal-duration="500"
                data-sal-delay="200"
                data-sal-easing="ease-in-out-sine"
              >
                Upgrade to Akamai Cloud effortlessly with expert support.
                Enhance performance, security, and scalability for your
                business.
              </p>
              <p
                className="text-white mt-5 max-text-68 mb-8"
                data-sal="fade"
                data-sal-duration="500"
                data-sal-delay="200"
                data-sal-easing="ease-in-out-sine"
              >
                Save up to{" "}
                <span className="text-warning d-inline-block">50%</span> , Get
                Up to <span className="text-warning d-inline-block">5000$</span>{" "}
                Credits
              </p>
              <div
                className="d-flex align-items-center gap-6 flex-wrap"
                data-sal="fade"
                data-sal-duration="500"
                data-sal-delay="200"
                data-sal-easing="ease-in-out-sine"
              >
                <Link
                  href="/migrate-to-akamai/"
                  className="btn btn-primary btn-arrow btn-lg fs-14 fw-semibold rounded"
                >
                  <span className="btn-arrow__text">
                    Migrate to Akamai
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </Link>
                <a
                  href="https://wa.me/+918233040013"
                  target="_blank"
                  className="btn btn-light btn-arrow btn-lg fs-14 fw-semibold rounded transition"
                >
                  <span className="btn-arrow__text">
                    Speak to an Expert
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="position-relative z-1">
                {/* <div
          className="d-flex justify-content-xxl-end position-absolute end-0"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="ease-in-out-sine"
        >
          <div className=" border border-1 border-primary px-5 py-7 text-center rounded-circle" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            
          <small className="text-white fw-bold">Get upto </small>
            <small className="text-white fw-bold">
           {" "} <span className="counter text-warning fs-25" style={{fontSize:"2rem"}}>50% </span> </small>
            {" "} <small className="text-white fw-bold">off MOM</small>
       
            
          </div>
        </div> */}
                <div className="hero-1__map">
                  <img
                    className="img-fluid hero-1__map-img"
                    src="/img/Home page header.png"
                    alt="Map"
                  />
                  {/* {mapLocations.map((location) => (
            <div
              key={location.id}
              className={`hero-1__map-location hero-1__map-location--${location.id} ${
                activeCountry === location.text ? 'active' : ''
              }`}
              onMouseEnter={() => handleMouseEnter(location.text)}
             
            >
              <div className="hero-1__map-location-dot">
                <div className="hero-1__map-location-info">
                  <div className="hero-1__map-location-info-btn">
                    <div className="hero-1__map-location-info-btn-img">
                       <span className={`fi fi-${location.flag} img-fluid `}></span>
                    </div>
                    <div className="hero-1__map-location-info-btn-text">
                      {location.text}
                    </div>
                  </div>
                  <div className="hero-1__map-location-info-arrow">
                    <img
                      src="/img/shape/location-arrow.png"
                      alt="Arrow"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataCenterHero;
