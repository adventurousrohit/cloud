import Link from "next/link";

const PremiumNetworkAdvanceNetwork = () => {
  return (
    <>
        <section className="bg-secondary pt-120 pb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <h2 className="mb-2">Advanced Networking Options</h2>
                        <p className="mb-8 max-text-52 mx-auto">Powerful networking features enable enterprises to deploy highly
                            customizable and scalable cloud infrastructure.</p>
                    </div>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-lg-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="bg-white p-8 rounded-3">
                        <h5 className="mb-5 max-text-20">Infinite Shielding Unmetered
                            DDoS Protection</h5>
                        <div className="d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap">
                            <div className="flex-shrink-0">
                                <img src="/img/advance-net-1.png" alt="image" className="img-fluid"/>
                            </div>
                            <div>
                                <p className="mb-4">Deployed on edge routers, Volumetric Shield detects and filters out DDoS
                                    attacks through firewall rules. Efficient against NTP, DNS, UDP, Memcached and other
                                    simple amplification attacks.</p>
                                <Link href="/about-us" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-bold btn-arrow">
                                    <span className="d-inline-block btn-arrow__text">
                                        Learn More
                                        <span className="btn-arrow__icon">
                                            <i className="las la-arrow-right"></i>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                    <div className="bg-white p-8 rounded-3">
                        <h5 className="mb-5 max-text-20">Last Mile Connectivity
                            Monitoring</h5>
                        <div className="d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap">
                            <div className="flex-shrink-0">
                                <img src="/img/advance-net-2.png" alt="image" className="img-fluid"/>
                            </div>
                            <div>
                                <p className="mb-4">Deployed on edge routers, Volumetric Shield detects and filters out DDoS
                                    attacks through firewall rules. Efficient against NTP, DNS, UDP, Memcached and other
                                    simple amplification attacks.</p>
                                <Link href="/about-us" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-bold btn-arrow">
                                    <span className="d-inline-block btn-arrow__text">
                                        Learn More
                                        <span className="btn-arrow__icon">
                                            <i className="las la-arrow-right"></i>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="bg-white p-8 rounded-3">
                        <h4 className="mb-5 max-text-20" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Direct Access to hard‑to
                            ‑Reach Networks</h4>
                        <div className="d-flex align-items-center gap-8 flex-wrap flex-lg-nowrap">
                            <img src="/img/advance-net-3.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="700" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                          
                            <div>
                                <h6 className="text-primary mb-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Navigating Uncharted Territories
                                    with Ease</h6>
                                <p className="mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Deployed on edge routers, Volumetric Shield detects
                                    and filters out DDoS
                                    attacks through firewall rules. Efficient against NTP, DNS, UDP, Memcached and other
                                    simple amplification attacks. </p>

                                <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Deployed on edge routers, Volumetric Shield detects
                                    and filters out DDoS and other
                                    simple amplification attacks.</p>
                                <Link href="/about-us" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-bold btn-arrow" data-sal="slide-up" data-sal-duration="100" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                    <span className="d-inline-block btn-arrow__text">
                                        Learn More
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
    </section>
    </>
  )
};

export default PremiumNetworkAdvanceNetwork
