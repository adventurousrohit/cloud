import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuyCloud = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Instant Activation for Hassle-free Cloud Hosting',
      description:
        "At CloudMinister, we value your time. We provide instant activation for all cloud hosting services in India. Get your account set up for cloud hosting immediately, ensuring zero delays in reaching the best cloud hosting services in India. Start your journey with reliable and swift services right away!",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Fully Managed Cloud Hosting Solutions',
      description:
        "Experience the ease of completely managed cloud website hosting with CloudMinister. Our state-of-the-art Indian cloud servers are monitored round-the-clock by our expert team to deliver seamless performance. Say goodbye to the hassle and let us handle your hosting needs effortlessly.",
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Expert Support from Industry Professionals',
      description:
        "Our professional and friendly support team makes a difference. CloudMinister, therefore, ensures you receive excellent support for your cloud hosting in India through our competent professionals. Whether technical support or specially tailored solutions, we assure to make your business take flight.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Speed up your website with advanced technology',
      description:
        "Speed up your website like never before with CloudMinister's advanced caching technology. Our cloud server hosting services are designed to handle huge traffic while delivering blazing-fast performance, making us the go-to choice for the best cloud hosting in India.",
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
            <h2 className="h3 mb-3">Why Choose Cloudminister for Cloud Hosting in India?</h2>
            <p className="mb-8 max-text-68">
            Explore cheap cloud hosting without compromising quality and enjoy seamless performance with our innovative hosting solutions.
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

export default WhyBuyCloud;
