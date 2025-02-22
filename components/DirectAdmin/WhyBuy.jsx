import React from "react";
import Link from "next/link";

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: "/img/budgeting.png",
      title: "24/7 Server Monitoring Support to Preemptively Resolve Problems",
      description:
        "Our best professionals are there to supervise your servers 24/7, and any noticed issues are immediately resolved with more efficient solutions so that the downtime or loss is minimized. We thus ensure seamless server performance by ensuring you never face technicalities while moving towards your respective business goals.",
    },
    {
      imgSrc: "/img/privacy-policy.png",
      title: "Backup Support via Secure and Reliable Services",
      description:
        "Data backup is a must to avoid technical failures and data breaches. We provide daily and weekly backup solutions to secure your business-critical information. Let us handle your backup needs while you focus on driving growth and innovation for your business.",
    },
    {
      imgSrc: "/img/expert.png",
      title: "Comprehensive Customer Support",
      description:
        "Our professional team brings along a lot of industry expertise to provide full customer support. Whether it is server management or troubleshooting, we provide fast and reliable solutions to ensure that your servers work seamlessly at all times.",
    },
    {
      imgSrc: "/img/lean-management.png",
      title: "99.99% Uptime Guarantee",
      description:
        "Server uptime is one of the most important factors that determine your online success. Our advanced solutions will give you a 99.99% uptime guarantee, ensuring that your website and applications are available to users without any kind of disruption.",
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
              Why Choose CloudMinister for DirectAdmin Server Management?
            </h2>
            <p className="mb-8 max-text-68">
              Choose CloudMinister as your trusted DirectAdmin server management
              partner. Unlimited ticket support, expert server management, and
              robust firewall installation & configuration will make sure your
              servers are always secure, optimized, and ready for growth and
              success. Let us handle the complexities while you focus on
              growth—experience hassle-free server management services and
              professional technical expertise, tailored to your business needs.
            </p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  Hassle-free configuration & maintenance
                  <span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Advanced security protocols
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  24/7 expert support
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  Unmatched performance optimization
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

export default WhyBuy;
