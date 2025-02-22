import { useState } from "react";

const PriceCard = ({ title, subtitle, linuxPricingData, windowsPricingData }) => {
  const [isYearly, setIsYearly] = useState(false); // Toggle for yearly/monthly
  const [expandedIndex, setExpandedIndex] = useState(null); // Track the expanded card index
  const [currentData, setCurrentData] = useState(linuxPricingData); // Default to Linux data

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const handleReadMore = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle the expanded card
  };

  return (
    <section className="pt-60 pb-60">
      <div className="pb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="text-center">
                <h2>{title}</h2>
                <p className="mb-0 mx-auto">{subtitle}</p>
              </div>

              {/* Toggle between Linux and Windows */}
              <div className="d-flex justify-content-center mt-5">
                <div className="pricing-nav-pills d-inline-block mx-auto py-2 px-3 border rounded-pill overflow-x-auto">
                  <ul className="nav nav-pills tab-nav-9 flex-nowrap">
                    <li className="nav-item flex-shrink-0">
                      <button
                        className={`text-black nav-link rounded-pill fs-14 ${
                          currentData === linuxPricingData ? "active" : ""
                        }`}
                        onClick={() => setCurrentData(linuxPricingData)}
                      >
                       Linux Dedicated
                      </button>
                    </li>
                    <li className="nav-item flex-shrink-0">
                      <button
                        className={`text-black nav-link rounded-pill fs-14 ${
                          currentData === windowsPricingData ? "active" : ""
                        }`}
                        onClick={() => setCurrentData(windowsPricingData)}
                      >
                       Windows Dedicated
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Toggle between Monthly and Yearly */}
              <div className="d-flex align-items-center justify-content-center gap-3 mt-5">
                <small className="fw-semibold">Monthly</small>
                <div className="form-check form-switch toggle-switch">
                  <input
                    onClick={handleToggle}
                    className="form-check-input pricing-toggle"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
                <small className="fw-semibold">Yearly</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container">
        <div className="row gy-4 gx-4">
          {currentData?.map((plan, index) => (
            <div key={index} className="col-xl-3 col-md-6">
              <div
                className={`price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end  ${
                  expandedIndex === index ? "expanded" : ""
                }`}
              >
                <div className="discount-badge gradient-bg">
                  <p className="text-white fw-bold mb-0">50% Sale</p>
                </div>
                <h6 className="mb-1" style={{ width: "70%" }}>
                  {plan.title}
                </h6>
                {/* <small>{plan.description}</small> */}
                <div className="mt-5">
                  {isYearly ? (
                    <div className="monthly-price">
                      <small className="fw-bold">Start From</small>
                      <h4>{plan?.pricing?.yearly?.currentPrice || "N/A"}</h4>
                      {plan?.pricing?.yearly?.normalPrice && (
                        <small className="fw-bold">
                          <del>{plan.pricing.yearly.normalPrice}</del>
                        </small>
                      )}
                    </div>
                  ) : (
                    <div className="monthly-price">
                      <small className="fw-bold">Start From</small>
                      <h4>{plan?.pricing?.monthly?.currentPrice || "N/A"}</h4>
                    </div>
                  )}
                </div>

                <div className="monthly-price">
                  <a
                    className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6"
                    href="#"
                  >
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
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="d-flex align-items-center gap-3">
                        <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                          <i className="las la-check"></i>
                        </div>
                        <small>{feature.text}</small>
                      </li>
                    ))}
                  </ul>
                  {expandedIndex === index && ( // Show extra features only if this card is expanded
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
                  <a
                    className="text-success-new mt-auto"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleReadMore(index)}
                  >
                    {expandedIndex === index ? "Show Less" : "Read More"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceCard;
