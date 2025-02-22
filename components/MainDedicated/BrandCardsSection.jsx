import React, { useContext } from "react";
import { CurrencyContext } from "../currencyconversion/Currencyconversion";
const BrandCardsSection = () => {
        const { convert, currency } = useContext(CurrencyContext);
  const brandCards = [
    {
      title: "Control Panel (Unlimited Domains*)",
      features: [
        { name: "Centos Web panel", price: "Free" },
        { name: "Centos Web panel Pro", price: "₹ 120.00/mo" },
        { name: "Cpanel Whm 1 User Account", price: "₹ 1,410.00/mo" },
        { name: "Cpanel Whm 100 User Account", price: "₹ 5,000.00/mo" },
      ],
    },
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
        { name: "Imunify AV", price: "₹ /mo" },
        { name: "Immunify AV+", price: "₹ 100.00/mo" },
        { name: "Immunify 360 (Single User)", price: "₹ 900.00/mo" },
        { name: "Immunify 360 (upto 30 Users)", price: "₹ 2,000.00/mo" },
        { name: "Bitninja (Single User)", price: "₹ 900.00/mo" },
        { name: "Bitninja (upto 40 Users)", price: "₹ 1,800.00/mo" },
      ],
    },
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
            Pick Suitable Control Panel for Your Dedicated Server
            </h2>
            <p className="mb-8 max-text-120">You may optimize your dedicated hosting server in India for unparalleled efficiency and dependability with our customizable control panel options, which guarantee smooth server management.</p>
          </div>
        </div>
        <div className="row g-4">
          {brandCards?.map((card, index) => (
            <div
              className="col-xl-4 col-md-6 "
              key={index}
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay={100 * (index + 1)}
              data-sal-easing="ease-in-out-sine"
            >
              <div className="brand-card px-5 py-8 border rounded-3 position-relative z-1 transition overflow-hidden h-100">
                <h3 className="fs-18 mb-2">{card.title}</h3>
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
                      {`${ feature.price === "Free" ||feature.price === "₹ /mo" ?"":currency === "INR" ? "₹" : "$"} ${ feature.price === "Free" ||feature.price === "₹ /mo" ? "Free" : convert(feature.price, "INR", currency) }`
}

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
