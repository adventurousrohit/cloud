import React, { useContext,useState } from "react";
import { CurrencyContext } from "../currencyconversion/Currencyconversion";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
const PriceCardWithTabs = ({ title, subtitle, pricingData }) => {
  const { currency, convert } = useContext(CurrencyContext);
  const [selectedTab, setSelectedTab] = useState("India"); // Default to "India"
  const [selectedPriceTab, setSelectedPriceTab] = useState("3 years");



  // Filter pricing data based on the selected tab
  const filteredData = pricingData?.plan?.filter((plan) => plan.region === selectedTab);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  };
  
  // Function to get converted and formatted price
  const getPrice = (plan) => {
    const price = plan?.pricing?.[selectedPriceTab]?.currentPrice;
    if (!price) return "N/A";
  
    const convertedPrice = convert(price, "INR", currency);
    return formatPrice(convertedPrice);
  };
  
  // Function to get converted and formatted normal price
  const getNormalPrice = (plan) => {
    const price = plan?.pricing?.[selectedPriceTab]?.normalPrice;
    if (!price) return "N/A";
  
    const convertedPrice = convert(price, "INR", currency);
    return formatPrice(convertedPrice);
  };


  const getDiscountText = (tab) => {
    console.log(tab,"tab")
    console.log(pricingData?.discount?.[tab]?.discount)
    return pricingData?.discount?.[tab]?.discount || "0%";
  };

  const countryCodes = {
    India: "in",
    US: "us",
    Singapore: "sg",
    Germany: "de",
  };
  

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

               {/* Pricing Tabs */}
              <div className="d-flex justify-content-center mt-4">
                <div className="pricing-nav-pills d-inline-block mx-auto py-2 px-3 border rounded-pill overflow-x-auto">
                  <TabList className="nav nav-pills flex-nowrap">
                    {pricingData?.plantime?.map((tab, index) => (
                      <Tab key={index} className="nav-item flex-shrink-0">
                        <button
                          className={`nav-link rounded-pill fs-14 cursor-pointer ${selectedPriceTab === tab ? "active" : ""}`}
                          onClick={() => setSelectedPriceTab(tab)}
                        >
                          {tab}
                          {pricingData?.discount?.[tab] && (
                            <span
                              className="badge rounded-pill bg-primary-subtle text-primary-emphasis"
                              style={{ marginLeft: "5px" }}
                            >
                              Save {getDiscountText(tab)}
                            </span>
                          )}
                        </button>
                      </Tab>
                    ))}
                  </TabList>
                </div>
              </div>

                {/* Tabs */}
                <TabList className="nav nav-pills justify-content-center mt-4" role="tablist">
                  {["India", "US", "Singapore", "Germany"].map((tabName) => (
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
                        <span className={`fi fi-${countryCodes[tabName]} img-fluid`}></span>
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
            {filteredData?.map((plan, index) => (
              <div key={index} className="col-xl-3 col-md-6">
                <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end h-100">
                  <div className="discount-badge gradient-bg">
                    <p className="text-white fw-bold mb-0">{getDiscountText(selectedPriceTab)}</p>
                  </div>
                  <h3 className="mb-1" style={{ width: "70%" }}>
                    {plan.title}
                  </h3>
                  {/* <small>{plan.description}</small> */}
                  <div className="mt-5">
                  <small className="fw-bold">Start From</small>
                  <h3>{getPrice(plan)}</h3>
                    <small className="fw-bold">
                      <del>{getNormalPrice(plan)}</del>
                    </small>
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
