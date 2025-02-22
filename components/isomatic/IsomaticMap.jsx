import { useState } from "react";
import { mapLocations } from "../../utils/data";

const IsomaticMap = () => {
  const [activeCountry, setActiveCountry] = useState("London, UK");

  const handleMouseEnter = (country) => {
    setActiveCountry(country);
  };

  return (
    <section className="pt-120 pb-120">
      <div className="pb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div
                className="d-flex justify-content-center mb-3"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <div className="w-30 h-30 d-flex align-items-center justify-content-center flex-column bg-white shadow-lg rounded-circle text-center p-2">
                  <h4 className="text-primary">
                    <span className="counter">64</span>+
                  </h4>
                  <span className="d-block fs-12 text-primary fw-semibold">
                    Our Availability
                  </span>
                </div>
              </div>
              <h2
                className="mb-4 text-center"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Build Locally, Launch Worldwide
              </h2>
              <p
                className="mb-0 text-center max-text-72 mx-auto"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Hostcity offers the largest worldwide network, enabling you to
                spin up and easily scale a low latency infrastructure solution
                no matter where you or your customers may be!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="text-center"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <div className="data-center">
                  <img
                    className="img-fluid data-center__map"
                    src="/img/shape/map-img-1.png"
                    alt="image"
                  />
                  {mapLocations?.map((location, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => handleMouseEnter(location.text)}
                      className={`data-center__location data-center__location-${location.id} ${
                        activeCountry === location.text ? "active" : ""
                      } `}
                    >
                      <div className="data-center__pin">
                        <div className="data-center__tooltip">
                          <div className="data-center__btn">
                            <div className="data-center__btn-img">
                                 <span className={`fi fi-${location.flag} img-fluid `}></span>
                            </div>
                            <div className="data-center__btn-text">
                              {location.text}
                            </div>
                          </div>
                          <div className="data-center__btn-arrow">
                            <img
                              src="/img/shape/location-arrow.png"
                              alt="image"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          <div
            className="col-md-6 col-lg-4 col-xl-3"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="300"
            data-sal-easing="ease-in-out-sine"
          >
            <div className="text-center">
              <h5>120+ Countries</h5>
              <p className="mb-0 fw-semibold">We serve customers in.</p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-3"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="400"
            data-sal-easing="ease-in-out-sine"
          >
            <div className="text-center">
              <h5>99.9% Uptime</h5>
              <p className="mb-0 fw-semibold">SLA for VMs & Hybrid Servers.</p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-3"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="500"
            data-sal-easing="ease-in-out-sine"
          >
            <div className="text-center">
              <h5>4 Datacenters</h5>
              <p className="mb-0 fw-semibold">World class facilities.</p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-3"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="600"
            data-sal-easing="ease-in-out-sine"
          >
            <div className="text-center">
              <h5>250k VMs</h5>
              <p className="mb-0 fw-semibold">Launched over time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsomaticMap;
