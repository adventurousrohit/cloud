const pricingData = [
  {
    id: 1,
    title: "Control Panel",
    data: [
      { name: "Centos Web panel", price: "Free" },
      { name: "Centos Web panel Pro", price: "₹ 120.00/mo" },
      { name: "Cpanel Whm 1 User Account", price: "₹ 1,410.00/mo" },
      { name: "Cpanel Whm 5 User Account", price: "₹ 2,300.00/mo" },
      { name: "Cpanel Whm 30 User Account", price: "₹ 3,500.00/mo" },
      { name: "Cpanel Whm 100 User Account", price: "₹ 5,000.00/mo" },
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
      { name: "Imunify AV", price: "₹ /mo" },
      { name: "Immunify AV+", price: "₹ 100.00/mo" },
      { name: "Immunify 360 (Single User)", price: "₹ 900.00/mo" },
      { name: "Immunify 360 (upto 30 User)", price: "₹ 2,000.00/mo" },
      { name: "Bitninja (Single User)", price: "₹ 900.00/mo" },
      { name: "Bitninja (upto 40 User)", price: "₹ 1,800.00/mo" },
    ],
  },
];

const ControlPanel = () => {
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
              <h3 className="mb-0 text-white">
                Pick Suitable Control Panel for Your Linux VPS Server Hosting
              </h3>
              <p className="text-white">
                Streamline all your Linux VPS executive tasks with a complete
                management tool and save your priceless time. Pick any
                subscription scheme from DirectAdmin, cPanel, or Webuzo control
                panel to carry out all your administration tasks related to the
                website, domain, email, and database with comfort.
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
                          <p className="fw-bold mb-0">{subItem.price}</p>
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

