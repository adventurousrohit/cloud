import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Expert Data Analytics Support',
      description:
        "Our team of experienced data analysts provides customized solutions to unlock the full potential of your data. With a deep understanding of analytics tools and industry best practices, we transform your data into valuable insights, driving better business outcomes.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Comprehensive Data Analytics Solutions',
      description:
        "All steps - from data gathering to sophisticated analysis - we perform end-to-end services that align with your distinctive business requirements. Our solutions, including data visualization, predictive analytics, and business intelligence, leverage your data toward smarter decision-making and growth.",
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Data Monitoring & Reporting 24/7',
      description:
        "We keep monitoring your data environment, which means we offer you real-time analytics and insights. Our team ensures that the data is correct, accessible, and actionable for you to always stay ahead of trends and to improve operational efficiency at all times.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Affordable Data Analytics Services',
      description:
        "High-quality data analytics services are available at affordable prices. With our transparent pricing model, you will get the best value with no hidden costs. Scale up your analytics capabilities while staying within budget.",
    },
  ];
  

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-xxl-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Why Data Analytics Matters with CloudMinister?</h2>
            <p className="mb-8 max-text-68">Empowering your Data Analytic journey, every step of the way.</p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                Leverage advanced tools for accurate predictions
<span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Stay ahead with real-time data analysis
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>        
                  Enhance operational efficiency and reduce costs
                </span>
              </li>
            </ul>
          </div>
          <div className="col-xxl-7">
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
