import React from "react";
import Link from "next/link";

const LinuxWhyBuyDomainHostingard = () => {
  const cardData = [
    {
      imgSrc: "/img/budgeting.png",
      title: "Easy and Quick Setup",
      description:
        "Even if you're a total novice, you can quickly start a reseller hosting company! Our simple setup procedure guarantees a seamless launch with little complication, making it simple to get started right away.",
    },
    {
      imgSrc: "/img/privacy-policy.png",
      title: "Increase Your Profits",
      description:
        "Increase your earnings by providing your clients with first-rate hosting packages that are jam-packed with amazing features and easy domain registration. With every new sign-up, see your profit grow!",
    },
    {
      imgSrc: "/img/expert.png",
      title: "Outspace Your Competitors",
      description:
        "With our lightning-fast cloud infrastructure, which can deliver websites up to 20 times faster than the competitors, you can stay ahead of the game. Get total control over your products, prices, and even overselling skills to dominate your market.",
    },
    {
      imgSrc: "/img/lean-management.png",
      title: "Infinite Opportunities",
      description:
        "Have complete control over how you want your business to develop. You are in charge of making important choices and advancing your business, from determining your own prices to personalizing hosting packages.",
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
              Discover Why Cloudminister Is Perfect for Your Linux Reseller
              Hosting Needs
            </h2>
            <p className="mb-8 max-text-48">
              Choose Linux reseller hosting for better reliability, security,
              pocket-friendly, and flexibility—ideal for hosting multiple
              websites effortlessly for business.
            </p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  Fast Performance
                  <span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  WHM & cPanel
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>{" "}
                  One-click Apps
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  Unlimited Bandwidth
                </span>
              </li>
            </ul>
          </div>
          <div className="col-xxl-7">
            <div className="row g-4">
              {cardData?.map((card, index) => (
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

export default LinuxWhyBuyDomainHostingard;
