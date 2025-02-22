 import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuyDomainHostingard = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Unmatched Performance and Speed',
      description:
        "At CloudMinister, we utilize the latest open-source innovations, such as OpenStack, to build each server custom. This cutting-edge technology allows us to continuously optimize server performance, providing you with blazing-fast speeds customized to your business needs.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Lightning-Fast Provisioning',
      description:
        "Get started right away! Our expert team configures, tests, and connects your server to the network within minutes, so you can focus on what matters: growing your business.",
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Expertise You Can Rely On',
      description:
        "Our support team is knowledgeable to ensure you receive great service, from setting up your business to troubleshooting any issues.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Robust Security with SiteLock',
      description:
        "Protect your website with our advanced SiteLock technology. We detect and repair vulnerabilities proactively, shielding your site from malware and threats before they escalate.",
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
            <h2 className="h3 mb-3">Discover Why Cloudminister Is Perfect for Your Windows Dedicated Server Needs</h2>
            <p className="mb-8 max-text-48">
            Keep ahead of the game with Windows Dedicated Server Hosting from Cloudminister, which is designed for dependability, speed, and security to power your vital website easily.
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
