import Link from "next/link";

const ServerPageAbout = () => {
  return (
    <>
      <section className="pt-120 pb-60 bg-secondary">
        <div className="container">
            <div className="row justify-content-between align-items-center g-4">
                <div className="col-xl-7">
                    <h2 className="mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Advanced Infrastructure at the
                        Forefront of Technology</h2>
                </div>
                <div className="col-xl-4">
                    <p className="mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">Hostcity data centers support 17 strategic global locations,
                        enabling secure and
                        reliable networking through our network.</p>
                </div>
            </div>
            <div className="pt-20">
                <div className="row align-items-center justify-content-between g-4">
                    <div className="col-lg-6">
                        <img src="/img/server-about-1.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                    </div>
                    <div className="col-lg-5">
                        <h2 className="h4 mb-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Transfer Your Domain to Hostcity</h2>
                        <p className="mb-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">The Hostcity network team continuously optimizes our routing
                            and peering agreements
                            in all of our regions in order to ensure your VMs experience a low latency and high performance
                            network, regardless of where they are deployed!</p>
                        <Link href="/about-us" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-medium btn-arrow" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <span className="d-inline-block btn-arrow__text">
                                Localize Peering
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pt-20">
                <div className="row align-items-center justify-content-between g-4">
                    <div className="col-lg-5">
                        <h2 className="h4 mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Nearby Enjoy Minimal Delays
                            with Low Latency.</h2>
                        <p className="mb-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">The Hostcity network team continuously optimizes our routing
                            and peering agreements
                            in all of our regions in order to ensure your VMs experience a low latency and high performance
                            network, regardless of where they are deployed!</p>
                        <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <Link href="/about-us" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-medium btn-arrow" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                <span className="d-inline-block btn-arrow__text">
                                    About Localize Peering
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/server-about-2.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                    </div>
                </div>
            </div>
            <div className="pt-20">
                <div className="row align-items-center justify-content-between g-4">
                    <div className="col-lg-6">
                        <img src="/img/server-about-3.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                    </div>
                    <div className="col-lg-5">
                        <h2 className="h4 mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Network Redundancy Strategies Ensuring Reliability</h2>
                        <p className="mb-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">The Hostcity network team continuously optimizes our routing
                            and peering agreements
                            in all of our regions in order to ensure your VMs experience a low latency and high performance
                            network, regardless of where they are deployed!</p>
                        <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <Link href="/about-us" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-medium btn-arrow" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                <span className="d-inline-block btn-arrow__text">
                                    About Localize Peering
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
    </section>
    </>
  )
};

export default ServerPageAbout
