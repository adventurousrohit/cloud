import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Unused/Insecure Services Deactivation ',
      description:
        "We make sure your Webmin server is optimized and secure by deactivating unused services, thus reducing the attack surface and making sure there is proper resource allocation.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Focused and Reliable Webmin Management',
      description:
        'Management of Webmin can be quite overwhelming, especially to commercial houses with no knowledge in-house. But that is exactly what we are for. Our Webmin management experts ensure your servers are running smoothly so that you have more time to concentrate on your business and not the server',
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Always Enhancing Server Security',
      description:
        "We are dedicated to securing your Webmin server. Our team keeps a constant watch, using the most up-to-date tools and techniques to detect vulnerabilities and get them resolved swiftly. Your server's security is our top priority.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Performance Optimization at Its Best',
      description:
        "Webmin server performance can hugely impact your business operations. Through our VPS management expertise, we optimize the performance, reliability, and uptime of your server to guarantee a smooth, seamless user experience. With Cloudminister, your Webmin server will be at its peak performance.",
    },
  ];

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Comprehensive Webmin Server Solutions for Business Success</h2>
            <p className="mb-8 max-text-68">Choosing CloudMinister basically works with the focused mindset by the following:- </p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                Apache & Mail Server Tweaking<span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  24/7 Ticket Support
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  Customer-Centric Approach for Guaranteed Results
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
