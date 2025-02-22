import Link from "next/link";

const HyperVNoIncreased = () => {
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
                  src="/server-managemnt-middle-image/Microsoft-Hyper-V-Support.png"
                  alt="Microsoft Hyper-V Support"
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
                    Take Control of Your Hyper-V Servers Management Services
                    with Security
                  </h2>
                  <p
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    Our Hyper-V Server Management provides seamless
                    virtualization solutions that optimize your IT
                    infrastructure. With expert remote management, we ensure the
                    high performance, security, and scalability of your Hyper-V
                    hosts.
                  </p>
                  <p
                    className="mb-0"
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    Our service is designed for managing one host or many
                    servers, providing a reliable, secure, and cost-effective
                    solution for all your Hyper-V server management needs.
                  </p>
                  <a
                    href="https://wa.me/+918233040013"
                    target="_blank"
                    className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded mt-5"
                  >
                    <span className="btn-arrow__text">
                      Order Hyper-V Server Management
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

export default HyperVNoIncreased;
