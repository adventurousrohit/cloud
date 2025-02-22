import Link from "next/link";

const CloudHostingFeature = () => {
  return (
    <>
       <div className="container">
        <div className="row g-4">
            <div className="col-12">
                <div className="card border-0 roudned-4">
                    <div className="card-body pt-60 pb-60 px-md-15">
                        <div className="row g-4 align-items-center justify-content-between">
                            <div className="col-lg-4" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                <div className="cloud-hero__img">
                                    <img src="/img/partner-1.png" alt="image" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-8 col-xl-7">
                                <span className="d-flex align-items-center gap-2 mb-2" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                    <span className="d-block w-2 h-2 rounded-circle bg-success"></span>
                                <span className="d-block text-white">
                                        <span className="text-success fw-medium">Included Features</span>
                                </span>
                                </span>
                                <h2 className="h3 mb-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                    Why Hostingard Cloud Server Included Feature?
                                </h2>
                                <p className="mb-8 max-text-56" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                    Resources you need for your project can be challenging. With our pay for freedom and
                                    flexibility to make your development.
                                </p>
                                <div className="row g-3">
                                    <div className="col-md-6" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                        <div className="vstack gap-2">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <span className="d-block fw-medium fs-14">
                                                    Instant Deployment
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <span className="d-block fw-medium fs-14">
                                                    Easy To Use
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <span className="d-block fw-medium fs-14">
                                                    Premium Resources
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <span className="d-block fw-medium fs-14">
                                                    Grow With Ease
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                        <div className="vstack gap-2">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <span className="d-block fw-medium fs-14">
                                                    All-In-One Platform Panel
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <span className="d-block fw-medium fs-14">
                                                    High-Performance Hardware
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <span className="d-block fw-medium fs-14">
                                                    Powered by NVMe SSDs
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <span className="d-block fw-medium fs-14">
                                                    Easy Configuration
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/contact/" className="btn btn-success btn-arrow btn-arrow-lg btn-lg fs-14 fw-semibold rounded-pill mt-8" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                    <span className="btn-arrow__text">
                                        Explore More
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
            <div className="col-md-6 col-lg-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                <div className="card rounded-3 h-100">
                    <div className="card-header pt-4 border-bottom-0">
                       <Link href="/blog-details" className="d-block text-decoration-none">
                            <img src="/img/blog-post-1.png" alt="image" className="img-fluid w-100"/>
                      </Link>
                    </div>
                    <div className="card-body">
                        <span className="d-flex align-items-center gap-2 mb-2">
                            <span className="d-block w-2 h-2 rounded-circle bg-success"></span>
                        <span className="d-block text-success fs-14">Cloud Server Feature</span>
                        </span>
                        <h6 className="mb-4">
                           <Link href="/blog-details" className="text-decoration-none text-dark hover:text-primary">
                                Affordable Pay As You Grow
                                Cloud Server
                          </Link>
                        </h6>
                        <p className="mb-6 tt-line-clamp tt-clamp-2">
                            Challenging your application without over paying for freedom & flexibility to make your
                            development.
                        </p>
                       <Link href="/blog-details" className="btn btn-dark btn-arrow btn-arrow-md fs-14 fw-semibold rounded-pill">
                            <span className="btn-arrow__text">
                                Explore More
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                      </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                <div className="card rounded-3 h-100">
                    <div className="card-header pt-4 border-bottom-0">
                       <Link href="/blog-details" className="d-block text-decoration-none">
                            <img src="/img/blog-post-2.png" alt="image" className="img-fluid w-100"/>
                      </Link>
                    </div>
                    <div className="card-body">
                        <span className="d-flex align-items-center gap-2 mb-2">
                            <span className="d-block w-2 h-2 rounded-circle bg-success"></span>
                        <span className="d-block text-success fs-14">Cloud Server Feature</span>
                        </span>
                        <h6 className="mb-4">
                           <Link href="/blog-details" className="text-decoration-none text-dark hover:text-primary">
                                Fully Managed, No Server
                                Gurus Needed
                          </Link>
                        </h6>
                        <p className="mb-6 tt-line-clamp tt-clamp-2">
                            Challenging your application without over paying for freedom & flexibility to make your
                            development.
                        </p>
                       <Link href="/blog-details" className="btn btn-dark btn-arrow btn-arrow-md fs-14 fw-semibold rounded-pill">
                            <span className="btn-arrow__text">
                                Explore More
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                      </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                <div className="card rounded-3 h-100">
                    <div className="card-header pt-4 border-bottom-0">
                       <Link href="/blog-details" className="d-block text-decoration-none">
                            <img src="/img/blog-post-3.png" alt="image" className="img-fluid w-100"/>
                      </Link>
                    </div>
                    <div className="card-body">
                        <span className="d-flex align-items-center gap-2 mb-2">
                            <span className="d-block w-2 h-2 rounded-circle bg-success"></span>
                        <span className="d-block text-success fs-14">Cloud Server Feature</span>
                        </span>
                        <h6 className="mb-4">
                           <Link href="/blog-details" className="text-decoration-none text-dark hover:text-primary">
                                Managed Cloud Solutions Give You Your Time Back
                          </Link>
                        </h6>
                        <p className="mb-6 tt-line-clamp tt-clamp-2">
                            Challenging your application without over paying for freedom & flexibility to make your
                            development.
                        </p>
                       <Link href="/blog-details" className="btn btn-dark btn-arrow btn-arrow-md fs-14 fw-semibold rounded-pill">
                            <span className="btn-arrow__text">
                                Explore More
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
    </>
  )
};

export default CloudHostingFeature
