import React from "react";
import Link from "next/link";

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: "/img/budgeting.png",
      title: "24/7 Comprehensive Support",
      description:
        "Our experienced teams monitor all the issues before they arise and can disrupt your operations, ensuring the least downtime.",
    },
    {
      imgSrc: "/img/privacy-policy.png",
      title: "Enhanced Backup & Security",
      description:
        "We give the highest priority to your data as well. Implementing our robust backup solutions and advanced security protocols safeguard your critical assets.",
    },
    {
      imgSrc: "/img/expert.png",
      title: "Seamless Server Migration",
      description:
        "With hassle-free migration from Google Cloud, we let you enjoy a seamless transfer with zero downtime and complete efficiency.",
    },
    {
      imgSrc: "/img/lean-management.png",
      title: "Optimized Performance",
      description:
        "We utilize the most advanced cache technologies to ensure better server speeds. This helps bring an exceptional user experience for the users.",
    },
    // {
    //   imgSrc: "/img/budgeting.png",
    //   title: "Optimizing Usefulness",
    //   description:
    //     "Utilize your Google Cloud services efficiently through our optimizations towards peak performance as well as the minimum cost involved.",
    // },
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
              The Smart Choice for Google Cloud Server Management
            </h2>
            <p className="mb-8 max-text-68">
              Empower your business using our expert Google Cloud Server
              Management Services. Designed for peak performance, security, and
              efficiency, we guarantee to have your cloud infrastructure running
              smoothly at all times with years of proven competency behind it.
            </p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  Global Availability
                  <span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Advanced Monitoring
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  Easy Integration
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
                      <h6 className="mb-4">{card.title}</h6>
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

export default WhyBuy;
