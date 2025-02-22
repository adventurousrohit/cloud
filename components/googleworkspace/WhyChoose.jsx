import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: "/img/expert.png",
      title: "Expert Google Workspace Setup",
      description:
        "Our team has deep expertise in Google Workspace, enabling businesses to fully utilize its potential. We have years of experience ensuring smooth integration and efficient management of all Google tools for boosting productivity and collaboration.",
    },
    {
      imgSrc: "/img/lean-management.png",
      title: "Custom Solutions for Your Business",
      description:
        "We customize Google Workspace solutions based on your specific business needs. From professional email configurations to advanced cloud storage management, our services ensure a seamless transition and continuous support for your team’s success.",
    },
    {
      imgSrc: "/img/privacy-policy.png",
      title: "24/7 Google Workspace Support",
      description:
        "Count on our round-the-clock customer support to resolve any issues swiftly. Whether it’s troubleshooting or offering solutions to optimize usage, our team is always ready to assist you, ensuring minimal downtime.",
    },
    {
      imgSrc: "/img/budgeting.png",
      title: "Affordable Google Workspace Plans",
      description:
        "Enjoy cost-effective pricing with no hidden charges. We offer competitive rates on Google Workspace plans, ensuring you get top-notch service without exceeding your budget.",
    },
  ];
  
  

  return (
    <div className="pt-120 pb-120" style={{background:"#fff"}}>
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Why Google Workspace is the Ideal Choice for Your Business?</h2>
            <p className="mb-8 max-text-68">CloudMinister offers the following for your business </p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                24/7 support<span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Secure backup
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>Seamless Google Workspace Integration
                </span>
              </li>
            </ul>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              {cardData.map((card, index) => (
                <div className="col-md-6" key={index} data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <div className="card hover-shadow rounded-3 border border-secondary transition h-100">
                    <div className="card-body p-xl-6">
                      <div className="mb-4">
                        <img src={card.imgSrc} alt="icon" className="img-fluid" style={{ width: '72px', height: '72px' }} />
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
