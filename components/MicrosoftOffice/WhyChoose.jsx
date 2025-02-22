import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: '24/7 Epic Support',
      description:
        'Our team is always here to support you. Whether it is in answering questions or outlining features, Cloudminister makes sure that the experience of Microsoft 365 is seamless with its 24/7 round-the-clock support.',
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Company-Specific Solutions',
      description:
        'Each company has different needs. Cloudminister personalizes your Microsoft 365 subscription to fit your needs best while configuring your applications and services to provide the greatest productivity and efficiency.',
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Data Protection and Security',
      description:
        'Cloudminister prioritizes your data security. We provide top-tier protection against cyber threats and ensure that your data is continuously backed up, safe from malicious attacks, and recoverable if needed.',
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Seamless Integration and Updates',
      description:
        'We make sure your Microsoft 365 apps are always up to date, seamlessly integrated, and performing at their best. Regular updates ensure your team is always equipped with the latest features, improving productivity and collaboration.',
    },
  ];
  

  return (
    <div className="pt-120 pb-120" style={{background:"#fff"}}>
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Choose Your Microsoft 365 Journey, Perfected with Cloudminister!</h2>
            <p className="mb-8 max-text-68">Microsoft 365 stands out with four key qualities that make it your ultimate productivity solution:</p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                Always-on assistance for seamless operations.<span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Real-time teamwork across all devices.
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>Robust protection for your valuable information.
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
