import React from "react";
import Link from "next/link";

const WhyBuyDomainHostingard = () => {
  const cardData = [
    {
      imgSrc: "/img/budgeting.png",
      title: "Affordable Linux Web Hosting with Unrivaled Excellence",
      description:
        "Searching for low-cost Linux web hosting that doesn't sacrifice functionality? Cloudminister provides premium Linux shared hosting options that are tailored to your requirements and free of unpleasant surprises or hidden fees.",
    },
    {
      imgSrc: "/img/privacy-policy.png",
      title: "Improved Privacy of Data",
      description:
        "Data privacy is crucial when it comes to Linux hosting services. Your security is our first priority, and we make sure that your data is safeguarded in a reliable, expert setting. For an experience that is private and safe, go with Linux cPanel hosting.",
    },
    {
      imgSrc: "/img/expert.png",
      title: "Professional Assistance Group",
      description:
        "Our committed group of experts is always available to help. With a wealth of Linux shared hosting experience, we offer round-the-clock assistance catered to your unique company requirements. Don't worry, you're in good hands.",
    },
    {
      imgSrc: "/img/lean-management.png",
      title: "Simple Administration",
      description:
        "You can easily manage your website with our easy-to-use Linux cPanel hosting. We make sure you have all you need to be successful in the internet market by supporting a large selection of domain extensions at affordable pricing.",
    },
  ];

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div
            className="col-xxl-5"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease-in-out-sine"
          >
            <h2 className="h3 mb-3">
              Why Choose CloudMinister as Your Linux Shared Hosting Provider
            </h2>
            <p className="mb-8 max-text-68">
              At Cloudminister, we don't aim for awards—we strive for
              excellence. Our mission is simple: to provide you with
              blazing-fast, secure, and reliable Linux-shared hosting services
              that empower your online vision.
            </p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  Fast, Secure & Effortless Registration
                  <span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  1-Click Domain Management
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>{" "}
                  Risk-Free
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  Refund Guarantee
                </span>
              </li>
            </ul>
          </div>
          <div className="col-xxl-7">
            <div className="row g-4">
              {cardData.map((card, index) => (
                <div
                  className="col-md-6"
                  key={index}
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  <div className="card hover-shadow rounded-3 border border-secondary transition h-100">
                    <div className="card-body p-xl-6">
                      <div className="mb-4">
                        <img
                          src={card.imgSrc}
                          alt="icon"
                          className="img-fluid"
                          style={{ width: "72px", height: "72px" }}
                        />
                      </div>
                      <h3 className="mb-4">{card.title}</h3>
                      <p className="mb-0">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBuyDomainHostingard;
