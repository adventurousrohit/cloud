const pricingData = [
  {
    title: "Reseller Hosting",
    features: [
      "5 Cpanel Accounts",
      "10 GB SSD Storage",
      "Unlimited Bandwidth",
      "Free Letsencrypt ssl"
    ],
    price: "₹ 360.00/mo*"
  },
  {
    title: "Personal Cloud Hosting",
    features: [
      "2 CPU Cores",
      "2 GB RAM",
      "Host 1 Website",
      "Unmetered† Disk Space"
    ],
    price: "₹ 455.00/mo*"
  },
  {
    title: "Positive SSL",
    features: [
      "1 Domain",
      "No paperwork Required",
      "Domain Validation",
      "Unlimited Re-issue"
    ],
    price: "₹ 1,200.00/yr*"
  },
  {
    title: "Wildcard SSL Certificates",
    features: [
      "Domain + Unlimited Subdomains",
      "Unlimited Re-issue",
      "Free Installation Support",
      "No paperwork Required"
    ],
    price: "₹ 8,000.00/yr*"
  },
  {
    title: "Office 365 plan",
    subtitle: "Business Starter",
    features: [
      "Cloud Storage",
      "Basic security and admin controls",
      "Standard security",
      "Epic Customer Support",
    ],
    price: "₹ 125.00 user/mo",
  },
  {
    title: "Google Workspace",
    subtitle: "Business Starter",
    features: [
      "Cloud Storage",
      "Basic security and admin controls",
      "Custom and secure business email",
      "Standard Support",
    ],
    price: "₹ 125.00 user/mo",
  },
  {
    title: "VPS Hosting",
    subtitle: "",
    features: [
      "2 GB RAM",
      "40 GB NVME SSD",
      "1 Ip Address",
      "Unlimited Bandwidth",
    ],
    price: "₹ 840.00/mo*",
  },
 
  ];
const SslPrice = () => {
  return (
        <>
      <div className="container pt-60 pb-60">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <div className="text-center pb-60" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              <span className="d-block fw-semibold text-primary">
                Pricing list
              </span>
              <h2 className="mb-0">
                Pricing list
              </h2>
            </div>
          </div>
        </div>
        <section className="row g-4">
  {pricingData?.map((item, index) => (
    <div
      key={index}
      className="col-md-6 col-lg-4 col-xl-3"
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease-in-out-sine"
    >
      <div className="card" style={{height:"100%"}}>
        <div className="card-body p-xl-6 d-flex flex-column">
          <div className="mb-4">
            <h6>{item.title}</h6>
            {/* {item.subtitle && <p>{item.subtitle}</p>} */}
          </div>
          <p className="mb-6 fs-14">
            <ul style={{padding:"0"}}>
              {item?.features?.map((feature, index) => (
                <li key={index} className="d-flex align-items-center gap-2 mt-2 mb-2">
                  <div className="w-4 h-4 flex-shrink-0 rounded-circle fs-10 lh-1 d-flex align-items-center justify-content-center bg-success text-white">
                    <i className="las la-check"></i>
                  </div>
                  <p className="fw-bold mb-0">{feature}</p>
                </li>
              ))}
            </ul>
          </p>
          
          <div className="mt-auto">
          <h4 className=" mb-4">
  {item.price.split(" ")[0]} <span className="fs-24">{item.price.split(" ")[1].split("/")[0]}</span>
  <span className="fs-14 text-body fw-medium">/{item.price.split("/")[1]}</span>
</h4>
            <a
              href="#"
              className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded w-100"
            >
              <span className="btn-arrow__text">
                Register
                <span className="btn-arrow__icon">
                  <i className="las la-arrow-right"></i>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  ))}
</section>

        {/* <div className="pt-60" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
          <div className="row g-4">
            <div className="col-md-4">
              <h6 className="fs-18 text-center">
                Free Setup & Installation*
              </h6>
              <p className="mb-0 text-center">
                Need help? We will set up and install your SSL certificate free of charge!*
              </p>
            </div>
            <div className="col-md-4">
              <h6 className="fs-18 text-center">
                Best in Class Encryption
              </h6>
              <p className="mb-0 text-center">
                Need help? We will set up and install your SSL certificate free of charge!*
              </p>
            </div>
            <div className="col-md-4">
              <h6 className="fs-18 text-center">
                24x7 Support
              </h6>
              <p className="mb-0 text-center">
                Need help? We will set up and install your SSL certificate free of charge!*
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
};

export default SslPrice
