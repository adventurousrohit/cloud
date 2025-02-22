import { useState } from "react";
import { mapLocations } from "../../utils/data";
const PremiumNetworkMap = () => {
    const [activeCountry, setActiveCountry] = useState('London, UK');
    const handleMouseEnter = (country) => {
      setActiveCountry(country);
    };
  return (
    <>
        <section className="bg-dark pt-120 pb-120">
        <div className="pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="d-flex justify-content-center mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <div className="w-30 h-30 d-flex align-items-center justify-content-center flex-column border border-primary rounded-circle text-center p-2 bg-primary bg-opacity-10">
                                <h4 className="text-primary"><span className="counter">64</span>+</h4>
                                <span className="d-block fs-12 text-primary fw-semibold">Our Availability</span>
                            </div>
                        </div>
                        <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="text-white mb-3">Build Locally, Launch Worldwide</h2>
                            <p className="text-white text-opacity-75 mb-0 max-text-60 mx-auto">
                                Enabling you to spin up and easily scale a low latency infrastructure solution no matter
                                where you or your customers may be!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="text-center">
                    <div className="data-center">
                            <img className="img-fluid data-center__map blend-mode-dodge" src="/img/shape/map-img-1.png" alt="image"/>
                               {
                                mapLocations.map((location,i)=> <div key={i} onMouseEnter={() => handleMouseEnter(location.text)} className={`data-center__location data-center__location-${location.id} ${
                                    activeCountry === location.text ? 'active' : ''
                                  } `}>
                                <div className="data-center__pin">
                                    <div className="data-center__tooltip">
                                        <div className="data-center__btn">
                                            <div className="data-center__btn-img">
                                                <img  src={location.flag}
                        alt={location.text}  className="img-fluid"/>
                                            </div>
                                            <div className="data-center__btn-text">
                                            {location.text}
                                            </div>
                                        </div>
                                        <div className="data-center__btn-arrow">
                                            <img src="/img/shape/location-arrow.png" alt="image" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                               }
                                
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default PremiumNetworkMap
