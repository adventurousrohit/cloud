import Link from "next/link";

const DataHostingDatacenterSupport = () => {
  return (
    <>
      <div className="server-location-section pt-20 pb-20 bg-white">
        <div className="">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-md-8 col-lg-7 col-xl-5">
                <h2 className="h5 mb-4">Always Here for You – 24/7 Customer Support</h2>
                <p className="mb-0 max-text-48">
                  Experience smooth 24/7 service that is customized to business requirements. Whether it's day or night, our committed customer service team is always here to help you via live chat,
                  phone, or email.
                </p>
              </div>
              <div className="col-xl-7">
                <div className="row g-4">
                  <div className="col-sm-6 col-md-4">
                    <div className="card support-card h-100 d-flex flex-column justify-content-between">
                      <div className="card-body p-xl-6" >
                        <div className="mb-4">
                          <img src="/img/icon-message.png" alt="image" className="img-fluid" />
                        </div>
                        <h6 className="fs-16">Live Chat</h6>
                        <p>Always Here To Assist, Every Day, Every Hour, All Year.</p>
                        <Link href="" className="text-decoration-none d-inline-flex align-items-center gap-2 text-dark fw-semibold btn-arrow mb-3">
                          <span className="d-inline-block btn-arrow__text"  onClick={() => window.openChat()}>
                            Chat Now
                            <span className="btn-arrow__icon">
                              <i className="las la-arrow-right"></i>
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="card support-card h-100 d-flex flex-column justify-content-between">
                      <div className="card-body p-xl-6">
                        <div className="mb-4">
                          <img src="/img/email.png" alt="image" className="img-fluid" style={{width:"48px",height:"48px"}} />
                        </div>
                        <h6 className="fs-16">Get In touch</h6>
                        <p>24*7 Superb Customer Support</p>
                        <Link href="mailto:support@cloudminister.com" className="text-decoration-none d-inline-flex align-items-center gap-2 text-dark fw-semibold btn-arrow mb-3">
                          <span className="d-inline-block btn-arrow__text">
                            Get in touch
                            <span className="btn-arrow__icon">
                              <i className="las la-arrow-right"></i>
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="card support-card h-100 d-flex flex-column justify-content-between">
                      <div className="card-body p-xl-6">
                        <div className="mb-4">
                          <img src="/img/icon-call.png" alt="image" className="img-fluid" />
                        </div>
                        <h6 className="fs-16">Contact Now</h6>
                        <p>+91-8447755312</p>
                        <Link href="tel:+918447755312" className="text-decoration-none d-inline-flex align-items-center gap-2 text-dark fw-semibold btn-arrow mb-3">
                          <span className="d-inline-block btn-arrow__text">
                            Call Now
                            <span className="btn-arrow__icon">
                              <i className="las la-arrow-right"></i>
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataHostingDatacenterSupport;
