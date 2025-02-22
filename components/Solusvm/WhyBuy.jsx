import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Unlimited Support for SolusVM Servers',
      description:
        "Round-the-clock support for all your SolusVM Server Administration Services is provided by our dedicated team. Troubleshooting, upgrades, or configurations all fall under our 24x7 SolusVM Server Monitoring, which gives swift resolutions and smooth operations.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'SolusVM Expertise: Server Monitoring',
      description:
        'SolusVM System Administration Services ensure that the servers are always safe and reliable through real-time monitoring. Issues are prevented and rectified before they develop further, and the performance is optimized to the fullest to make the servers achieve maximum efficiency.',
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Comprehensive Backup Solutions',
      description:
        "Protect your precious data through our automated backup systems. Daily and weekly backup solutions are included in our SolusVM Server Management Plan, which guards your business against data loss and breaches.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Tailored Server Administration Services',
      description:
        "Our company has years of experience and offers customized SolusVM Server Administration Services. From configuration to optimization, we ensure that everything is taken care of for maximum server efficiency.",
    },
  ];

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Why Choose Our Server Management Company for SolusVM?</h2>
            <p className="mb-8 max-text-68">We are more focused on a customer-centric approach, and thus results are guaranteed.</p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  Deactivation Of Unused/Insecure Services<span className="d-inline-block config-info-1"></span>
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
          <div className="col-lg-7">
            <div className="row g-4">
              {cardData.map((card, index) => (
                <div className="col-md-6" key={index} data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <div className="card hover-shadow rounded-3 border border-secondary transition h-100">
                    <div className="card-body p-xl-6">
                      <div className="mb-4">
                        <img src={card.imgSrc} alt="icon" className="img-fluid" style={{ width: '72px', height: '72px' }} />
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
