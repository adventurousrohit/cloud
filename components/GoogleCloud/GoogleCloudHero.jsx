import Link from "next/link";

const SharedHostingHero = () => {
  return (
    <>
      <section className="banner banner-security bg-dark control-panel-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6">
              <h1
                className="text-white mb-4"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <span className="text-success-new">Google Cloud</span> Hosting
                in India
              </h1>
              <p
                className="mb-8 text-white max-text-72 text-opacity-75"
                data-sal="slide-up"
                data-sal-duration="1500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                With Google, your data is not just hosted—it's empowered. Ready
                to innovate, scale, and thrive? Start your journey with Google
                Cloud Hosting today!
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
                src="/email/Google Cloud.png"
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
