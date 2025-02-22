import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuyDomainHostingard = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Affordable Shared Hosting with Unmatched Quality',
      description:
        "Looking for budget-friendly shared hosting without compromising on performance? Cloudminister offers premium shared hosting plans designed to meet your needs, free from hidden fees and unexpected costs.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Enhanced Data Privacy',
      description:
        "Shared hosting is never an exception in data privacy. Your security is our top priority, and we ensure that your data remains safe in a secure and professional environment. Choose our shared hosting for a private, secure experience.",
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Professional Support Team',
      description:
        "Our dedicated support team is always here to help you. With years of experience in shared hosting, we provide 24/7 assistance that caters to your specific business needs. So rest easy knowing you're in good hands.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Effortless Management',
      description:
        "Our intuitive hosting platform makes it very easy to manage your website. We give you a very easy-to-use interface that can easily help you control your site, and at very affordable prices, we also offer a broad array of domain extensions to give you everything you need to succeed in the digital world.",
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
            <h2 className="h3 mb-3">Experience High-Quality Shared Hosting Service in India</h2>
            <p className="mb-8 max-text-68">
            At CloudMinister, we don't care for accolades. We only want to bring the best out. We help to provide shared hosting services in India that can accelerate your digital success with blazing speeds, reliability, and security. 
            </p>
            <ul className="list-unstyled m-0 p-0">
                                        <li className="d-flex align-items-center gap-2 mb-3">
                                            <span
                                                className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                                                <i className="las la-check"></i>
                                            </span>
                                            <span className="d-block text-black text-opacity-75 fs-14">
                                                
                                            Ultra-Fast, Secure & 99.9% Uptime Guarantee<span className="d-inline-block config-info-1"></span>
                                            </span>
                                        </li>

                                        <li className="d-flex align-items-center gap-2 mb-3">
                                            <span
                                                className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                                                <i className="las la-check"></i>
                                            </span>
                                            <span className="d-block text-black text-opacity-75 fs-14">
                                                <span className="d-inline-block config-info-2"></span>
                                                1-Click Easy WordPress Installation
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2 mb-3">
                                            <span
                                                className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                                                <i className="las la-check"></i>
                                            </span>
                                            <span className="d-block text-black text-opacity-75 fs-14">
                                                <span className="d-inline-block config-info-3"></span> Risk-Free with 30-Day Credit-Back Guarantee
                                            </span>
                                        </li>
                                      
                                    </ul>
          </div>
          <div className="col-xxl-7">
            <div className="row g-4">
              {cardData?.map((card, index) => (
                <div
                  className="col-md-6"
                  key={index}
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  <div className="card hover-shadow rounded-3 border border-secondary transition h-100" >
                    <div className="card-body p-xl-6">
                      <div className="mb-4">
                        <img
                          src={card.imgSrc}
                          alt="icon"
                          className="img-fluid"
                          style={{width:"72px",height:"72px"}}
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

export default WhyBuyDomainHostingard;
