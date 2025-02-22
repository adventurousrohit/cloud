
const DdosServer = () => {
  return (
    <>
       <section className="bg-dark pt-120 pb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-7 col-xl-8">
                    <div className="d-flex align-items-center justify-content-center gap-2 mb-2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="w-2 h-2 rounded-circle bg-primary"></div>
                        <small className="text-primary fw-bold">Hostcity DDoS Shield</small>
                    </div>
                    <div className="text-center mb-8">
                        <h2 className="text-white mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Choose between DDoS shield Setting per each Server</h2>
                        <p className="text-white mb-0 max-text-56 mx-auto" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Our system monitors network traffic and
                            routes malicious activity to our
                            attack mitigation farm as soon as a DDoS event is detected.</p>
                    </div>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-lg-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="bg-white bg-opacity-5 p-6 p-xl-10 rounded-3">
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
                            <h5 className="text-white mb-0">Volumetric Shield</h5>
                            <p className="h5 mb-0 text-white text-opacity-25">01</p>
                        </div>
                        <div className="d-flex gap-6 flex-wrap flex-sm-nowrap">
                            <div className="flex-shrink-0">
                                <img src="/img/ddos-server-1.png" alt="icon" className="img-fluid"/>
                            </div>
                            <div>
                                <p className="text-white mb-4">Deployed on edge routers, Volumetric Shield detects and filters
                                    out DDoS attacks through firewall rules. Efficient against NTP, DNS, UDP, Memcached and
                                    other simple amplification attacks.</p>
                                <a href="#" className="text-decoration-none d-inline-flex align-items-center gap-3 text-primary fw-bold">
                                    Learn More
                                    <span className="fs-20"><i className="las la-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                    <div className="bg-white bg-opacity-5 p-6 rounded-3 p-xl-10">
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
                            <h5 className="text-white mb-0">Full Shield</h5>
                            <p className="h5 mb-0 text-white text-opacity-25">02</p>
                        </div>
                        <div className="d-flex gap-6 flex-wrap flex-sm-nowrap">
                            <div className="flex-shrink-0">
                                <img src="/img/ddos-server-2.png" alt="icon" className="img-fluid"/>
                            </div>
                            <div>
                                <p className="text-white mb-4">Deployed on edge routers, Volumetric Shield detects and filters
                                    out DDoS attacks through firewall rules. Efficient against NTP, DNS, UDP, Memcached and
                                    other simple amplification attacks.</p>
                                <a href="#" className="text-decoration-none d-inline-flex align-items-center gap-3 text-primary fw-bold">
                                    Learn More
                                    <span className="fs-20"><i className="las la-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default DdosServer
