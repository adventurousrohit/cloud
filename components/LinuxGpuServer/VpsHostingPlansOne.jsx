import React, { useState, useContext } from 'react';
import { CurrencyContext } from '../currencyconversion/Currencyconversion';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
const PriceCardWithTabs = ({ title, subtitle, pricingData }) => {
    const { convert, currency } = useContext(CurrencyContext);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Linux A30"); // Default to "India"

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const formatPrice = (price, currency) => {
    if (isNaN(price)) return price; // If it's not a number, return as is (e.g., "N/A", "Free")

    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency === 'INR' ? 'INR' : 'USD',
      minimumFractionDigits: 2,
    }).format(price);
  };

  // Filter pricing data based on the selected tab
  const filteredData = pricingData.filter((plan) => plan.region === selectedTab);

  return (
    <>
      <section className="pt-60 pb-60">
        <div className="pb-40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="text-center ">
                  <h2 className="">{title}</h2>
                  <p className="mb-0 mx-auto">{subtitle}</p>
                </div>
                <TabList className="nav nav-pills justify-content-center mt-4" role="tablist">
                  {["Linux A30", "Linux L4", "Linux V100","GPU A100","GPU L40s","Linux A40","Linux T4"].map((tabName) => (
                    <Tab
                      key={tabName}
                      onClick={() => setSelectedTab(tabName)}
                      className="nav-item"
                    >
                      <a
                        type="button"
                        className={`partner-tab-nev d-inline-block text-decoration-none  fw-bold px-3 pb-2 ${
                          selectedTab === tabName ? "active" : ""
                        }`}
                      >
                        {tabName}{" "}
                      </a>
                    </Tab>
                  ))}
                </TabList>
              </div>
            </div>
          </div>
        </div>

        {/* Price Cards */}
        <div className="container">
          <div className="row gy-4 gx-4 m-auto">
            {filteredData.map((plan, index) => (
              <div key={index} className="col-xl-3 col-md-6">
                <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end h-100">
                  {/* <div className="discount-badge gradient-bg">
                    <p className="text-white fw-bold mb-0">50% Sale</p>
                  </div> */}
                  <h3 className="mb-1" style={{ width: "70%" }}>
                    {plan.title}
                  </h3>
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
                        <small className="fw-bold">Start From</small>
                        <h4>{formatPrice(convert(plan?.pricing?.monthly?.currentPrice, 'INR', currency), currency)}</h4>
                      </div>
                    )}
                  </div>

                  <div className="monthly-price">
                    <a
                      className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6"
                      href={plan.url}
                      target="_blank"
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

export default PriceCardWithTabs;
