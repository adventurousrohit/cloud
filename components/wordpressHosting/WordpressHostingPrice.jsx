const plans = [
    {
      name: 'WordPress Starter',
      description: 'Our most affordable, single domain, WordPress Hosting plan.',
      monthlyPrice: '$30.99',
      monthlyDiscount: 'Normally $99.99',
      yearlyPrice: '$299.00',
      yearlyDiscount: 'Normally $24.91',
      monthlyRenewPrice: '$7.99/mo when you renew',
      yearlyRenewPrice: '$24.91/mo when you renew',
      features: [
        { text: 'Standard', highlight: 'Performance' },
        { text: '100', highlight: 'Websites' },
        { text: '100 GB', highlight: 'SSD Storage' },
        { text: 'Unlimited', highlight: 'Bandwidth' },
        { text: 'Unlimited', highlight: 'Free SSL' },
        { text: 'Warranty', highlight: '10,000' },
      ],
    },
    {
      name: 'WordPress Standard',
      description: 'Our most affordable, single domain, WordPress Hosting plan.',
      discount: '30% Sale',
      monthlyPrice: '$30.99',
      monthlyDiscount: 'Normally $99.99',
      yearlyPrice: '$299.00',
      yearlyDiscount: 'Normally $24.91',
      monthlyRenewPrice: '$7.99/mo when you renew',
      yearlyRenewPrice: '$24.91/mo when you renew',
      features: [
        { text: 'Standard', highlight: 'Performance' },
        { text: '100', highlight: 'Websites' },
        { text: '100 GB', highlight: 'SSD Storage' },
        { text: 'Unlimited', highlight: 'Bandwidth' },
        { text: 'Unlimited', highlight: 'Free SSL' },
        { text: 'Warranty', highlight: '10,000' },
      ],
    },
    {
      name: 'WordPress Premium',
      description: 'Our most affordable, single domain, WordPress Hosting plan.',
      monthlyPrice: '$30.99',
      monthlyDiscount: 'Normally $99.99',
      yearlyPrice: '$299.00',
      yearlyDiscount: 'Normally $24.91',
      monthlyRenewPrice: '$7.99/mo when you renew',
      yearlyRenewPrice: '$24.91/mo when you renew',
      features: [
        { text: 'Standard', highlight: 'Performance' },
        { text: '100', highlight: 'Websites' },
        { text: '100 GB', highlight: 'SSD Storage' },
        { text: 'Unlimited', highlight: 'Bandwidth' },
        { text: 'Unlimited', highlight: 'Free SSL' },
        { text: 'Warranty', highlight: '10,000' },
      ],
    },
  ];
  import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WordpressHostingPrice = () => {
    const [isYearly, setIsYearly] = useState(false);

    const handleToggle = () => {
      setIsYearly(!isYearly);
    };
  return (
    <>
       <section className="pt-80 pb-120">
      <div className="pb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div
                className="text-center"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <h2 className="mb-4">WordPress Hosting Plan</h2>
                <p className="max-text-60 mx-auto">
                  SSL is industry-standard encryption! Protect important data, win visitors Pick a plan from the SSL
                  certificates below.
                </p>
              </div>
              <div
                className="d-flex align-items-center justify-content-center gap-3"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <small className="fw-semibold">Monthly</small>
                <div className="form-check form-switch toggle-switch">
                  <input
                    className="form-check-input pricing-toggle"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={handleToggle}
                    checked={isYearly}
                  />
                </div>
                <small className="fw-semibold">Yearly</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 g-lg-2 g-xl-4">
          {/* Hosting Plan Cards */}
          {plans.map((plan, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay={300 + index * 100}
              data-sal-easing="ease-in-out-sine"
            >
              <div className="card border-0">
                <div className="card-body position-relative overflow-hidden px-4 px-md-6 px-xl-8 px-xxl-10 py-8 py-md-10 shadow-lg rounded-3 text-center">
                  {plan.discount && (
                    <div className="discount-badge gradient-bg">
                      <p className="text-white fw-bold mb-0">{plan.discount}</p>
                    </div>
                  )}
                  <h6 className="mb-1">{plan.name}</h6>
                  {/* <small>{plan.description}</small> */}
                  <div className="mt-5">
                    {isYearly ? (
                      <div className="monthly-price">
                        <h4>{plan.yearlyPrice}</h4>
                        <small>{plan.yearlyDiscount}</small>
                      </div>
                    ) : (
                      <div className="monthly-price">
                        <h4>{plan.monthlyPrice}</h4>
                        <small>{plan.monthlyDiscount}</small>
                      </div>
                    )}
                  </div>
                  <div className="my-6">
                    <ul className="list-unstyled d-flex flex-column gap-3 m-0">
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>
                          <small>
                            {feature.text} <span className="fw-bold">{feature.highlight}</span>
                          </small>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                      <span className="btn-arrow__text">
                        Add to Cart
                        <span className="btn-arrow__icon">
                          <i className="las la-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                    <small className="d-block fw-medium mt-2">
                      {isYearly ? plan.yearlyRenewPrice : plan.monthlyRenewPrice}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
};

export default WordpressHostingPrice
