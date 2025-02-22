import Link from "next/link";

const DomainPageHero = () => {
  return (
    <>
         <section className="hero-domain-area bg-white position-relative z-1 overflow-hidden">
        <div className="container">
            <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                    <div className="d-inline-flex align-items-center gap-2 mb-2" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="w-2 h-2 rounded-circle bg-primary"></div>
                        <small className="text-primary fw-bold">Domain Management Panel</small>
                    </div>
                    <h1 className="mb-2" data-sal="slide-up" data-sal-duration="700" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Every Website
                        Needs a Great Name!</h1>
                    <p className="max-text-52 fw-semibold mb-8" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        Powerful Bare Metal Servers at low prices, so you can do more for less.
                        Starting<a href="#" className="text-decoration-none fw-bold">$2.49&nbsp;including</a>
                    </p>
                    <div className="hstack gap-4 flex-wrap" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <Link href="/contact/" className="btn btn-primary btn-arrow btn-arrow-lg btn-lg fs-14 fw-semibold rounded">
                            <span className="btn-arrow__text">
                                Create Accout
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                        <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-lg btn-lg fs-14 fw-semibold rounded transition">
                            <span className="btn-arrow__text">
                                View Pricing
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="position-relative">
                        <img src="/img/hero-domain.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                        <img src="/img/hero-6-shape-1.png" alt="image" className="img-fluid position-absolute hero-6-shape-1 d-none d-xxl-block" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                        <img src="/img/hero-6-shape-2.png" alt="image" className="img-fluid position-absolute hero-6-shape-2 d-none d-sm-block" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                        <img src="/img/hero-6-shape-3.png" alt="image" className="img-fluid position-absolute hero-6-shape-3 z-n1" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default DomainPageHero
