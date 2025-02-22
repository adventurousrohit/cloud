import Link from "next/link";

const ModernHomeHero = () => {
  return (
    <>
        <section className="hero-8 gradient-bg-2 pb-5 pb-md-0 position-relative z-1">
        <div className="container">
            <div className="row g-4 g-md-0">
                <div className="col-xl-6">
                    <h1 className="text-white mb-4">Discover Top Notch Hosting & Domain Solutions</h1>
                    <p className="text-white max-text-52 mb-6">Managed Web Hosting Solutions bringing the success of online mission! Starting <span className="text-warning fw-semibold">at $2.49 including</span></p>
                    <Link href="/price" className="btn btn-primary border-0 bg-warning btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                        <span className="btn-arrow__text">
                            Get Started
                            <span className="btn-arrow__icon">
                                <i className="las la-arrow-right"></i>
                            </span>
                        </span>
                    </Link>
                </div>
                <div className="col-md-6 col-xl-5">
                    <img src="/img/hero-8.png" alt="image" className="hero-img img-fluid"/>
                </div>
                <div className="col-md-6 col-xl-1">
                    <div className="position-relative">
                        <img src="/img/shape/hero-8-shape.png" alt="image" className="shape-1 position-absolute d-none d-xxl-block"/>
                        <div className="hero-price-card position-absolute w-max-con end-0 top-0 bg-white bg-opacity-10 px-4 py-6 text-center rounded-4">
                            <img src="/img/hero-8-icon.png" alt="" className="mb-4"/>
                            <h6 className="text-white fs-20 mb-2"> WordPress Hosting</h6>
                            <p className="text-white max-text-32 mb-3 fs-14">Reviewed by thousands of customers
                                Stands out as one most.</p>
                            <h3 className="text-white mb-5">$20<span className="fs-18">.50</span></h3>
                            <Link href="/contact" className="btn btn-light btn-sm  fs-14 fw-semibold rounded">
                                Explore Plan
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

export default ModernHomeHero
