import React from 'react';
import { Link } from 'react-router-dom';

const ResellerHostingWhyChoose = () => {
    const cardData = [
        {
          imgSrc: '/img/budgeting.png',
          title: 'Fast & Easy Windows Reseller Hosting Setup',
          description:
            'Start your Windows Reseller Hosting business with ease. Our 100% beginner-friendly platform ensures a smooth setup without any prior experience. Empower your business with simplicity and speed.',
        },
        {
          imgSrc: '/img/privacy-policy.png',
          title: 'Maximize Your Earnings with Windows Reseller Hosting',
          description:
            'Boost your ROI by offering your customers premium web hosting plans. Packed with advanced features and domain registration options, our Windows Reseller Hosting helps you deliver unmatched value.',
        },
        {
          imgSrc: '/img/expert.png',
          title: 'Dominate the Market with Best Windows Reseller Hosting',
          description:
            'Stay ahead of the competition with blazing-fast websites, powered by our high-quality cloud infrastructure. Experience 20x faster performance designed for your business success.',
        },
        {
          imgSrc: '/img/lean-management.png',
          title: 'Flexibility Unleashed with Windows Reseller Hosting',
          description:
            'Enjoy unlimited control over your reseller hosting business. Create custom packages, set your pricing, and scale with confidence. Overselling enables you to maximize your potential.',
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
            <h2 className="h3 mb-3">Why Choose CloudMinister as Your Windows Reseller Hosting Provider</h2>
            <p className="mb-8 max-text-48">
            Choose CloudMinister that guarantees performance and profitability. Join thousands of businesses in India using our Windows Reseller Hosting to build their success.</p>
           
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

export default ResellerHostingWhyChoose;
