import Link from "next/link";

const OperatingSystemHero = () => {
  return (
    <>
        <section className="banner bg-dark operating-system">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <div className="text-center">
                        <span className="fs-18 fw-bold text-primary mb-2" data-sal="slide-up" data-sal-duration="500"
                            data-sal-delay="300" data-sal-easing="ease-in-out-sine">Premium System</span>
                        <h1 className="text-white mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Versatile Operating System Options Available</h1>
                        <p className="text-white mb-0 max-text-60 mx-auto" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Consistently low latency times and zero
                            packet
                            loss are the results of overprovisioned 
                            150+ Tbps network, real‑time network monitoring.</p>
                        <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap mt-8" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <Link href="/contact/" className="btn btn-primary btn-arrow btn-arrow-lg btn-lg fs-14 fw-semibold rounded">
                                <span className="btn-arrow__text">
                                    Create Accout
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                            <Link href="/contact" className="btn btn-light btn-arrow btn-arrow-lg btn-lg fs-14 fw-semibold rounded transition">
                                <span className="btn-arrow__text">
                                    View Pricing
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

export default OperatingSystemHero
