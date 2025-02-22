import Link from "next/link";

const WordpressHostingHero = () => {
  return (
    <>
       <section className="hero-6 position-relative z-1">
        <div className="container">
            <div className="row g-4 align-items-lg-center">
                <div className="col-lg-7">
                    <small className="d-inline-block mb-2 fw-bold bg-success-subtle text-success-emphasis border border-success-subtle px-3 py-1 rounded">
                        <span className="d-inline-block w-2 h-2 bg-success rounded-circle me-1"></span>WordPress Hosting <span
                            className="ms-1 text-body">Up To 75% OFF</span>
                    </small>
                    <h1 className="mb-4">
                        Powerful & Affordable
                        WordPress Hosting
                    </h1>
                    <p className="max-text-64 mb-8 fw-semibold">
                        Experience a new way to WordPress. Build, launch, and manage high-performance WordPress sites through one powerful dashboard.
                    </p>
                    <div className="hstack gap-4 flex-wrap">
                        <Link href="/contact/" className="btn btn-success btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                            <span className="btn-arrow__text">
                                Get Started
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                        <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                            <span className="btn-arrow__text">
                                View All Plan
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="hero-6__img">
                        <img src="/img/hero-6-img.png" alt="image" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default WordpressHostingHero
