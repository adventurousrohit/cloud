import React from 'react';
import { Link } from 'react-router-dom';

const LinuxWhyBuyDomainHostingard = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Fast & Easy Setup',
      description:
        'Start your reseller hosting journey with Cloudminister—no experience required! Our platform is 100% beginner-friendly, offering a simple setup process to kickstart your business without hassle.',
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Earn More Money',
      description:
        'Maximize your earnings by offering premium hosting plans packed with amazing features, including domain registrations. Boost your ROI and provide exceptional value to your customers.',
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Outpace Your Competition',
      description:
        'Stay ahead with our blazing-fast cloud infrastructure, ensuring websites load 20x faster. Gain an edge in the market with customized pricing and package management, giving you the freedom to excel and outshine your competitors.',
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Unlimited Flexibility',
      description:
        'Take full control of your hosting business. Set your own prices, create tailored packages, and leverage overselling capabilities to grow your business without limits. Achieve success on your terms.',
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
            <h2 className="h3 mb-3">Choose Cloudminister for Seamless, Affordable Reseller Hosting In India!</h2>
            <p className="mb-8 max-text-48">
            With Cloudminister's reseller hosting, you can provide your clients with seamless, expert website implementations while we handle all the technical details.</p>
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

export default LinuxWhyBuyDomainHostingard;
