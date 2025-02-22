import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuy = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Dedicated to Seamless Python Web Hosting Solutions',
      description:
        "Python web application hosting demands experience and accuracy. We here at CloudMinister try to ease the process of Python web hosting for you. Thus, you can have a better focus on your code instead of server management. Our experts ensure your Python apps run smoothly over high-performance servers.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Security Never Sleeps',
      description:
        'Your Python applications deserve the best protection. Our team watches and secures your Python hosting environment 24/7. We use state-of-the-art tools and technologies to detect and prevent security threats so that your Python code remains safe and your data is protected.',
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Optimizing Your Python Hosting Performance',
      description:
        "CloudMinister excels at optimizing the environment of Python web hosting. We optimize our servers for faster load times, greater reliability, and higher scalability. From simple web applications using Python to databases or heavy computations, our hosting solutions will provide a smooth ride for your users.",
    },

    {
      imgSrc: '/img/support.png',
      title: 'Always Here for You – 24/7 Customer Support',
      description:
        "With CloudMinister, you are never alone. We have a dedicated customer support team available 24/7 to help you with all issues that may arise concerning your Python hosting. You can call us for technical support or general inquiries and we'll make sure that your Python hosting experience is smooth and hassle-free.",
    },
  ];
  
  

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <h2 className="h3 mb-3">Choose the Best Python Cloud Hosting by CloudMinister</h2>
            <p className="mb-8 max-text-68">Choose CloudMinister's Python cloud hosting for scalable, safe, and high-performance solutions. Our knowledgeable and professional experts' uptime, optimal performance, and round-the-clock assistance make it the ideal option for your Python applications or web.</p>
            <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                Optimization of Idle & Vulnerable Resources<span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  Enhanced Server Customization
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-black text-opacity-75 fs-14">
                  <span className="d-inline-block config-info-3"></span>
                  24/7 Developer-Centric Support
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
