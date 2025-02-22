const pricingData = [
    {
      id: 1,
      title: "SSL Starter",
      description: "Our most affordable, single domain, WordPress Hosting plan.",
      discount: "30% Sale",
      monthlyPrice: { current: "$30.99", original: "$99.99" },
      yearlyPrice: { current: "$299.00", original: "$24.91" },
      renewalPrice: "$7.99/mo when you renew",
      features: [
        { label: "Basic WooCommerce", status: "available" },
        { label: "100 000 Visits Monthly", status: "available" },
        { label: "Expert eCommerce Support", status: "unavailable" },
        { label: "Dedicated IP Address", status: "unavailable" },
        { label: "100 Websites", status: "available" },
        { label: "200 GB NVMe Storage", status: "available" },
        { label: "Warranty 10,000", status: "available" },
        { label: "Free Domain ($9.99 value)", status: "available" },
        { label: "Free SSL", status: "available" },
        { label: "30 Days Backups", status: "available" },
        { label: "Free Email", status: "available" },
      ],
      managedWooCommerce: [
        { label: "Standard Performance", status: "available" },
        { label: "100 Websites", status: "available" },
        { label: "100 GB SSD Storage", status: "available" },
        { label: "Unlimited Bandwidth", status: "available" },
        { label: "Unlimited Free SSL", status: "available" },
        { label: "Warranty 10,000", status: "available" },
      ],
    },
    {
        id: 1,
        title: "SSL Silver",
        description: "Our most affordable, single domain, WordPress Hosting plan.",
        discount: "30% Sale",
        monthlyPrice: { current: "$30.99", original: "$99.99" },
        yearlyPrice: { current: "$299.00", original: "$24.91" },
        renewalPrice: "$7.99/mo when you renew",
        features: [
          { label: "Basic WooCommerce", status: "available" },
          { label: "100 000 Visits Monthly", status: "available" },
          { label: "Expert eCommerce Support", status: "unavailable" },
          { label: "Dedicated IP Address", status: "unavailable" },
          { label: "100 Websites", status: "available" },
          { label: "200 GB NVMe Storage", status: "available" },
          { label: "Warranty 10,000", status: "available" },
          { label: "Free Domain ($9.99 value)", status: "available" },
          { label: "Free SSL", status: "available" },
          { label: "30 Days Backups", status: "available" },
          { label: "Free Email", status: "available" },
        ],
        managedWooCommerce: [
          { label: "Standard Performance", status: "available" },
          { label: "100 Websites", status: "available" },
          { label: "100 GB SSD Storage", status: "available" },
          { label: "Unlimited Bandwidth", status: "available" },
          { label: "Unlimited Free SSL", status: "available" },
          { label: "Warranty 10,000", status: "available" },
        ],
      },
      {
        id: 1,
        title: "SSL Gold",
        description: "Our most affordable, single domain, WordPress Hosting plan.",
        discount: "30% Sale",
        monthlyPrice: { current: "$30.99", original: "$99.99" },
        yearlyPrice: { current: "$299.00", original: "$24.91" },
        renewalPrice: "$7.99/mo when you renew",
        features: [
          { label: "Basic WooCommerce", status: "available" },
          { label: "100 000 Visits Monthly", status: "available" },
          { label: "Expert eCommerce Support", status: "unavailable" },
          { label: "Dedicated IP Address", status: "unavailable" },
          { label: "100 Websites", status: "available" },
          { label: "200 GB NVMe Storage", status: "available" },
          { label: "Warranty 10,000", status: "available" },
          { label: "Free Domain ($9.99 value)", status: "available" },
          { label: "Free SSL", status: "available" },
          { label: "30 Days Backups", status: "available" },
          { label: "Free Email", status: "available" },
        ],
        managedWooCommerce: [
          { label: "Standard Performance", status: "available" },
          { label: "100 Websites", status: "available" },
          { label: "100 GB SSD Storage", status: "available" },
          { label: "Unlimited Bandwidth", status: "available" },
          { label: "Unlimited Free SSL", status: "available" },
          { label: "Warranty 10,000", status: "available" },
        ],
      },
      {
        id: 1,
        title: "SSL Diamond",
        description: "Our most affordable, single domain, WordPress Hosting plan.",
        discount: "30% Sale",
        monthlyPrice: { current: "$30.99", original: "$99.99" },
        yearlyPrice: { current: "$299.00", original: "$24.91" },
        renewalPrice: "$7.99/mo when you renew",
        features: [
          { label: "Basic WooCommerce", status: "available" },
          { label: "100 000 Visits Monthly", status: "available" },
          { label: "Expert eCommerce Support", status: "unavailable" },
          { label: "Dedicated IP Address", status: "unavailable" },
          { label: "100 Websites", status: "available" },
          { label: "200 GB NVMe Storage", status: "available" },
          { label: "Warranty 10,000", status: "available" },
          { label: "Free Domain ($9.99 value)", status: "available" },
          { label: "Free SSL", status: "available" },
          { label: "30 Days Backups", status: "available" },
          { label: "Free Email", status: "available" },
        ],
        managedWooCommerce: [
          { label: "Standard Performance", status: "available" },
          { label: "100 Websites", status: "available" },
          { label: "100 GB SSD Storage", status: "available" },
          { label: "Unlimited Bandwidth", status: "available" },
          { label: "Unlimited Free SSL", status: "available" },
          { label: "Warranty 10,000", status: "available" },
        ],
      },
    // Add more pricing items here if needed
  ];
const EcommerceHostingPricing = () => {
  return (
    <>
       <div className="ecommerce-pricing pt-120 pb-60">
        <div className="pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7 text-center" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <span className="d-block fw-bold text-primary mb-3">
                            Technology Overview
                        </span>
                        <h2 className="text-white">
                            Why Choose Shared Hosting From Hostingrad?
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4">
                
               {
                pricingData.map((p,i)=> <div key={i} className="col-md-6 col-lg-4 col-xl-3" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                <div className="card border-0">
                    <div className="card-body price-card-item-one position-relative overflow-hidden px-xl-7 py-xl-9">
                        
                        {
                            p.title==="SSL Gold" && <div className="discount-badge gradient-bg">
                            <p className="text-white fw-bold mb-0">30% Sale</p>
                        </div>
                        }
                        <h6 className="mb-1">SSL Gold</h6>
                        <small>Our most affordable, single domain,
                            WordPress Hosting plan.</small>
                        <div className="mt-5">
                            <div className="monthly-price">
                                <h4>$30.99</h4>
                                <small className="fw-bold">Normally $99.99</small>
                            </div>
                            <div className="yearly-price">
                                <h4>$299.00</h4>
                                <small className="fw-bold">Normally $24.91</small>
                            </div>
                        </div>
                        <div className="monthly-price">
                            <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                <span className="btn-arrow__text">
                                    Add to Cart
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </a>
                            <small className="d-block fw-medium mt-2">$7.99/mo when you renew</small>
                        </div>
                        <div className="yearly-price">
                            <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                <span className="btn-arrow__text">
                                    Add to Cart
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </a>
                            <small className="d-block fw-medium mt-2">$7.99/mo when you renew</small>
                        </div>
                        <div className="mt-6">
                            <h6 className="mb-5 fs-16">Top Features</h6>
                            <ul className="list-unstyled d-flex flex-column gap-3 mb-6">
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-warning rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small><span className="fw-bold">Basic</span> WooCommerce</small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-warning rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small><span className="fw-bold">100 000</span> Visits Monthly</small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-danger rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-times"></i>
                                    </div>
                                    <small><span className="fw-bold">Expert</span>eCommerce Support</small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-danger rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-times"></i>
                                    </div>
                                    <small><span className="fw-bold">Dedicated</span> IP Address</small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-warning rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small><span className="fw-bold">100</span> Websites</small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-warning rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small><span className="fw-bold">200</span> GB NVMe Storage</small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small><span className="fw-bold">Free</span> Domain ($9.99 value)</small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small><span className="fw-bold">Free</span> SSL</small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small><span className="fw-bold">30</span> Days Backups</small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small><span className="fw-bold">Free</span> Email</small>
                                </li>
                            </ul>
                            <h6 className="mb-5 fs-16">Managed WooCommerce</h6>
                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>100 <span className="fw-bold">Websites</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-5 h-5 bg-success rounded-circle fs-12 lh-1 text-white d-grid place-content-center place-items-center text-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>)
               }
              
            </div>
        </div>
        <div className="pt-40">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="400" data-sal-delay="100" data-sal-easing="ease-in-out-sine">
                        <h6>Free Setup & Installation*</h6>
                        <p>Need help? We will set up and install your SSL
                            certificate free of charge!*</p>
                    </div>
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="450" data-sal-delay="150" data-sal-easing="ease-in-out-sine">
                        <h6>Best in Class Encryption</h6>
                        <p>Need help? We will set up and install your SSL
                            certificate free of charge!*</p>
                    </div>
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                        <h6>24x7 Support</h6>
                        <p>Need help? We will set up and install your SSL
                            certificate free of charge!*</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default EcommerceHostingPricing
