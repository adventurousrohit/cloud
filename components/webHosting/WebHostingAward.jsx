import React from 'react';

const WebHostingAward = () => {
  return (
    <section className="pt-40 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center">
              <h5
                className="mb-2"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Awards & Recognition
              </h5>
              <p
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Reviewed by thousands of customers, Hostcity stands out as one of the most positively reviewed hosts!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <div className="card">
                <div className="card-body p-xl-8">
                  <div className="hstack gap-3 mb-4">
                    <span className="d-inline-block flex-shrink-0">
                      <img src="/img/award-1.png" alt="Leader/High Performer Badges" className="img-fluid" />
                    </span>
                    <h6 className="mb-0 flex-grow-1">
                      Leader/High Performer Badges
                    </h6>
                  </div>
                  <p className="mb-0">
                    Awarded to all products in the Leaders or High Performers Quadrant of the G2 Grid at the quarterly review deadline.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="400"
              data-sal-easing="ease-in-out-sine"
            >
              <div className="card">
                <div className="card-body p-xl-8">
                  <div className="hstack gap-3 mb-4">
                    <span className="d-inline-block flex-shrink-0">
                      <img src="/img/award-2.png" alt="Best Usability/Business Badges" className="img-fluid" />
                    </span>
                    <h6 className="mb-0 flex-grow-1">
                      Best Usability/Business Badges
                    </h6>
                  </div>
                  <p className="mb-0">
                    Badges awarded to products featured in G2’s Leaders/High Performers Quadrant for Small Business Enterprise categories.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="500"
              data-sal-easing="ease-in-out-sine"
            >
              <div className="card">
                <div className="card-body p-xl-8">
                  <div className="hstack gap-3 mb-4">
                    <span className="d-inline-block flex-shrink-0">
                      <img src="/img/award-3.png" alt="High Performer/MID Market Badges" className="img-fluid" />
                    </span>
                    <h6 className="mb-0 flex-grow-1">
                      High Performer/MID Market Badges
                    </h6>
                  </div>
                  <p className="mb-0">
                    Awarded to all products in the Leaders or High Performers Quadrant of the G2 Grid at the quarterly review deadline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHostingAward;
