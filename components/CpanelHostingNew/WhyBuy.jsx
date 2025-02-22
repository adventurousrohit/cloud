import React from "react";
import Link from "next/link";

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: "/img/budgeting.png",
      title: "Reliable cPanel Server Management Solutions",
      description:
        "We have a lot of experience with complete cPanel server management services and provide easy installation, configuration, and setup for any server type, including dedicated and VPS hosting. Our experienced team will ensure your servers are updated and run without errors.",
    },
    {
      imgSrc: "/img/privacy-policy.png",
      title: "Rapid Response & Support",
      description:
        "Need help? Our professionals are always on standby, providing swift responses to queries or issues, ensuring your web hosting experience is hassle-free and efficient.",
    },
    {
      imgSrc: "/img/expert.png",
      title: "24/7 Server Monitoring",
      description:
        "Our team monitors your servers round the clock, 365 days a year, preventing any disruptions to your operations.",
    },
    {
      imgSrc: "/img/lean-management.png",
      title: "Data Backup & Recovery",
      description:
        "We ensure your data is backed up regularly and recoverable swiftly without affecting your site's performance.",
    },
  ];

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div
            className="col-lg-5"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease-in-out-sine"
          >
            <h2 className="h3 mb-3">
              Why Choose CloudMinister as Your cPanel Sever Partner?
            </h2>
            <p className="mb-8 max-text-68">
              Choosing CloudMinister with cPanel server management plans would
              be the best which helps in balance affordability, competence, and
              peace of mind for your company. Let's optimize and manage your
              servers so that you may focus on enhancing your business.
            </p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  24 by 7 cPanel Server Monitoring: This increases uptimes.
                  <span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Low-cost server management solutions for any size of business.
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  Proactive maintenance to maintain peak performance.
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  Partner with us today for a robust and worry-free cPanel
                  support plan designed to meet all your server management
                  needs!
                </span>
              </li>
            </ul>
          </div>
          <div className="col-lg-7">
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
