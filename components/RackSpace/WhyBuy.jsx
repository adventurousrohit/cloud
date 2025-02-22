import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
   const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: '24/7 Rackspace Server Monitoring',
      description:
        "Our dedicated team provides round-the-clock Rackspace System Administration Services, actively monitoring your servers to prevent potential issues and swiftly address any problems that arise. We ensure your server is always performing at its best.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Backup Support',
      description:
        "Daily and weekly backups are essential for data security. Our Outsourced Rackspace Server Support Services guarantee that your critical data is safely backed up, so you never have to worry about data loss or breaches.",
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Full Customer Support',
      description:
        "Our Rackspace Support Plan gives you continuous support from experts. Whether you require Rackspace Support Services or want help in troubleshooting, our team is always available to give you timely and effective solutions.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Uptime Guarantee',
      description:
        "Success depends on a reliable server. With CloudMinister's Rackspace Server Management Plan, you can enjoy a 99.99% uptime guarantee, ensuring your business stays online and running.",
    },
  ];
  

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Choose CloudMinister as your trusted RackSpace Server Management Partner</h2>
            <p className="mb-8 max-text-68">
            We give you the best Rackspace Server Management Services such that your servers are kept running efficiently and securely. With our expert Rackspace Server Administration Services, we take the complexity of server management out of the way, letting you do what matters most: business.</p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                Server setup and configuration<span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Robust security management
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  Performance monitoring and optimization
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  24/7 technical support
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  Tailored solutions for scalability
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
