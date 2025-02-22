import React, { useContext, useState } from 'react';
import { CurrencyContext } from '../../currencyconversion/Currencyconversion';
const Googleworkcard = ({ title, price, pricingData, subtitle }) => {
  const { convert, currency } = useContext(CurrencyContext);
  const [isYearly, setIsYearly] = useState(false);
  const [expanded, setExpanded] = useState({}); // To track expanded state for each plan

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const formatPrice = (price, currency) => {
    if (isNaN(price)) return price; // If the price is not a number, return it as is
  
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency === "INR" ? "INR" : "USD",
      minimumFractionDigits: 2,
    }).format(price);
  };
  const handleReadMore = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the specific plan's state
    }));
  };

  return (
    <>
      <section className="pt-60 pb-60">
        <div className="pb-40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="text-center">
                  <h2>{title}</h2>
                  <p className="mb-0 mx-auto">{subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gy-4 gx-4 justify-content-center">
            {pricingData?.map((plan, index) => (
              <div key={index} className="col-xl-3 col-md-6">
                <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end h-100">
                  {/* <div className="discount-badge gradient-bg">
                    <p className="text-white fw-bold mb-0">50% Sale</p>
                  </div> */}
                  <h6 className="mb-1" style={{ width: '70%' }}>
                    {plan.title}
                  </h6>
                  {/* <small>{plan.description}</small> */}
                  <div className="mt-5">
                    {isYearly ? (
                      <div className="monthly-price">
                        <small className="fw-bold">Start From</small>
                        <h4>{formatPrice(convert(plan?.pricing?.yearly?.currentPrice, 'INR', currency), currency)}</h4>
                        {plan?.pricing?.yearly?.normalPrice && (
                          <small className="fw-bold">
                            <del>{formatPrice(convert(plan.pricing.yearly.normalPrice, 'INR', currency), currency)}</del>
                          </small>
                        )}
                      </div>
                    ) : (
                      <div className="monthly-price">
                        <small className="fw-bold">User/</small>
                        <h4>{formatPrice(convert(plan?.pricing?.monthly?.currentPrice, 'INR', currency), currency)}</h4>
                      </div>
                    )}
                  </div>

                  <div className="monthly-price">
                    <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href={plan.href} target="_blank">
                      <span className="btn-arrow__text">
                        {plan.addToCartText}
                        <span className="btn-arrow__icon">
                          <i className={plan.addToCartIcon}></i>
                        </span>
                      </span>
                    </a>
                  </div>

                  <div className="mt-6">
                    <h6 className="mb-5">Top Features</h6>
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0 ">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-center gap-3">
                          <div className="w-3 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                            <i className="las la-check"></i>
                          </div>
                          <small>{feature.text}</small>
                        </li>
                      ))}
                    </ul>
                    {expanded[index] && ( // Show extra features if expanded
                      <ul className="list-unstyled d-flex flex-column gap-3 mt-3">
                        {plan.extraFeatures.map((feature, i) => (
                          <li key={i} className="d-flex align-items-center gap-3">
                            <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                              <i className="las la-check"></i>
                            </div>
                            <small>{feature.text}</small>
                          </li>
                        ))}
                      </ul>
                    )}
                    <a className="text-success-new mt-8" style={{ cursor: 'pointer' }} onClick={() => handleReadMore(index)}>
                      {expanded[index] ? 'Show Less' : 'Read More'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Googleworkcard;
