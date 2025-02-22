import React from 'react';
import heroLogo1 from '/img/hero-logo-1.png';
import heroLogo2 from '/img/hero-logo-2.png';
import heroLogo3 from '/img/hero-logo-3.png';
import heroLogo4 from '/img/hero-logo-4.png';

const IsomaticBrand = () => {
  return (
    <div className="brand-section-1 bg-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <p className="mb-6 fw-semibold text-light text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              See how over 7,700+ Customers <a href="#" className="text-decoration-none">Help the world work</a>
            </p>
            <div className="d-flex justify-content-center align-items-center gap-6 flex-wrap flex-lg-nowrap">
              <a href="#" className="d-inline-block" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                <img src={heroLogo1} alt="Brand Logo 1" className="img-fluid transition opacity-50 brand-img" />
              </a>
              <a href="#" className="d-inline-block" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                <img src={heroLogo3} alt="Brand Logo 3" className="img-fluid transition opacity-50 brand-img" />
              </a>
              <a href="#" className="d-inline-block" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                <img src={heroLogo2} alt="Brand Logo 2" className="img-fluid transition opacity-50 brand-img" />
              </a>
              <a href="#" className="d-inline-block" data-sal="slide-up" data-sal-duration="500" data-sal-delay="600" data-sal-easing="ease-in-out-sine">
                <img src={heroLogo3} alt="Brand Logo 3" className="img-fluid transition opacity-50 brand-img" />
              </a>
              <a href="#" className="d-inline-block" data-sal="slide-up" data-sal-duration="500" data-sal-delay="700" data-sal-easing="ease-in-out-sine">
                <img src={heroLogo4} alt="Brand Logo 4" className="img-fluid transition opacity-50 brand-img" />
              </a>
              <a href="#" className="d-inline-block" data-sal="slide-up" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease-in-out-sine">
                <img src={heroLogo2} alt="Brand Logo 2" className="img-fluid transition opacity-50 brand-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsomaticBrand;
