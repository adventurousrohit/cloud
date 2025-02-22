import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Seamless IoT Management',
      description:
        'Managing IoT devices and networks is not easy, takes much time. With us, you have no worries; we offer comprehensive IoT management solutions so that all your devices will harmoniously and efficiently work for you.',
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Uncompromised Security',
      description:
        'IoT security is critical, and we’ve got it covered. Our experts monitor your networks 24/7 to prevent breaches and ensure data safety. Using the latest tools, we proactively address vulnerabilities and secure your IoT ecosystem.',
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Performance Optimization',
      description:
        'We specialize in improving IoT device performance with proven techniques. Our tailored solutions ensure your systems are reliable, scalable, and deliver seamless connectivity, empowering your business to thrive.',
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Expert Consultation',
      description:
        'Your business is unique, and so are your IoT needs. We collaborate closely to understand your requirements and design solutions tailored to your goals. With our support, your IoT infrastructure is in expert hands.',
    },
  ];
  
  

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Choosing the Excellence of CloudMinister to Secure IoT Development Services</h2>
            <p className="mb-8 max-text-68">While focusing on the IoT field, we aim to follow a centric approach according to this:</p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                Seamless IoT device integration for efficient communication.<span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  24/7 real-time analytics for optimized decision-making.
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  Advanced encryption ensures secure IoT networks.
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
