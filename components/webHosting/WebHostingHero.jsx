import Link from "next/link";

const WebHostingHero = () => {
  return (
    <>
       <section className="hero-2">
        <div className="container">
            <div className="row align-items-center g-4">
                <div className="col-lg-5">
                    <div className="position-relative hero-two-img-group">
                        <img src="/img/hero-2.png" alt="image" className="img-fluid"/>
                        <img src="/img/hero-2-left.png" alt="image" className="hero-2-left"/>
                        <img src="/img/shape/hero-2-shape-1.png" alt="image" className="hero-2-shape hero-2-shape-1 d-none d-xxl-block"/>
                        <img src="/img/shape/hero-2-shape-2.png" alt="image" className="hero-2-shape hero-2-shape-2"/>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div>
                            <h3><span className="counter">25k</span>+</h3>
                            <p className="mb-0">Hosting Business <br/>
                                Successfully</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="d-flex align-items-center gap-3">
                        <span><img src="/img/shape/bage-1.png" alt=""/></span>
                        <span className="fw-medium">
                            Don't miss limited-time savings: <span className="text-primary">Savings 25%</span>
                        </span>
                    </div>
                    <h1>Fast<span className="text-primary d-inline-block">.</span>Secure<span
                            className="text-primary d-inline-block">.</span>Stable<span
                            className="text-primary d-inline-block">.</span>
                        Web Hosting</h1>
                    <p className="max-text-52 fw-medium mt-5">Managed Web Hosting Solutions bringing the success of your next
                        online mission! Starting at <span className="text-primary fw-bold">$2.49 including</span></p>
                    <div className="d-flex align-items-center gap-5 flex-wrap mt-6">
                        <div className="d-flex align-items-center gap-1">
                            <span className="text-primary fs-14"><i className="las la-check"></i></span>
                            <p className="mb-0 fw-semibold"><span className="fw-bold">FREE</span> SSL</p>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <span className="text-primary fs-14"><i className="las la-check"></i></span>
                            <p className="mb-0 fw-semibold"><span className="fw-bold">FREE</span> Domain</p>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <span className="text-primary fs-14"><i className="las la-check"></i></span>
                            <p className="mb-0 fw-semibold"><span className="fw-bold">FREE</span> Website Transfer</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-6 flex-wrap flex-md-nowrap mt-8">
                        <Link href="/contact/" className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded">
                            <span className="btn-arrow__text">
                                Sign up - Free Trial
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                        <Link href="/contact" className="btn btn-dark btn-arrow btn-lg fs-14 fw-medium rounded transition">
                            <span className="btn-arrow__text">
                                Explore Product
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-lg-end mt-5 mt-lg-0">
                        <div className="pluse"></div>
                    </div>
                    <div className="text-lg-end">
                        <img src="/img/hero-2-sm.png" alt="image" className="hero-2-pluse-img img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default WebHostingHero
