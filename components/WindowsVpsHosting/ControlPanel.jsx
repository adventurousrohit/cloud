import React, { useContext } from "react";
import { CurrencyContext } from "../currencyconversion/Currencyconversion";
const pricingData = [
  {
    id: 1,
    title: "Control Panel",
    data: [
      { name: "Solid-CP", price: "Free" },
      { name: "Plesk Web Admin (10 Domains)", price: "₹ 800.00/mo" },
      { name: "Plesk Web Pro (30 Domains)", price: "₹ 1,200.00/mo" },
      { name: "Plesk Web Hosting Edition (Unlimited Domains)", price: "₹ 2,000.00/mo" },
    ],
  },
  {
    id: 2,
    title: "Backup Storage Box",
    data: [
      { name: "Nas Storage Box 1 TB", price: "₹ 1,000.00/mo" },
      { name: "Nas Storage Box 2 TB", price: "₹ 1,900.00/mo" },
      { name: "Acronis Storage Box 100 GB", price: "₹ 616.00/mo" },
      { name: "Acronis Storage Box 500 GB", price: "₹ 3,080.00/mo" },
      { name: "Acronis Storage Box 1000 GB", price: "₹ 6,160.00/mo" },
    ],
  },
  {
    id: 3,
    title: "Antivirus Per User",
    data: [
      { name: "Bitdefender", price: "₹ 250.00/mo" },
      { name: "Malwarebytes (Single User)", price: "₹ 275.00/mo" },
      { name: "Trend Micro", price: "₹ 250.00/mo" },
    ],
  },
];

const ControlPanel = () => {
      const { convert, currency } = useContext(CurrencyContext);
  return (
    <>
      <div className="container pt-120 pb-60 bg-dark extrasection">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-10">
            <div
              className="text-center pb-60"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <h2 className="mb-0 text-white">
              Choose The Best Control Panel for Managing Your Windows VPS Hosting
              </h2>
              <p className="text-white">
              Top control panels such as DirectAdmin, cPanel, and Webuzo allow effortless management of your Linux VPS. Website, domain, email, and database tasks become much simpler and save valuable time. So choose a plan that best suits you and enjoy seamless administration with smooth operations and complete comfort for your business.
              </p>
            </div>
          </div>
        </div>
        <section className="row g-3">
          {pricingData.map((item) => (
            <div
              key={item.id}
              className="col-md-6 col-lg-4 col-xl-4"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <div className="card" style={{height:"100%"}}>
                <div className="card-body p-xl-6">
                  <div className="mb-4">
                    <h5>{item?.title}</h5>
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0 mt-6">
                    {item.data &&
                      item.data.map((subItem, index) => (
                        <li
                          key={index}
                          className="d-flex justify-content-between align-items-center mt-2 mb-2"
                        > 
                         <div className="d-flex align-items-center gap-3">
                            <div className="w-4 h-4 bg-success flex-shrink-0 rounded-circle fs-10 lh-1 text-white d-flex align-items-center justify-content-center">
                                    <i className="las la-check"></i>
                              
                                </div>      <p className="mb-0" style={{fontSize:"14px",fontWeight:"500"}}>{subItem.name}</p>
                              </div>
                          <p className="fw-bold mb-0">{currency === "INR" ? "₹" : "$"} {convert(subItem.price, "INR", currency)}</p>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
           {/* <div
              className="col-md-6 col-lg-4 col-xl-12"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <div className="card" style={{height:"100%"}}>
                <div className="card-body p-xl-6">
                  <div className="mb-4">
                    <h5>1-Click App Installer</h5>
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0 mt-6">

                        <li
                          className="d-flex justify-content-between align-items-center mt-2 mb-2"
                        > 
                         <div className="d-flex align-items-center gap-3">
                            <div className="w-4 h-4 bg-success flex-shrink-0 rounded-circle fs-10 lh-1 text-white d-flex align-items-center justify-content-center">
                                    <i className="las la-check"></i>
                              
                                </div>      <p className="mb-0" style={{fontSize:"14px",fontWeight:"500"}}> Softaculous</p>
                              </div>
                          <p className="fw-bold mb-0">₹ 200/mo</p>
                        </li>
                  </ul>
                </div>
              </div>
            </div> */}
        </section>
      </div>
    </>
  );
};

export default ControlPanel;

