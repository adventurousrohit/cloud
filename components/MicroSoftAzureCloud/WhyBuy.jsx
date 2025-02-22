import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Microsoft Azure Usage Optimization',
      description:
        "We don't just manage your cloud infrastructure – we optimize it! Our team ensures that your Azure environment runs at its peak performance, utilizing every bit of its potential. With continuous monitoring and expert configuration, you'll enjoy seamless operations and enhanced productivity.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Optimized Microsoft Azure Management',
      description:
        "Experience uninterrupted services with our efficient Azure cloud hosting management. We simplify the entire process, allowing you to focus on what matters most – your business growth. Our proactive approach ensures smooth transitions, minimal downtime, and maximum efficiency.",
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Performance optimization',
      description:
        "Our Azure Cloud Hosting Services are tailored to give your business leading-edge performance. Advanced cache technology is used and optimized resource allocation for ensuring the fast processing speeds of your business along with an experience no other platform could give you.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: '24/7 Microsoft Azure Monitoring',
      description:
        "Continuous monitoring is the foundation of reliable cloud hosting. Our 24/7 Azure monitoring services help identify and resolve potential issues before they affect performance, which means your business will always be running.",
    },
  ];

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-xxl-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Why Choose CloudMinister for Azure Cloud Hosting Business Services?</h2>
            <p className="mb-8 max-text-68">Explore your cloud experience with the best CloudMinister’s Microsoft Azure Cloud Hosting Services, where reliability meets innovation. Start optimizing your Azure environment today!</p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                Proactive Performance Monitoring<span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Hassle-Free Compliance Management
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>        
                  Customized Azure Solutions
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
