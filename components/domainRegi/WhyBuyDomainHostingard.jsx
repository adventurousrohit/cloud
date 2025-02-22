import React from "react";
import Link from "next/link";

const WhyBuyDomainHostingard = () => {
  const cardData = [
    {
      imgSrc: "/img/budgeting.png",
      title: "Fast and Reliable DNS",
      description:
        "CloudMinister ensures that your website is always up and running with our fast and reliable DNS services. Experience fewer downtimes and better site performance with our top-of-the-line infrastructure.",
    },
    {
      imgSrc: "/img/privacy-policy.png",
      title: "Advanced Security Features",
      description:
        "We take care of your domain's safety with services like Domain Privacy, DNSSEC, and SSL certificates to ensure the security of your information and the protection of your site.",
    },
    {
      imgSrc: "/img/expert.png",
      title: "Wide Range of Domain Extensions",
      description:
        "It allows you to pick the best for your brand and business from the many available extensions (.com, .org, .net, and many more).",
    },
    {
      imgSrc: "/img/lean-management.png",
      title: "Affordable Pricing Plans",
      description:
        "Enjoy the best price on domains without any additional hidden fees. CloudMinister is making it easy to obtain your domain, regardless of your size, and without breaking the bank, with its affordable plans for every kind of business.",
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
            Why Choose CloudMinister as Your Trusted Partner for Domain Success?
            </h2>
            <p className="mb-8 max-text-68">
            At CloudMinister, we generate opportunities rather than only registering domains. Our objective is straightforward: to give you a smooth, safe, and easy domain registration process that positions your online presence for success.
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
