import React from "react";
import Link from "next/link";

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: "/img/budgeting.png",
      title: "Security & Compliance Management",
      description:
        "Security is our top priority! We follow best-in-class security practices and adhere to international standards to secure your data. Our proactive security practices protect your assets, reduce risks, and give you peace of mind while you grow.",
    },
    {
      imgSrc: "/img/privacy-policy.png",
      title: "Microsoft Azure Optimization",
      description:
        "Hosting just gets us started. We max it out! Our Azure experts adjust your infrastructure for maximum performance and cost savings. Ongoing monitoring, dynamic updates, and smarter resource use guarantee that your company runs more effectively and more seamlessly.",
    },
    {
      imgSrc: "/img/expert.png",
      title: "Microsoft Azure Management",
      description:
        "Streamline your cloud experience with our end-to-end management services. From deployment to scaling, we take care of everything to reduce downtime and maximize performance. Leave your Azure environment to us so you can focus on what really matters—business growth.",
    },
    {
      imgSrc: "/img/lean-management.png",
      title: "24/7 Monitoring",
      description:
        "Stay safe, always! With 24/7 monitoring, we actively detect and fix problems before they cause downtime. Real-time notifications and around-the-clock management keep your cloud environment secure, stable, and always accessible, so your business is always ready to thrive at any time.",
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
              Why CloudMinister is Your Best Choice for Microsoft Cloud Hosting
              Management Services?
            </h2>
            <p className="mb-8 max-text-68">
              Where reliability and innovation converge—CloudMinister provides
              advanced integrated processes with enhanced performance, security,
              and scalability. Improve efficiency, save costs, and simplify
              operations with our professional-managed cloud services.
            </p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  Azure Cloud Solutions
                  <span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Performance Optimization
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  Security & Compliance Management
                </span>
              </li>
              {/* <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  Guaranteed Initial response time: 25 minutes
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  Backup Configuration (on demand)
                </span>
              </li> */}
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
