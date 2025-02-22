import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Easy React.js Hosting for Your Business',
      description:
        "The hassle of running your React.js hosting environment needn't be yours. It's quite common for businesses to spend a lot of time managing their servers. We will handle all of the technical stuff, allowing you to grow your applications while our engineers provide you with seamless and stress-free React hosting services.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: '24/7 Security Guarantee',
      description:
        'Security is our top priority. Our dedicated team monitors your React.js hosting environment round the clock, proactively identifying and neutralizing potential threats. With robust measures like firewalls and DDoS protection, we ensure your applications remain safe and secure.',
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Unmatched Performance Optimization',
      description:
        "Specialized in high-performance hosting on React.js, the setup of servers fine-tuned to deliver maximum speed and reliability. Whether on Azure or elsewhere, our services promise your users a seamless ride; your applications always peak up and running.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Customized Solutions for Your Needs',
      description:
        "Our services are guided by your goals. Together, we discuss our understanding of what your requirements are, and how our hosting solution can fit with your business objectives. We give you hosting that works for you, not the other way around.",
    },
  ];
  

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Why Cloudminister is the Perfect Home for Your ReactJS App?</h2>
            <p className="mb-8 max-text-68">Cloudminister offers optimized performance, robust security, and seamless scalability for your ReactJS applications.</p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                Optimized ReactJS Performance for Faster Load Times<span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Enhanced Security for Your ReactJS Applications
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  24/7 Support for All Your ReactJS Hosting Needs
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
