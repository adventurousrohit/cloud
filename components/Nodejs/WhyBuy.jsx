import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'We Are Focused',
      description:
        'Running a Node.js server is complex and time-consuming. Businesses often face difficulties in maintaining an optimized hosting environment. With our expert help, managing your Node.js hosting becomes easy. Whether you are looking for Node.js hosting in India or anywhere else in the world, we handle the complexities while you focus on your goals.',
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'We Continuously Improve Security',
      description:
        'Node.js server hosting places security at the top of its priority list. Our team is on a watch 24/7 to prevent and resolve vulnerabilities in your hosting environment. Using the latest tools and technologies, we ensure your Node.js server is always protected against threats, offering you peace of mind.',
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Optimization of Performance',
      description:
        'With years of experience in Node.js hosting, we know how to fine-tune server performance to its peak. Our optimization techniques ensure fast, reliable, and secure hosting for Node.js applications, enabling you to deliver an outstanding experience to your clients.',
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Consultation',
      description:
        "Your satisfaction is our top priority. We discuss in depth every detail of your needs and requirements before initiating a project. From cheap Node.js hosting to premium solutions, we design our services in accordance with your business objectives and provide you with the hosting experience you've been expecting.",
    },
  ];
  

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Why Choose Cloudminister for Your NodeJS Hosting Needs</h2>
            <p className="mb-8 max-text-68">Our Node.js hosting service offers robust and scalable infrastructure, fine-tuned to support your applications seamlessly. We are proactive in deactivating unused or insecure services to ensure a safe hosting environment. </p>
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
                  Node.js Application Optimization
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  24*7 Ticket Support
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
