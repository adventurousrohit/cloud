import Link from "next/link";

const EcommerceHostingHero = () => {
  return (
    <>
      <section className="hero-3 position-relative z-1">
        <div className="container">
          <div className="row g-4 align-items-lg-center">
            <div className="col-lg-7 col-xl-6">
              <small className="d-inline-block mb-2 fw-bold">
                🔥 WooCommerce Hosting{" "}
                <a href="#" className="text-decoration-none">
                  Up to 71% off
                </a>
              </small>
              <h1 className="mb-6">
                Best WooCommerce Hosting for Your Online Store
              </h1>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-8">
                <li className="d-flex align-items-center gap-3">
                  <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                    <i className="las la-check"></i>
                  </div>
                  <small>
                    <span className="fw-bold">Quick</span> Setup
                  </small>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                    <i className="las la-check"></i>
                  </div>
                  <small>
                    <span className="fw-bold">Free</span> Domain & SSL
                  </small>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                    <i className="las la-check"></i>
                  </div>
                  <small>
                    <span className="fw-bold">24/7</span>Expert Customer Support
                  </small>
                </li>
              </ul>
              <div className="d-flex flex-wrap align-items-center gap-4">
                <Link
                  href="/price"
                  className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded"
                >
                  <span className="btn-arrow__text">
                    Choose Your Plan
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </Link>
                <Link href="/price" className="text-decoration-none text-dark">
                  <span className="d-block mb-1 fs-14">Starting at</span>
                  <span className="d-block h6 m-0">$16.00/mo</span>
                </Link>
              </div>
              <ul className="list-unstyled p-0 d-flex flex-xl-column align-items-center flex-wrap gap-3 mt-8 mt-xl-0 vertical-social-media">
                <li>
                  <a
                    href="#"
                    className="text-decoration-none d-inline-block text-body hover:text-primary fs-24 transition"
                  >
                    <i className="lab la-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none d-inline-block text-body hover:text-primary fs-24 transition"
                  >
                    <i className="lab la-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none d-inline-block text-body hover:text-primary fs-24 transition"
                  >
                    <i className="lab la-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none d-inline-block text-body hover:text-primary fs-24 transition"
                  >
                    <i className="lab la-discord"></i>
                  </a>
                </li>
                <li>
                  <span className="vertical-social-media__text d-inline-flex align-items-center gap-2 fw-semibold">
                    Follow on{" "}
                    <span className="vertical-social-media__text-stroke"></span>{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 col-xl-6">
              <div className="text-center">
                <img
                  src="/img/ecommerce-hero-img.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/img/shape/isometric-shape-1.png"
          alt="image"
          className="hero-3__shape hero-3__shape-1 img-fluid"
        />
        <img
          src="/img/shape/isometric-shape-2.png"
          alt="image"
          className="hero-3__shape hero-3__shape-2 img-fluid"
        />
        <img
          src="/img/shape/isometric-shape-3.png"
          alt="image"
          className="hero-3__shape hero-3__shape-3 img-fluid"
        />
        <img
          src="/img/shape/isometric-shape-1.png"
          alt="image"
          className="hero-3__shape hero-3__shape-4 img-fluid"
        />
      </section>
    </>
  );
};

export default EcommerceHostingHero;
