import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Cloud Optimization Made Smarter',
      description:
        "We don't just manage your cloud infrastructure – we elevate it! Our expertise will have your Google Cloud server performing at peak levels, guaranteeing seamless operations and maximum efficiency.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Effortless Google Cloud Management',
      description:
        "Managing Google Cloud servers has never been so easy. We provide uninterrupted services that will allow you to focus on expanding your business while we handle all the complexities. Simple, effective, and tailored for productivity.",
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Unmatched performance with advanced optimization',
      description:
        "Our Google Cloud Management Services will include cutting-edge caching technologies and tailored solutions to ensure the best server performance possible. Enjoy an exceptional user experience, built to satisfy the highest standards of efficiency.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Proactive 24/7 Google Cloud Monitoring',
      description:
        "Stay ahead of the game with round-the-clock monitoring of your Google Cloud environment. We proactively detect and resolve potential issues before they impact performance, ensuring a reliable and secure hosting experience.",
    },
  ];
  

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-xxl-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Why Google Cloud Hosting Stands Above the Rest?</h2>
            <p className="mb-8 max-text-68">Unlock the true potential of your Google Cloud hosting with our expert optimization, effortless management, and unwavering support – all tailored to keep your business running at full throttle.</p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                Reliable Performance at Scale<span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Ultimate Data Protection
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>        
                  Instant Setup & Migration
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
