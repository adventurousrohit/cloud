import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuyDomainHostingard = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Blazing Speed',
      description:
        "Leverage the power of cutting-edge open-source technology for highly customizable and performance-boosting server experiences that grow with your business needs.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Quick Provisioning',
      description:
        "Get your server up and running in minutes with expert provisioning, ensuring fast and hassle-free setup to get your projects started immediately.",
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Team of Experts with Expertise in Profession End',
      description:
        "Rely on our dedicated team of seasoned professionals who provide tailored support, ensuring the best solutions for your unique business needs.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Secure SiteLock',
      description:
        "Safeguard your websites with advanced SiteLock security, proactively identifying and resolving threats before they impact your operations.",
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
            <h2 className="h3 mb-3">Boost Your Performance with Dedicated Linux Servers from CloudMinister</h2>
            <p className="mb-8 max-text-48">
            Experience superior speed, stability, and control with our custom Linux dedicated servers, crafted to meet your unique business requirements seamlessly.
            </p>
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
