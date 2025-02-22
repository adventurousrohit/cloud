import React from "react";
import Link from "next/link";

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: "/img/budgeting.png",
      title: "Akamai Cloud Hosting Optimization",
      description:
        "We don't only manage your cloud environment—we optimize it! With Akamai cloud hosting solutions, we tune your setup for top performance. We utilize the latest tools and tactics to boost speed, efficiency, and cost-savings, freeing your business for a hassle-free cloud experience.",
    },
    {
      imgSrc: "/img/privacy-policy.png",
      title: "Efficient Cloud Management",
      description:
        "Bid farewell to downtime and inefficiencies! Akamai's cloud management services provide seamless performance, so you can concentrate on business growth. Our optimized solutions streamline cloud operations, increase productivity, and provide trusted, hassle-free management customized to your requirements.",
    },
    {
      imgSrc: "/img/expert.png",
      title: "Performance Optimization",
      description:
        "Realize the full potential of cloud hosting with our advanced optimization methods. We utilize sophisticated caching, load balancing, and resource allocation techniques for optimal speed and responsiveness. Improve user experience and keep ahead of the competition with our performance-focused solutions.",
    },
    {
      imgSrc: "/img/lean-management.png",
      title: "24/7 Cloud Monitoring",
      description:
        "Our proactive 24/7 monitoring finds and fixes potential problems before they hit your system's performance. With real-time visibility and around-the-clock monitoring, we ensure the health, security, and performance of your cloud infrastructure—so everything runs smoothly, 24/7.",
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
            Why Choose Cloundminister as your Akamai Cloud Hosting Partner?
            </h2>
            <p className="mb-8 max-text-68">
            Unlock seamless performance and scalability with Akamai’s cloud web hosting and business-centric hosting services for accelerated growth.
            </p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  Lightning-Fast Performance
                  <span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Scalable Solutions
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  Unbeatable Uptime
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

export default WhyBuy;
