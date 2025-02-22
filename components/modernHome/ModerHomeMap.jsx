
import { useState } from "react";

import { mapLocations } from "../../utils/data";
import Link from "next/link";
const ModerHomeMap = () => {
    
  const [activeCountry, setActiveCountry] = useState('London, UK');
  const handleMouseEnter = (country) => {
    setActiveCountry(country);
  };
  const [isOpen,setOpen]=useState(false)
  return (
    <>
       <section className="pt-120 pb-120 gradient-bg-2">
        <div className="container">
            <div className="row align-items-center g-4">
                <div className="col-xl-7">
                <div className="hero-1__map">
          <img
            className="img-fluid hero-1__map-img"
            src="/img/shape/hero-map.png"
            alt="Map"
          />
          {mapLocations.map((location) => (
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
                      <img
                        src={location.flag}
                        alt={location.text}
                        className="img-fluid"
                      />
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
          ))}
        </div>
                </div>
                <div className="col-xl-5">
                    <h3 className="text-white mb-3">Data Centers within the
                        Reach your Visitors</h3>
                    <p className="text-white mb-8">Across various domains, including software development, business strateg manufacturing, and service delivery. Here’s a comprehensive look at what adaptability large-scale operations.</p>
                    <div className="d-flex" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="map-8-tab d-inline-block">
                            <ul className="nav nav-pills" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="partner-tab-nev d-inline-block text-decoration-none text-white fw-semibold px-3 pb-2 active" href="#" data-bs-toggle="pill" data-bs-target="#partner-1" aria-selected="true" role="tab">
                                        All Locations
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="partner-tab-nev d-inline-block text-decoration-none text-white fw-semibold px-3 pb-2" href="#" data-bs-toggle="pill" data-bs-target="#partner-2" aria-selected="true" role="tab">
                                        United States
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="partner-tab-nev d-inline-block text-decoration-none text-white fw-semibold px-3 pb-2" href="#" data-bs-toggle="pill" data-bs-target="#partner-3" aria-selected="true" role="tab">
                                        Europe
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="partner-tab-nev d-inline-block text-decoration-none text-white fw-semibold px-3 pb-2" href="#" data-bs-toggle="pill" data-bs-target="#partner-4" aria-selected="true" role="tab">
                                        Australia
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content mt-8" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="tab-pane fade show active" id="partner-1" role="tabpanel">
                            <div className="d-flex align-items-center gap-6">
                                <img src="/img/shape/map-8-arrow.png" alt="iocn" className="img-fluid d-none d-sm-block"/>
                                <div>
                                    <h6 className="text-white mb-6">Modern & Green Energy Data Centers</h6>
                                    <ul className="list-unstyled d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center gap-2">
                                            <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center text-white"><i className="las la-check"></i></div>
                                            <p className="text-white mb-0">Web Hosting</p>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center text-white"><i className="las la-check"></i></div>
                                            <p className="text-white mb-0">Website Builder</p>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center text-white"><i className="las la-check"></i></div>
                                            <p className="text-white mb-0">WordPress Hosting</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link href="/price" className="btn btn-primary border-0 bg-warning btn-arrow btn-arrow-md fs-14 fw-medium rounded mt-6">
                                <span className="btn-arrow__text">
                                    More About Us
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </div>
                        <div className="tab-pane fade" id="partner-2" role="tabpanel">
                            <div className="d-flex align-items-center gap-6">
                                <img src="/img/shape/map-8-arrow.png" alt="iocn" className="img-fluid d-none d-sm-block"/>
                                <div>
                                    <h6 className="text-white mb-6">Modern & Green Energy Data Centers</h6>
                                    <ul className="list-unstyled d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center gap-2">
                                            <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center text-white"><i className="las la-check"></i></div>
                                            <p className="text-white mb-0">Web Hosting</p>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center text-white"><i className="las la-check"></i></div>
                                            <p className="text-white mb-0">Website Builder</p>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center text-white"><i className="las la-check"></i></div>
                                            <p className="text-white mb-0">WordPress Hosting</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link href="/price" className="btn btn-primary border-0 bg-warning btn-arrow btn-arrow-md fs-14 fw-medium rounded mt-6">
                                <span className="btn-arrow__text">
                                    More About Us
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </div>
                        <div className="tab-pane fade" id="partner-3" role="tabpanel">
                            <div className="d-flex align-items-center gap-6">
                                <img src="/img/shape/map-8-arrow.png" alt="iocn" className="img-fluid d-none d-sm-block"/>
                                <div>
                                    <h6 className="text-white mb-6">Modern & Green Energy Data Centers</h6>
                                    <ul className="list-unstyled d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center gap-2">
                                            <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center text-white"><i className="las la-check"></i></div>
                                            <p className="text-white mb-0">Web Hosting</p>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center text-white"><i className="las la-check"></i></div>
                                            <p className="text-white mb-0">Website Builder</p>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center text-white"><i className="las la-check"></i></div>
                                            <p className="text-white mb-0">WordPress Hosting</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link href="/price" className="btn btn-primary border-0 bg-warning btn-arrow btn-arrow-md fs-14 fw-medium rounded mt-6">
                                <span className="btn-arrow__text">
                                    More About Us
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </div>
                        <div className="tab-pane fade" id="partner-4" role="tabpanel">
                            <div className="d-flex align-items-center gap-6">
                                <img src="/img/shape/map-8-arrow.png" alt="iocn" className="img-fluid d-none d-sm-block"/>
                                <div>
                                    <h6 className="text-white mb-6">Modern & Green Energy Data Centers</h6>
                                    <ul className="list-unstyled d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center gap-2">
                                            <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center text-white"><i className="las la-check"></i></div>
                                            <p className="text-white mb-0">Web Hosting</p>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center text-white"><i className="las la-check"></i></div>
                                            <p className="text-white mb-0">Website Builder</p>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center text-white"><i className="las la-check"></i></div>
                                            <p className="text-white mb-0">WordPress Hosting</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link href="/price" className="btn btn-primary border-0 bg-warning btn-arrow btn-arrow-md fs-14 fw-medium rounded mt-6">
                                <span className="btn-arrow__text">
                                    More About Us
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 pt-10 border-top border-white border-opacity-25">
                <div className="row g-4">
                    <div className="col-md-6 col-xl-3">
                        <div className="text-center">
                            <h4 className="text-white mb-3">120+ Countries</h4>
                            <p className="text-white fs-18 fw-medium">We serve customers in.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="text-center">
                            <h4 className="text-white mb-3">99.9% Uptime</h4>
                            <p className="text-white fs-18 fw-medium">SLA for VMs & Hybrid Servers.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="text-center">
                            <h4 className="text-white mb-3">4 Datacenters</h4>
                            <p className="text-white fs-18 fw-medium">World class facilities.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="text-center">
                            <h4 className="text-white mb-3"> 250k VMs</h4>
                            <p className="text-white fs-18 fw-medium">Launched over time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default ModerHomeMap
