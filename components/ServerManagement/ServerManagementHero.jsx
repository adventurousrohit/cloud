import Link from "next/link";
const SharedHostingHero = () => {
  return (
    <>
      <section className="banner banner-security bg-dark control-panel-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6">
              <h3
                className="text-white mb-4"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Secure, Scalable, and Reliable{" "}
                <span className="text-success-new">Server Management </span>{" "}
                Services
              </h3>
              <p
                className="mb-8 text-white max-text-72 text-opacity-75"
                data-sal="slide-up"
                data-sal-duration="1500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Protect your data with our secure server management services,
                offering scalable solutions tailored to your business needs.
              </p>
              <div
                className="d-flex align-items-center gap-5 flex-wrap"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <Link
                  href="/contact/"
                  className="btn btn-primary btn-arrow btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded"
                >
                  <span className="btn-arrow__text">
                    Get Started
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6 text-lg-end">
              <img
                src="/img/Server Management.png"
                alt="image"
                className="img-fluid"
                data-sal="fade"
                data-sal-duration="1500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SharedHostingHero;
