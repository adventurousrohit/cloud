import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Expert AWS Support',
      description:
        "Our team has extensive experience with AWS and delivers tailored solutions for your cloud infrastructure. With deep knowledge of AWS services and best practices, we optimize your cloud environment for performance, security, and scalability.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Comprehensive AWS Solutions',
      description:
        "From architecture design to application migration, we ensure your cloud operations are aligned to your business objectives through end-to-end AWS support. Our services cater to diverse needs such as storage, computing, and database management with an emphasis on security and compliance.",
    },
    {
      imgSrc: '/img/expert.png',
      title: '24/7 AWS Monitoring',
      description:
        "We proactively monitor your AWS infrastructure around the clock to identify potential issues before they affect your business. Our team of experts is available at any hour to ensure your cloud environment runs smoothly and securely.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Cost-Effective AWS Support',
      description:
        "We believe in delivering top-tier AWS support without breaking the bank. Our affordable pricing model ensures you get the best value, with no hidden fees or commissions. Get premium AWS services that scale with your business at a competitive rate.",
    },
  ];

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-xxl-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Boost Your AWS Efficiency with Innovative Support Services</h2>
            <p className="mb-8 max-text-68">Empowering your AWS journey, every step of the way.</p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                24/7 Epic Support
<span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Data Backup and Security
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>        
                  Optimized Performance
                </span>
              </li>
            </ul>
          </div>
          <div className="col-xxl-7">
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
