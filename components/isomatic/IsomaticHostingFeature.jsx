import React from 'react';
import featureImg1 from '/img/feature-img-1.png';
import iconFeatures1 from '/img/icon-features-1.png';
import iconFeatures2 from '/img/icon-features-2.png';
import iconFeatures3 from '/img/icon-features-3.png';
import iconFeatures4 from '/img/icon-features-4.png';

const IsomaticHostingFeature = () => {
  const featuresLeft = [
    'Instant Server Setup',
    'High-Performance Hardware',
    'Easy Configuration',
    '3 Day Moneyback Guarantee',
    '24/7 Customer Support',
  ];

  const featuresRight = [
    'Instant Server Setup',
    'Powered by NVMe SSDs',
    'Easy Configuration',
    '3 Day Moneyback Guarantee',
    '24/7 Customer Support',
  ];

  const cards = [
    {
      img: iconFeatures1,
      title: 'Easy Website Management',
      description:
        'Guarantee reliability for websites, apps or Servers. We deliver round-the-clock, for your fast expanding business!',
    },
    {
      img: iconFeatures2,
      title: 'Guaranteed Migration',
      description:
        'Guarantee reliability for websites, apps or Servers. We deliver round-the-clock, for your fast expanding business!',
    },
    {
      img: iconFeatures3,
      title: '24/7 Expert Support',
      description:
        'Guarantee reliability for websites, apps or Servers. We deliver round-the-clock, for your fast expanding business!',
    },
    {
      img: iconFeatures4,
      title: 'Free Domain & SSL Certificates',
      description:
        'Guarantee reliability for websites, apps or Servers. We deliver round-the-clock, for your fast expanding business!',
    },
  ];

  return (
    <section className="pt-60 pb-120">
      <div className="pb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <div
                className="text-center"
                data-sal="slide-up"
                data-sal-duration="300"
                data-sal-delay="50"
                data-sal-easing="ease-in-out-sine"
              >
                <h3>Advanced Hosting Features</h3>
                <p className="mb-0 mx-auto max-text-52">
                  Managed Web Hosting Solutions bringing the success of your next online mission! Starting at{' '}
                  <span className="fw-bold text-primary">$2.49 including</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="row g-4"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="ease-in-out-sine"
        >
          <div className="col-lg-5">
            <div className="card">
              <div className="card-body p-xl-6">
                <div className="text-center pb-4">
                  <img src={featureImg1} alt="Included Feature" className="img-fluid" />
                </div>
                <h5>Included Feature All Package</h5>
                <p className="mb-0">
                  Managed Web Hosting Solutions bringing the success of your next online mission! Starting at{' '}
                  <span className="fw-bold text-primary">$2.49 including</span>
                </p>
                <div className="pt-4 pb-4">
                  <div className="row g-3">
                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                        {featuresLeft.map((feature, index) => (
                          <li key={index} className="d-flex align-items-center gap-2">
                            <div className="w-4 h-4 bg-success flex-shrink-0 rounded-circle fs-10 lh-1 text-white d-flex align-items-center justify-content-center">
                              <i className="las la-check"></i>
                            </div>
                            <small className="d-inline-block fw-semibold">{feature}</small>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                        {featuresRight.map((feature, index) => (
                          <li key={index} className="d-flex align-items-center gap-2">
                            <div className="w-4 h-4 bg-success flex-shrink-0 rounded-circle fs-10 lh-1 text-white d-flex align-items-center justify-content-center">
                              <i className="las la-check"></i>
                            </div>
                            <small className="d-inline-block fw-semibold">{feature}</small>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              {cards.map((card, index) => (
                <div key={index} className="col-md-6">
                  <div className="card h-100">
                    <div className="card-body p-xl-6">
                      <div className="mb-10">
                        <img src={card.img} alt={card.title} className="img-fluid" />
                      </div>
                      <h6>{card.title}</h6>
                      <p className="mb-7">{card.description}</p>
                      <a
                        href="#"
                        className="text-decoration-none d-inline-flex align-items-center gap-2 fs-14 px-0 text-heading fw-semibold btn-arrow btn-arrow-sm"
                      >
                        <span className="d-inline-block btn-arrow__text">
                          Explore More
                          <span className="btn-arrow__icon">
                            <i className="las la-arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsomaticHostingFeature;
