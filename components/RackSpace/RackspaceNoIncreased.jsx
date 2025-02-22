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
                  src="/server-managemnt-middle-image/Rackspace-Server.png"
                  alt="Rackspace Server"
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
                    The Ultimate Rackspace Server Management Tools for Your
                    Website
                  </h2>
                  <p
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    Your website deserves seamless performance, enhanced
                    security, and round-the-clock reliability. That's where our
                    Rackspace Server Management Services come in. We take the
                    stress out of server management, ensuring your digital
                    presence remains uninterrupted and your systems optimized.
                  </p>
                  <p
                    className="mb-0"
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    Running a business in today's digitized world means that
                    reliance on your servers is needed more than ever. From
                    traffic management to securing sensitive data, our Rackspace
                    Server Administration Services are designed to meet all
                    these needs. Whether you're a growing startup or a
                    well-established business in the industry, we provide
                    efficient solutions that match your business goals.
                  </p>
                  <a
                  href="https://wa.me/+918233040013"
                    target="_blank"
                    className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded mt-5"
                  >
                    <span className="btn-arrow__text">
                      Order Rackspace Server Management
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
