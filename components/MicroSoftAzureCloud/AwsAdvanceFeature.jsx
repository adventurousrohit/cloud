const AdvanceFeature = () => {
  // Array of points to render dynamically
  const features = [
    "Proactive cPanel server management",
    "cPanel certified engineers",
    "cPanel installation",
    "Plugin and API integration",
    "Cloudflare Integration",
    "Disaster recovery",
    "cPanel rescue mode operations",
    "Weekly server auditing",
    "Data Center support/escalation",
    "24/7 cPanel server monitoring",
    "cPanel DNS configuration",
    "cPanel server hardening",
    "OS recovery via KVM/IPMI access",
    "cPanel backup configuration",
    "cPanel emergency rescue",
    "cPanel plugin Installations",
    "Free SSL installation",
    "Malware scanning",
    "cPanel server optimisation",
    "Data restoration from backups",
    "cPanel firewall configuration (CSF/CSX)"
  ];

  return (
    <section className="">
      <div className="container extrasection">
        <div className="feature-1-wrapper px-10 py-14 bg-dark rounded-3 position-relative text-white pb-10">
          <img
            src="/img/shape/feature-shape.png"
            alt="image"
            className="img-fluid position-absolute start-0 top-0 z-n1"
          />
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-8">
              <div
                className="text-center mb-4"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <h3 className="mb-3 text-white">
                  What we do in AWS Server Management
                </h3>
              </div>
            </div>
          </div>

          {/* Dynamically divide features into three columns */}
          <div className="row g-lg-4 justify-content-center mt-4">
            {Array.from({ length: 3 }).map((_, columnIndex) => (
              <div
                className="col-lg-4"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay={`${300 + columnIndex * 100}`}
                data-sal-easing="ease-in-out-sine"
                key={columnIndex}
              >
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  {features
                    .slice(
                      (columnIndex * features.length) / 3,
                      ((columnIndex + 1) * features.length) / 3
                    )
                    .map((feature, index) => (
                      <li
                        className="d-flex align-items-center gap-2"
                        key={`${columnIndex}-${index}`}
                      >
                        <div className="w-4 h-4 bg-success flex-shrink-0 rounded-circle fs-10 lh-1 text-white d-flex align-items-center justify-content-center">
                          <i className="las la-check"></i>
                        </div>
                        <p className="fw-bold mb-0">{feature}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvanceFeature;
