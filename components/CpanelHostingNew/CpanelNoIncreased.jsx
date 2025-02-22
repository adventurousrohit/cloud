import Link from "next/link";

const CpanelNoIncreased = () => {
  return (
    <>
      <div className="pt-60 pb-60">
       
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
                  src="/server-managemnt-middle-image/Cpanel.png"
                  alt="Cpanel"
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
                    Seamless cPanel Support with Advanced Hosting Management
                  </h2>
                  <p
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    Do you manage a cPanel server and are looking for
                    cost-effective solutions to ensure smooth server management?
                    Let CloudMinister handle your cPanel server management, so
                    you can focus on scaling your business. We know that your
                    time and resources are valuable, and managing a complex
                    online business requires undivided attention.
                  </p>
                  <p
                    className="mb-0"
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    Our services perfectly fit your needs whether you run
                    personal websites or multiple business sites on cPanel. From
                    setting up, hardening, and regular patching of servers to
                    resolving technical issues, we provide comprehensive
                    outsourced cPanel server support services. With years of
                    expertise in server management services, our team ensures
                    your servers run smoothly and securely 24/7.
                  </p>
                  <a
                     href="https://wa.me/+918233040013"
                    target="_blank"
                    className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded mt-5"
                  >
                    <span className="btn-arrow__text">
                      Order cPanel Server Management
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

    </>
  );
};

export default CpanelNoIncreased;
