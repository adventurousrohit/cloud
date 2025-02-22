import Link from "next/link";

const SecurityTechHero = () => {
  return (
    <>
       <section className="banner banner-security bg-dark control-panel-banner">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <span className="fs-18 fw-semibold text-primary mb-2" data-sal="slide-up" data-sal-duration="1000"
                        data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        Security & Technology
                    </span>
                    <h1 className="text-white mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        Website Security & Malware Protect your Website
                    </h1>
                    <p className="mb-8 text-white max-text-60 text-opacity-75 mx-auto" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        Consistently low latency times and zero packet loss are the results of overprovisioned 
                        150+ Tbps network, real‑time network Monitoring.
                    </p>
                    <div className="d-flex justify-content-center align-items-center gap-6 flex-wrap" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                        <Link href="/contact/" className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                            <span className="btn-arrow__text">
                                Get Started
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                        <Link href="/price" className="btn btn-light btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded transition">
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
    </section>
    </>
  )
};

export default SecurityTechHero
