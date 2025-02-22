import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'SSL Certificate Installation and Setup',
      description:
        'We give you an expert installation of an SSL certificate coupled with setup and assure the web credibility and security in any website by offering SSL to small blogs as well as huge e-commerce platforms. Thus, we assist through shared, VPS, and Dedicated servers all set up by our experts properly, so they have a trouble-free and secure search.',
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Instant Response for SSL Enquiries',
      description:
        'Our team is here to help you with any SSL-related questions. Be it an installation problem or renewal of certificates, our experts are just a call away. Our prompt response time will ensure quick solutions to keep your website secure and accessible at all times.',
    },
    {
      imgSrc: '/img/expert.png',
      title: '24/7 SSL Monitoring',
      description:
        'We continuously monitor SSL certificates to ensure that your site remains secure with the latest encryption. Our experts monitor SSL certificates 24/7, identifying potential vulnerabilities and addressing them before they affect your website\'s security. Our proactive approach keeps your website running smoothly with minimal disruption.',
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'SSL Data Protection & Management',
      description:
        'We also provide SSL certificate management, ensuring that your certificates are valid, properly configured, and renewed on time. We specialize in secure data transmission, keeping your customers\' data safe and your business compliant with industry standards. Let us handle your SSL needs, so you can focus on growing your business.',
    },
  ];
  

  return (
    <div className="pt-120 pb-120" >
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Why CloudMinister is the Ultimate Choice for SSL Certificates?</h2>
            <p className="mb-8 max-text-68">As many stand out from the competition, we specialize in security as well as help support. All this is for you: </p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                Tickets available 24/7 around the clock over our help desk <span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Regular and frequent security checks Expert server tune-ups 
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>Custom backup options
                </span>
              </li>
             
            </ul>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              {cardData?.map((card, index) => (
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
