import Link from "next/link";

const ServerLocationBreadcrumb = () => {
  return (
    <>
       <section className="banner-bg bg-dark server-banner">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-8">
                    <div className="text-center">
                        <span className="fs-18 fw-bold text-primary mb-2" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="300" data-sal-easing="ease-in-out-sine">Our Availability</span>
                        <h1 className="text-white mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Modern & Green Energy 64+ Worldwide Locations</h1>
                        <p className="text-white mb-0 max-text-60 mx-auto" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">With worldwide annual spend on digital
                            advertising
                            surpassing $325 billion, it’s no ache's to online marketing are becoming available.</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center gap-6 flex-wrap mt-8" data-sal="fade" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                        <Link href="/contact/" className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                            <span className="btn-arrow__text">
                                Create Account
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                        <Link href="/server-location" className="btn btn-light btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded transition">
                            <span className="btn-arrow__text">
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
    </section>
    </>
  )
};

export default ServerLocationBreadcrumb
