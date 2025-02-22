import React, { useContext } from "react";
import { CurrencyContext } from "../currencyconversion/Currencyconversion";
const BrandCardsSection = () => {
     const { convert, currency } = useContext(CurrencyContext);
  const brandCards = [
    {
      title: "Control Panel (Unlimited Domains*)",
      features: [
        { name: "Solid-CP", price: "Free" },
        { name: "Plesk Web Admin (10 Domains)", price: "₹ 800.00/mo" },
        { name: "Plesk Web Pro (30 Domains)", price: "₹ 1,200.00/mo" },
        { name: "Plesk Web Hosting Edition (Unlimited Domains)", price: "₹ 2,000.00/mo" },
      ],
    }
,    
    {
      title: "Backup Storage Box",
      features: [
        { name: "Nas Storage Box 1 TB", price: "₹ 1,000.00/mo" },
        { name: "Nas Storage Box 2 TB", price: "₹ 1,900.00/mo" },
        { name: "Acronis Storage Box 100 GB", price: "₹ 616.00/mo" },
        { name: "Acronis Storage Box 500 GB", price: "₹ 3,080.00/mo" },
        { name: "Acronis Storage Box 1000 GB", price: "₹ 6,160.00/mo" },
      ],
    },
    {
      title: "Antivirus Per User",
      features: [
        { name: "Bitdefender", price: "₹ 250.00/mo" },
        { name: "Malwarebytes (Single User)", price: "₹ 275.00/mo" },
        { name: "Trend Micro", price: "₹ 250.00/mo" },
      ],
    }
    
  ];

  return (
    <section className="pt-60 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h2
              className="mb-8"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
           Enhance Your Windows Dedicated Hosting Plan with Premium Control Panels
            </h2>
            <p className="mb-8 max-text-120">Use robust tools like Webuzo, cPanel, or DirectAdmin to streamline the administration of your dedicated server. Easily manage database, email, domain, and website tasks. Select a subscription plan that guarantees seamless administration with unparalleled ease and saves time.</p>
          </div>
        </div>
        <div className="row g-4">
          {brandCards.map((card, index) => (
            <div
              className="col-xl-4 col-md-6 "
              key={index}
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay={100 * (index + 1)}
              data-sal-easing="ease-in-out-sine"
            >
              <div className="brand-card px-5 py-8 border rounded-3 position-relative z-1 transition overflow-hidden h-100">
                <h6 className="fs-18 mb-2">{card.title}</h6>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0 mt-4">
                  {card.features.map((feature, idx) => (
                    <li
                      className="d-flex align-items-center justify-content-between gap-3"
                      key={idx}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="w-4 h-4 bg-success flex-shrink-0 bg-opacity-75 rounded-circle fs-10 lh-1 text-white d-flex align-items-center justify-content-center">
                          <i className="las la-check"></i>
                        </div>
                        <small className="fw-medium">{feature.name}</small>
                      </div>
                      <small className="fw-medium text-end text-muted">
                      {`${ feature.price === "Free" ||feature.price === "₹ /mo" ?"":currency === "INR" ? "₹" : "$"} ${ feature.price === "Free" ||feature.price === "₹ /mo" ? "Free" : convert(feature.price, "INR", currency) }`}
                      </small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCardsSection;
