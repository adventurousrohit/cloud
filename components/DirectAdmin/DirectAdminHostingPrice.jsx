import React from "react";

const pricingData = [
  {
    id: 1,
    title: "Starter Direct Admin Management",
    // price: "₹ 360.00/mo*",
    features: [
      { feature: "Server hardware analysis", enabled: true },
      { feature: "Server software analysis", enabled: true },
      { feature: "Security Tweaks and Optimizations", enabled: true },
      { feature: "Load management", enabled: true },
      { feature: "Optimizing web server performance", enabled: true },
      { feature: "Reverse proxy server optimization", enabled: true },
      { feature: "Apache, Nginx optimization", enabled: true },
      { feature: "MySQL Optimization", enabled: true },
      { feature: "L1 Support", enabled: true },
      { feature: "Website speed improvements tips", enabled: false },
      { feature: "Log management", enabled: false },
      { feature: "Basic database administration", enabled: false },
      { feature: "Database server setup", enabled: false },
      { feature: "Disk Partitioning, Disk Slicing", enabled: false },
      { feature: "Server planning and deployment", enabled: false },
      { feature: "Remote OS installation via KVM, iLO, etc", enabled: false },
      { feature: "DNS setup configuration", enabled: false },
      { feature: "Services configuration and implementation", enabled: false },
      { feature: "Software installations and upgradations", enabled: false },
      { feature: "cPanel/plesk Server Monitoring", enabled: false },
      { feature: "SSL Configuration and installation", enabled: false },
      { feature: "Backup planning for disaster recovery", enabled: false },
      { feature: "Installation and optimizing Firewall", enabled: false },
      {
        feature: "60 minute initial response for support Tickets.",
        enabled: false,
      },
      { feature: "Extra Migration support (Paid)", enabled: false }, // Paid feature
      { feature: "Migration Data limitation of 10GB only.", enabled: false },

      { feature: "24/7 Technical Support", enabled: false },
      { feature: "Unlimited Tickets", enabled: false },
      { feature: "Chat Support", enabled: false },
      { feature: "Call Support", enabled: false },
    ],
  },
  {
    id: 2,
    title: "Plus Direct Admin Management",
    // price: "₹ 360.00/mo*",
    features: [
      { feature: "Server hardware analysis", enabled: true },
      { feature: "Server software analysis", enabled: true },
      { feature: "Security Tweaks and Optimizations", enabled: true },
      { feature: "Load management", enabled: true },
      { feature: "Optimizing web server performance", enabled: true },
      { feature: "Reverse proxy server optimization", enabled: true },
      { feature: "Apache, Nginx optimization", enabled: true },
      { feature: "MySQL Optimization", enabled: true },
      { feature: "Website speed improvements tips", enabled: true },
      { feature: "Log management", enabled: true },
      { feature: "Basic database administration", enabled: true },
      { feature: "Database server setup", enabled: true },
      { feature: "Disk Partitioning, Disk Slicing", enabled: true },
      { feature: "Server planning and deployment", enabled: true },
      { feature: "Remote OS installation via KVM, iLO, etc", enabled: true },
      { feature: "DNS setup configuration", enabled: true },
      { feature: "Services configuration and implementation", enabled: true },
      { feature: "Software installations and upgradations", enabled: true },
      { feature: "cPanel/plesk Server Monitoring", enabled: true },
      { feature: "SSL Configuration and installation", enabled: true },
      { feature: "Backup planning for disaster recovery", enabled: true },
      { feature: "Installation and optimizing Firewall", enabled: true },
      { feature: "L1 to L2 Support", enabled: true },
      { feature: "Unlimited Tickets", enabled: true },
      {
        feature: "30 minute initial response for support Tickets.",
        enabled: false,
      },
      { feature: "Extra Migration support (Paid)", enabled: false }, // Paid feature
      { feature: "Migration Data limitation of 40GB only", enabled: false },
      { feature: "24/7 Technical Support", enabled: false },
      { feature: "Chat Support", enabled: false },
      { feature: "Call Support", enabled: false },
    ],
  },
  {
    id: 3,
    title: "Pro Direct Admin Management",
    // price: "₹ 360.00/mo*",
    features: [
      { feature: "Server hardware analysis", enabled: true },
      { feature: "Server software analysis", enabled: true },
      { feature: "Security Tweaks and Optimizations", enabled: true },
      { feature: "Load management", enabled: true },
      { feature: "Optimizing web server performance", enabled: true },
      { feature: "Reverse proxy server optimization", enabled: true },
      { feature: "Apache, Nginx optimization", enabled: true },
      { feature: "MySQL Optimization", enabled: true },
      { feature: "Website speed improvements tips", enabled: true },
      { feature: "Log management", enabled: true },
      { feature: "Basic database administration", enabled: true },
      { feature: "Database server setup", enabled: true },
      { feature: "Disk Partitioning, Disk Slicing", enabled: true },
      { feature: "Server planning and deployment", enabled: true },
      { feature: "Remote OS installation via KVM, iLO, etc", enabled: true },
      { feature: "DNS setup configuration", enabled: true },
      { feature: "Services configuration and implementation", enabled: true },
      { feature: "Software installations and upgradations", enabled: true },
      { feature: "cPanel/plesk Server Monitoring", enabled: true },
      { feature: "SSL Configuration and installation", enabled: true },
      { feature: "Backup planning for disaster recovery", enabled: true },
      { feature: "Installation and optimizing Firewall", enabled: true },
      {
        feature: "10 minute initial response for support Tickets.",
        enabled: true,
      },
      { feature: "Extra Migration support (Paid)", enabled: true }, // Paid feature
      { feature: "Migration Data limitation of 100GB only", enabled: true },
      { feature: "L1 to L3 Support", enabled: true },
      { feature: "24/7 Technical Support", enabled: true },
      { feature: "Unlimited Tickets", enabled: true },
      { feature: "Chat Support", enabled: true },
      { feature: "Call Support", enabled: true },
    ],
  },
];

const EcommerceHostingPricing = () => {
  return (
    <div className="ecommerce-pricing pt-120 pb-60">
      <div className="pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-10 col-lg-8 col-xl-7 text-center"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <h2 className="text-white">
                Choose Excellence: Admin Support Plans for Every Need!
              </h2>
            </div>
            <p className="text-white text-center">
              Explore our expertly designed Direct Admin Server Management plans
              perfectly set to your cPanel needs. Review the details below and
              contact us for personalized guidance in choosing your ideal plan
              with prices that fit your business needs.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {pricingData?.map((plan) => (
            <div
              key={plan.id}
              className="col-md-6 col-lg-4 col-xl-4"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="500"
              data-sal-easing="ease-in-out-sine"
            >
              <div className="card border-0 h-100 d-flex flex-column">
                <div className="card-body price-card-item-one position-relative overflow-hidden px-xl-7 py-xl-9 d-flex flex-column flex-grow-1">
                  <h3 className="mb-1">{plan.title}</h3>
                  <small className="mt-2">
                    Our most affordable, single-domain hosting plan.
                  </small>
                  <div className="mt-5">
                    <div className="monthly-price">
                      <h4>{plan.price}</h4>
                    </div>
                  </div>
                  <div className="mt-auto">
                    {" "}
                    {/* Ensures the button stays at the bottom */}
                    <a
                      className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6"
                      href="/contact/"
                    >
                      <span className="btn-arrow__text">
                        Talk to Expert
                        <span className="btn-arrow__icon">
                          <i className="las la-arrow-right"></i>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="mt-2 px-xl-7">
                  <h6 className="mb-5 fs-16" style={{paddingLeft:"10px"}}>Top Features</h6>
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-6 ">
                    {plan.features.map((f, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-center gap-3 "
                        style={{paddingLeft:"10px"}}
                      >
                        <div
                          className={`w-5 h-5 rounded-circle fs-12 lh-1 d-grid place-content-center place-items-center text-center flex-shrink-0 text-white ${
                            f.enabled ? "bg-success" : "bg-danger"
                          }`}
                        >
                          <i
                            className={`las ${
                              f.enabled ? "la-check" : "la-times"
                            }`}
                          ></i>
                        </div>
                        <small>{f.feature}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcommerceHostingPricing;
