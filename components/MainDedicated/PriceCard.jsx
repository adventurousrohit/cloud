import { useState ,useContext} from "react";
import { CurrencyContext } from "../currencyconversion/Currencyconversion";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const PriceCard = ({
  title,
  subtitle,
  linuxPricingData,
  windowsPricingData,
}) => {
  const { convert, currency } = useContext(CurrencyContext);
  const [isYearly, setIsYearly] = useState(false); // Toggle for yearly/monthly
  const [expandedIndex, setExpandedIndex] = useState(null); // Track the expanded card index
  const [currentData, setCurrentData] = useState(linuxPricingData); // Default to Linux data
  const [selectedTab, setSelectedTab] = useState(currentData?.plantime?.[0]);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const handleReadMore = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle the expanded card
  };

  const getPrice = (plan) => {
    const price = plan?.pricing?.[selectedTab]?.currentPrice;
    if (!price) return "N/A";
  
    const convertedPrice = convert(price, "INR", currency);
    return formatPrice(convertedPrice);
  };
  
  // Function to get converted and formatted normal price
  const getNormalPrice = (plan) => {
    const price = plan?.pricing?.[selectedTab]?.normalPrice;
    if (!price) return "N/A";
  
    const convertedPrice = convert(price, "INR", currency);
    return formatPrice(convertedPrice);
  };
  
  // Function to format price with commas
  const formatPrice = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  };
  const getDiscountText = (tab) => {
    return currentData?.discount?.[tab]?.discount || "0%";
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
              <div className="d-flex justify-content-center mt-4">
                <div className="pricing-nav-pills d-inline-block mx-auto py-2 px-3 border rounded-pill overflow-x-auto">
                  <TabList className="nav nav-pills flex-nowrap">
                    {currentData?.plantime?.map((tab, index) => (
                      <Tab key={index} className="nav-item flex-shrink-0">
                        <button
                          className={`nav-link rounded-pill fs-14 cursor-pointer ${
                            selectedTab === tab ? "active" : ""
                          }`}
                          onClick={() => setSelectedTab(tab)}
                        >
                          {tab}
                          {currentData?.discount?.[tab] && (
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
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container">
        <div className="row gy-4 gx-4">
          {currentData?.plan?.map((plan, index) => (
            <div key={index} className="col-xl-3 col-md-6">
              <div
                className={`price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end  ${
                  expandedIndex === index ? "expanded" : ""
                }`}
              >
                <div className="discount-badge gradient-bg">
                  <p className="text-white fw-bold mb-0">
                    {getDiscountText(selectedTab)}
                  </p>
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
