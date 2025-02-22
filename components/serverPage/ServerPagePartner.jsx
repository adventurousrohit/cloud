import Link from "next/link";

const ServerPagePartner = () => {
  return (
    <>
       <section className="bg-secondary pt-60 pb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8">
                    <div className="text-center mb-10" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <h2 className="mb-2">Hostingard Infrastructure Partners</h2>
                        <p className="mb-0 max-text-60 mx-auto">With Hostcity, you can spin up a high performance SSD VPS in 64+
                            cities around the globe. You can develop on.</p>
                    </div>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-xl-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="bg-white px-5 py-7 rounded-3 hover-shadow transition">
                        <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap">
                            <h5 className="mb-0">AMD EPYC</h5>
                            <span className="h5 text-secondary">01</span>
                        </div>
                        <div className="d-flex align-items-center gap-3 mt-4">
                            <img src="/img/partner-card-1.png" alt="image" className="img-fluid"/>
                            <div>
                                <p className="mb-0">With Hostcity, you can spin up a high performance SSD VPS in 64+ cities
                                    around the globe. </p>
                                <div className="mt-2">
                                    <Link href="/contact/" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-semibold btn-arrow">
                                        <span className="d-inline-block btn-arrow__text">
                                            Chat Now
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
                <div className="col-xl-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                    <div className="bg-white px-5 py-7 rounded-3 hover-shadow transition">
                        <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap">
                            <h5 className="mb-0">cPanel Hosting</h5>
                            <span className="h5 text-secondary">02</span>
                        </div>
                        <div className="d-flex align-items-center gap-3 mt-4">
                            <img src="/img/partner-card-2.png" alt="image" className="img-fluid"/>
                            <div>
                                <p className="mb-0">With Hostcity, you can spin up a high performance SSD VPS in 64+ cities
                                    around the globe. </p>
                                <div className="mt-2">
                                    <Link href="/contact" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-semibold btn-arrow">
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
                <div className="col-xl-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                    <div className="bg-white px-5 py-7 rounded-3 hover-shadow transition">
                        <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap">
                            <h5 className="mb-0">Cloud Linux</h5>
                            <span className="h5 text-secondary">03</span>
                        </div>
                        <div className="d-flex align-items-center gap-3 mt-4">
                            <img src="/img/partner-card-3.png" alt="image" className="img-fluid"/>
                            <div>
                                <p className="mb-0">With Hostcity, you can spin up a high performance SSD VPS in 64+ cities
                                    around the globe. </p>
                                <div className="mt-2">
                                    <Link href="/contact" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-semibold btn-arrow">
                                        <span className="d-inline-block btn-arrow__text">
                                            Chat Now
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
    </section>
    </>
  )
};

export default ServerPagePartner
