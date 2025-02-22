import React from 'react';

const IsomaticAbout = () => {
  return (
    <div className="pt-60 pb-60">
      {/* Section 1 */}
      <div className="pt-60 pb-40">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div
              className="col-lg-6"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <img
                src="/img/about-img-1.png"
                alt="Make Your Website Faster with Open LiteSpeed"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-8 ps-xxl-12">
                <h3
                  className="mb-6"
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  Make Your Website Faster with Open LiteSpeed
                </h3>
                <p
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  The Loading Speed of every website is undoubtedly one of the
                  leading SEO ranking factors today. With that in mind, we
                  meticulously optimized
                </p>
                <p
                  className="mb-6"
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  Our Web Hosting plans to meet the Loading Speed requirements
                  of every website out-of-the-box. Of course, that is not always
                  optimal due to the website optimization for every website that
                  we host.
                </p>
                <a
                  href="#"
                  className="text-decoration-none d-inline-flex align-items-center gap-2 px-0 fs-14 text-primary fw-semibold btn-arrow btn-arrow-sm"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  <span className="d-inline-block btn-arrow__text">
                    Check Speed Now
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="pb-60">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="pe-lg-8 pe-xxl-12">
                <h3
                  className="mb-4"
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  Dependable Web Security Solutions You Can Trust
                </h3>
                <p
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  The Loading Speed of every website is undoubtedly one of the
                  leading SEO ranking factors
                </p>
                <p
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  Our Web Hosting plans to meet the Loading Speed requirements
                  of every website out-of-the-box. Of course, that is not always
                  optimal due to the website optimization for every website that
                  we host.
                </p>
                <a
                  href="#"
                  className="text-decoration-none d-inline-flex align-items-center gap-2 px-0 fs-14 text-primary fw-semibold btn-arrow btn-arrow-sm"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  <span className="d-inline-block btn-arrow__text">
                    Check Speed Now
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <img
                src="/img/about-img-2.png"
                alt="Dependable Web Security Solutions"
                className="img-fluid"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsomaticAbout;
