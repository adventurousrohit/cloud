import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Legendary Linode Support Services',
      description:
        "Cloudminister has been the pioneering outsourced Linode server support since 2012. With a commitment to excellence in quality, we have the highest standards in the industry in terms of rapid responses, dedicated support staff, and reliability unmatched by others. We offer our services to ensure your servers run smoothly, supported by the best in Linode system administration services.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Certified Experts for Top-Quality Linode Support',
      description:
        'Being always ahead in the latest technology is an important aspect understood well at Cloudminister. My team has AWS Certified Solutions Architects, AWS Database Specialists, Google Cloud Architects, GCP Security Engineers, and Network Engineers so that your Linode servers will get managed precisely and with care at each step. Certifications for your infrastructure from major cloud providers give you the promise that its in safe hands; the advanced tools and the latest technology are available there.',
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Profound Experience of Server Support',
      description:
        "With more than 1000 servers supported in a range of industries web hosting, website owners, and data centers, Cloudminister has developed a reputation for reliable, efficient Linode server management services. Success is found in treating each client's business with the utmost care, providing high performance and seamless operations.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: '24/7 Linode Server Monitoring & Support',
      description:
        "Need round-the-clock support for your Linode servers? Cloudminister provides 24x7 Linode server monitoring and management services, ensuring your systems are continuously optimized and secure. Whether it’s routine maintenance or urgent troubleshooting, our expert team is available 365 days a year to keep your infrastructure running smoothly.",
    },
  ];

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Why Choose CloudMinister for Linode Server Management?</h2>
            <p className="mb-8 max-text-68">We are more focused on a customer-centric approach, and thus results are guaranteed.</p>
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
                  24*7 Ticket Support
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
