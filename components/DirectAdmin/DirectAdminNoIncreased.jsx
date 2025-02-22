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
                  src="/server-managemnt-middle-image/Direct-Admin.png"
                  alt="Direct Admin"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-8 pe-xxl-12">
                  <span
                    className="d-block mb-2 text-primary fs-18 fw-semibold"
                    data-sal="slide-up"
                    data-sal-duration="1500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    Power your site, and we’ll manage the rest!
                  </span>
                  <h2
                    className="mb-6"
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    Master Your Server with Advanced Direct Admin Server
                    Management Services
                  </h2>
                  <p
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    From configuration to regular updates, we handle it all, so
                    you can focus on your core business. Enjoy 24x7 Direct admin
                    Server Monitoring, fast problem-solving, and better
                    solutions that match your business needs. Simplify server
                    management with CloudMinister—your trusted partner for
                    efficiency and reliability.
                  </p>
                  {/* <p className="mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                Our Web Hosting plans to meet the Loading Speed requirements of every website
                                out-of-the-box. Of course, that is not always optimal due to the website optimization for
                                every website that we host.
                            </p> */}
                  <a
                    href="https://wa.me/+918233040013"
                    target="_blank"
                    className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded mt-5"
                  >
                    <span className="btn-arrow__text">
                      Order Direct Admin Server Management
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
