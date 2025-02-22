import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const VpsHostingPlan = () => {
    const [value, setValue] = useState([1, 5]); // Set the initial value in the range of 1 to 5
  console.log('value..',value)
    const handleInput = (val) => {
      setValue(val); // Update the state with the current slider value
    };
  return (
    <>
     <div className="pt-120 pb-120 bg-dark">
        <div className="pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="text-white">
                                Managed VPS Hosting Plans
                            </h2>
                            <p className="mb-0 text-white max-text-52 mx-auto text-opacity-75">
                                Take your online presence to the next level with our all-inclusive shared hosting plans,
                                crafted for faster page load times!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                    <div className="row g-4">
                        <div className="col-12" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <div className="card bg-dark vps-plan-card border-light border-opacity-10 rounded-3 transition">
                                <div className="card-body p-sm-6 p-md-8">
                                    <div className="hstack flex-wrap gap-2 justify-content-between mb-3">
                                        <h6 className="mb-0 fs-18 text-white">
                                            Starter Plan
                                        </h6>
                                        <h6 className="fs-16 fw-normal mb-0 text-white">
                                            Starting at:
                                            <span className="text-primary fw-bold">$4/mo</span>
                                        </h6>
                                    </div>
                                    <p className="fs-14 text-white text-opacity-75 mb-6 max-text-40">
                                        Hostcity is the strategic partner for your online journey. We
                                        are of the way. you every step of the way.
                                    </p>
                                    <div className="row g-2">
                                        <div className="col-md-6">
                                            <ul className="m-0">
                                                <li className="text-white text-opacity-75 mb-3 fs-14">Intel E3-1240 V2</li>
                                                <li className="text-white text-opacity-75 fs-14">Gbit Port Speed</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="m-0">
                                                <li className="text-white text-opacity-75 fs-14 mb-3">8 GB RAM</li>
                                                <li className="text-white text-opacity-75 fs-14">480 GB SSD</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <div className="card bg-dark vps-plan-card border-light border-opacity-10 rounded-3 transition">
                                <div className="card-body p-sm-6 p-md-8">
                                    <div className="hstack flex-wrap gap-2 justify-content-between mb-3">
                                        <h6 className="mb-0 fs-18 text-white">
                                            Popular Plan
                                        </h6>
                                        <h6 className="fs-16 fw-normal mb-0 text-white">
                                            Starting at:
                                            <span className="text-primary fw-bold">$10/mo</span>
                                        </h6>
                                    </div>
                                    <p className="fs-14 text-white text-opacity-75 mb-6 max-text-40">
                                        Hostcity is the strategic partner for your online journey. We
                                        are of the way. you every step of the way.
                                    </p>
                                    <div className="row g-2">
                                        <div className="col-md-6">
                                            <ul className="m-0">
                                                <li className="text-white text-opacity-75 mb-3 fs-14">Intel E3-1240 V2</li>
                                                <li className="text-white text-opacity-75 fs-14">Gbit Port Speed</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="m-0">
                                                <li className="text-white text-opacity-75 fs-14 mb-3">8 GB RAM</li>
                                                <li className="text-white text-opacity-75 fs-14">480 GB SSD</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <div className="card bg-dark vps-plan-card border-light border-opacity-10 rounded-3 transition">
                                <div className="card-body p-sm-6 p-md-8">
                                    <div className="hstack flex-wrap gap-2 justify-content-between mb-3">
                                        <h6 className="mb-0 fs-18 text-white">
                                            Enterprise Plan
                                        </h6>
                                        <h6 className="fs-16 fw-normal mb-0 text-white">
                                            Starting at:
                                            <span className="text-primary fw-bold">$14/mo</span>
                                        </h6>
                                    </div>
                                    <p className="fs-14 text-white text-opacity-75 mb-6 max-text-40">
                                        Hostcity is the strategic partner for your online journey. We
                                        are of the way. you every step of the way.
                                    </p>
                                    <div className="row g-2">
                                        <div className="col-md-6">
                                            <ul className="m-0">
                                                <li className="text-white text-opacity-75 mb-3 fs-14">Intel E3-1240 V2</li>
                                                <li className="text-white text-opacity-75 fs-14">Gbit Port Speed</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="m-0">
                                                <li className="text-white text-opacity-75 fs-14 mb-3">8 GB RAM</li>
                                                <li className="text-white text-opacity-75 fs-14">480 GB SSD</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="ps-xl-12">
                        <h5 className="mb-4 text-white">
                            Pricing that Works for
                            your Need
                        </h5>
                        <p className="mb-8 text-white text-opacity-75">
                            Managed Web Hosting Solutions bringing the success of your next
                            online mission! Starting at <a href="#" className="text-decoration-none fw-semibold">$2.49 including</a>
                        </p>
                        <h6 className="mb-15 text-white fw-bold">
                            Processor
                        </h6>
                        <div className="vps-slider vps-slider--processor mb-12">
                        <RangeSlider
        min={1} // Minimum value
        max={5} // Maximum value
        step={1} // Step of 1 for discrete values
        value={value} // Controlled value for the slider
        onInput={handleInput} // Update value when input changes
      />
    </div>
                        <div className="vps-slider-details bg-primary bg-opacity-5 rounded-4 p-4 p-xl-6">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-6 col-lg-12 col-xxl-6">
                                    <div className="p-4 p-xl-6 rounded-4 text-center vps-slider-details__info">
                                        <h5 className="text-white">
                                            Estimated Prices
                                        </h5>
                                        <p className="mb-6 fs-14 text-white text-opacity-75">
                                            Managed Web Hosting Solutions
                                            online mission! Starting
                                        </p>
                                        <h3 className="mb-4 text-white">
                                            $14.06
                                        </h3>
                                        <a href="#" className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded-1 w-100">
                                            <span className="btn-arrow__text">
                                                Order Now
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12 col-xxl-6">
                                    <h6 className="mb-4 text-white">
                                        What’s Included Package
                                    </h6>
                                    <ul className="list-unstyled m-0 p-0">
                                        <li className="d-flex align-items-center gap-2 mb-3">
                                            <span
                                                className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                                                <i className="las la-check"></i>
                                            </span>
                                            <span className="d-block text-white text-opacity-75 fs-14">
                                                Core <span className="d-inline-block config-info-1"></span>
                                            </span>
                                        </li>

                                        <li className="d-flex align-items-center gap-2 mb-3">
                                            <span
                                                className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                                                <i className="las la-check"></i>
                                            </span>
                                            <span className="d-block text-white text-opacity-75 fs-14">
                                                <span className="d-inline-block config-info-2"></span>
                                            GB RAM
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2 mb-3">
                                            <span
                                                className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                                                <i className="las la-check"></i>
                                            </span>
                                            <span className="d-block text-white text-opacity-75 fs-14">
                                                <span className="d-inline-block config-info-3"></span> GB SSD Storage
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2 mb-3">
                                            <span
                                                className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                                                <i className="las la-check"></i>
                                            </span>
                                            <span className="d-block text-white text-opacity-75 fs-14">
                                                24/7 Uptime
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <span
                                                className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                                                <i className="las la-check"></i>
                                            </span>
                                            <span className="d-block text-white text-opacity-75 fs-14">
                                                360 Support
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
      
    
  )
};

export default VpsHostingPlan
