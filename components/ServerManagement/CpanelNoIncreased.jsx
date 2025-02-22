import Link from "next/link";

const CpanelNoIncreased = () => {
  return (
    <>
      <div className="pt-60 pb-10">
        <div className="pb-60">
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
                  src="/img/Server Managment1.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-8 pe-xxl-12">
                  {/* <span className="d-block mb-2 text-primary fs-18 fw-semibold" data-sal="slide-up"
                                data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                Powerful Hosting Management
                            </span> */}
                  <h3
                    className="mb-6"
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    CloudMinister – Fastest Growing Server Management Company
                  </h3>
                  <p
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    CloudMinister provides expert server management services
                    that ensure your IT infrastructure's smooth and efficient
                    running. Its team of skilled and technical professionals is
                    responsible for everything from the initial setup of servers
                    to ongoing maintenance, providing you with soft, reliable
                    performance.
                  </p>
                  <p
                    className="mb-0"
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    Its proactive approach optimizes servers for speed,
                    security, and scalability, empowering digital growth. Trust
                    CloudMinister to strengthen your IT backbone and take your
                    business to the next level with unmatched server management
                    support services.
                  </p>
                  <a
                    href="https://wa.me/+918233040013"
                    target="_blank"
                    className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded mt-5"
                  >
                    <span className="btn-arrow__text">
                      Order Server Management
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
      </div>
    </>
  );
};

export default CpanelNoIncreased;
