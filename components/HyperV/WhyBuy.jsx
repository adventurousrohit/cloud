import React from "react";
import Link from "next/link";

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: "/img/budgeting.png",
      title: "Configuration of Packages",
      description:
        "When you select our Hyper-V Server Administration Services, you can forget about your business and allow us to configure all required packages for smooth server working.",
    },
    {
      imgSrc: "/img/privacy-policy.png",
      title: "Automation and Professional Services",
      description:
        "Our Hyper-V Support Services make server management smooth with automatic patching, software deployment, and real-time monitoring. Automation simplifies the management of your infrastructure, making it faster, easier, and error-free.",
    },
    {
      imgSrc: "/img/expert.png",
      title: "Support Available 24/7",
      description:
        "With our Outsourced Hyper-V Server Support Services, you benefit from round-the-clock monitoring and support. Our certified engineers are always on standby to resolve issues before they impact your operations.",
    },
    {
      imgSrc: "/img/lean-management.png",
      title: "Continuous Improvement in Industry Certifications",
      description:
        "CloudMinister boasts professional growth from its team members while offering the best Hyper-V System Administration Services from certified engineers. We encourage engineers to upgrade their skills based on industry-recognized certification to deliver their services to you with total quality. As a client, you have direct access to these certified professionals who work around the clock to serve your server infrastructure support requirements. All this is comprehensively covered in our free-of-cost Hyper-V Support Services.",
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
              Hyper-V Server Management Services: Your Partner in Virtualization
              Success
            </h2>
            <p className="mb-8 max-text-68">
              CloudMinister's customer-centric approach ensures guaranteed
              results, with proper solutions that maximize server efficiency,
              enhance security, and simplify operations. From deployment to
              monitoring, we’ve got you covered, 24/7.
            </p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  Deactivation Of Unused/Insecure Services
                  <span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Apache & Mail Server Tweaking
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  Backup and security
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  Firewall Installation & Configuration
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
