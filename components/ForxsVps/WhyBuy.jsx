import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Unmatched Performance',
      description:
        "Our Forex VPS server solutions are optimized for high-performance trading, ensuring zero lag and maximum uptime. With our best VPS for Forex, you can trade with confidence and reliability. Experience lightning-fast speeds and smooth execution of trades without worrying about server crashes or slowdowns.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: '24/7 Monitoring and Support',
      description:
        'A significant issue for VPS Forex hosting is security and reliability. Our dedicated team provides all-day, everyday monitoring for our servers so they are checked and issues diagnosed and solved before it might hit your trading. Constant upgradation of security processes maintains data safe and keeps Forex VPS safe and stable every moment.',
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Personalization and Flexibility',
      description:
        "We recognize that every trader has a specific need. That is why our Forex VPS hosting is totally customizable. We will collaborate with you and work with you to identify your requirements and tailor the server environment for optimal performance. Be it MetaTrader or any other platform, we've got you covered.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Cost-Effective Solutions',
      description:
        "We never compromise on quality. The low-cost Forex VPS solutions we offer will be in competition with other services yet will provide you with top-notch services. This is why we rank among the most reliable Forex VPS providers in the market. Get the best Forex VPS hosting without breaking your budget.",
    },
   
  ];
  

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Why Cloudminister is the Best Forex VPS Provider?</h2>
            <p className="mb-8 max-text-68">We at CloudMinister ensure that you enjoy the most efficient Forex VPS hosting so that you do not have to compromise with profits through uninterrupted and secured trading. Be it an experienced trader or a newcomer, Forex VPS servers are definitely what you require to emerge successful in the dynamic Forex market.</p>
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
                  24/7 Ticket Support
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
