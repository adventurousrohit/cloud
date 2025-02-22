import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuyDomainHostingard = () => {
  const cardData = [
    {
      imgSrc: '/img/budgeting.png',
      title: 'Budget-Friendly Windows Hosting Excellence',
      description:
        "CloudMinister provides budget-friendly Windows hosting solutions without any hidden charges or compromises. Scale your business seamlessly with shared Windows hosting, delivering premium performance at unbeatable value.",
    },
    {
      imgSrc: '/img/privacy-policy.png',
      title: 'Secure Data Privacy',
      description:
        "Your data's security is our top priority. Our Windows hosting in India ensures robust privacy measures for peace of mind.",
    },
    {
      imgSrc: '/img/expert.png',
      title: 'Expert Support',
      description:
        "Tailor-made assistance from our Windows hosting experts, from setting up to troubleshooting, CloudMinister delivers smooth Windows web hosting support.",
    },
    {
      imgSrc: '/img/lean-management.png',
      title: 'Easy Domain Management',
      description:
        "Enjoy hassle-free management with a wide variety of domain extensions and a very user-friendly control panel for your Windows hosting server.",
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
            <h2 className="h3 mb-3">Discover Why Cloudminister Is Perfect for Your Windows Shared Hosting Needs</h2>
            <p className="mb-8 max-text-68">
            Choose Cloudminister for blazing-fast, ultra-reliable shared hosting that turns your vision into reality—seamlessly, securely, and with unmatched excellence!
            </p>
            <ul className="list-unstyled m-0 p-0">
                                        <li className="d-flex align-items-center gap-2 mb-3">
                                            <span
                                                className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                                                <i className="las la-check"></i>
                                            </span>
                                            <span className="d-block text-black text-opacity-75 fs-14">
                                                
Supper Fast,Secure & Always up<span className="d-inline-block config-info-1"></span>
                                            </span>
                                        </li>

                                        <li className="d-flex align-items-center gap-2 mb-3">
                                            <span
                                                className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                                                <i className="las la-check"></i>
                                            </span>
                                            <span className="d-block text-black text-opacity-75 fs-14">
                                                <span className="d-inline-block config-info-2"></span>
                                                1-Click Instant WordPress Install
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2 mb-3">
                                            <span
                                                className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                                                <i className="las la-check"></i>
                                            </span>
                                            <span className="d-block text-black text-opacity-75 fs-14">
                                                <span className="d-inline-block config-info-3"></span> Zero-Risk, 30 days Credit-Back Gaurentee*
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2 mb-3">
                                            <span
                                                className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                                                <i className="las la-check"></i>
                                            </span>
                                            <span className="d-block text-black text-opacity-75 fs-14">
                                            Server Location: Mumbai, India
                                            </span>
                                        </li>
                                    </ul>
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
