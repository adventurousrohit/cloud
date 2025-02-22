import React from "react";
import Link from "next/link";

const IsomaticHero = () => {
  return (
    <section className="hero-3 position-relative z-1">
      <div className="container">
        <div className="row g-4 align-items-lg-center">
          <div className="col-lg-7 col-xl-6">
            <small className="d-inline-block mb-2 fw-bold">
              🔥 Don't miss limited-time savings:{" "}
              <a href="#" className="text-decoration-none">
                Claim Deal Now
              </a>
            </small>
            <h1 className="mb-4">
              Top-notch Hosting with 24/7 World - Class Support
            </h1>
            <p className="max-text-52 mb-6">
              Managed Web Hosting Solutions bringing the success of your next
              online mission! Starting at{" "}
              <a href="#" className="text-decoration-none fw-bold">
                $2.49 including
              </a>
            </p>
            <Link
              href="/price"
              className="btn btn-primary btn-arrow btn-arrow-md fs-14 fw-medium rounded"
            >
              <span className="btn-arrow__text">
                Plan & Pricing
                <span className="btn-arrow__icon">
                  <i className="las la-arrow-right"></i>
                </span>
              </span>
            </Link>
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
                  <span className="vertical-social-media__text-stroke"></span>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-lg-5 col-xl-6">
            <div className="text-center">
              <img
                src="/img/hero-img-3.png"
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
  );
};

export default IsomaticHero;
