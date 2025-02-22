import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuyDomainHostingard = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Blazing Fast Speed',
      description:
        "Each of our Dedicated Hosting Servers is carefully designed using the latest open-source technologies like OpenStack. This provides flexibility in scaling and optimizing server performance, ensuring that your website remains fast and responsive at all times.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Seamless Provisioning',
      description:
        "Our expert team ensures your dedicated hosting server is running and up before you even notice. Your server can get provisioned and its network connection quickly, and so you immediately start getting down to doing business with zero delay involved.",
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Expert Support Team',
      description:
        'We boast an extremely experienced support team at Cloudminister. Professionals are available around the clock to offer bespoke support in case you want to experience the best for your India and worldwide dedicated server services.',
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Advanced Security with SiteLock',
      description:
        'We understand that securing your website is a priority. All our dedicated hosting servers include SiteLock protection, which identifies and fixes vulnerabilities before they can harm your operations, keeping your data and users safe from potential threats.',
    },
  ];
  

  return (
    <div className="pt-120 pb-120 bg-primary bg-opacity-5">
      <div className="container">
        <div className="row align-items-start g-4">
          <div
            className="col-xxl-5"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease-in-out-sine"
          >
            <h2 className="h3 mb-3">Why Settle for Less? Choose Cloudminister’s Dedicated Hosting Today</h2>
            <p className="mb-8 max-text-48">
            Stay ahead in the digital world with Cloudminister's Dedicated Server Hosting solutions, designed to manage your critical websites with unparalleled performance and reliability.
            </p>
           
          </div>
          <div className="col-xxl-7">
            <div className="row g-4">
              {cardData?.map((card, index) => (
                <div
                  className="col-md-6"
                  key={index}
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  <div className="card hover-shadow rounded-3 border border-secondary transition h-100" >
                    <div className="card-body p-xl-6">
                      <div className="mb-4">
                        <img
                          src={card.imgSrc}
                          alt="icon"
                          className="img-fluid"
                          style={{width:"72px",height:"72px"}}
                        />
                      </div>
                      <h3 className="mb-4">{card.title}</h3>
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

export default WhyBuyDomainHostingard;
