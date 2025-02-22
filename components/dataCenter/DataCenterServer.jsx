import Link from "next/link";

const DataCenterServer = () => {
  return (
    <>
      <section className="bg-dark pt-60 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-8">
              {/* <div className="d-flex align-items-center justify-content-center gap-2 mb-2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="w-2 h-2 rounded-circle bg-primary"></div>
                        <small className="text-primary fw-bold">Hostcity DDoS Shield</small>
                    </div> */}
              <div className="text-center mb-8">
                <h2 className="text-white mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  Discover Our Powerful Services
                </h2>
                {/* <p className="text-white mb-0 max-text-56 mx-auto" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Our system monitors network traffic and
                            routes malicious activity to our
                            attack mitigation farm as soon as a DDoS event is detected.</p> */}
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              <div className="bg-white bg-opacity-5 p-6 p-xl-10 rounded-3 support-22">
                <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
                  <h5 className="text-white mb-0">Microsoft 365</h5>
                  {/* <p className="h5 mb-0 text-white text-opacity-25">01</p> */}
                </div>
                <div className="d-flex gap-6 flex-wrap flex-sm-nowrap">
                  <div className="flex-shrink-0">
                    <img src="/img/newmicro.png" alt="icon" className="img-fluid" />
                  </div>
                  <div>
                    <p className="text-white mb-4">
                      Microsoft 365 is a cloud-based suite offering productivity tools like Word, Excel, Teams, and Outlook, enabling seamless collaboration, communication, and data security for
                      businesses and individuals across devices.
                    </p>
                    <div className="mt-auto" data-sal="fade" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                      <Link class="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded" href="/microsoft-office365/">
                        <span class="btn-arrow__text">
                          Read More
                          <span class="btn-arrow__icon">
                            <i class="las la-arrow-right"></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
              <div className="bg-white bg-opacity-5 p-6 rounded-3 p-xl-10 support-22">
                <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
                  <h5 className="text-white mb-0">Google Workspace</h5>
                  {/* <p className="h5 mb-0 text-white text-opacity-25">02</p> */}
                </div>
                <div className="d-flex gap-6 flex-wrap flex-sm-nowrap">
                  <div className="flex-shrink-0">
                    <img src="/img/newgoogle.png" alt="icon" className="img-fluid" />
                  </div>
                  <div>
                    <p className="text-white mb-4">
                      Google Workspace is a cloud-based productivity suite featuring Gmail, Docs, Drive, Meet, and Calendar. It streamlines collaboration, communication, and organization for teams,
                      offering secure, real-time access across devices.
                    </p>
                    <div className="mt-auto" data-sal="fade" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                      <Link class="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded" href="/google-workspace/">
                        <span class="btn-arrow__text">
                          Read More
                          <span class="btn-arrow__icon">
                            <i class="las la-arrow-right"></i>
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
      </section>
    </>
  );
};

export default DataCenterServer;
