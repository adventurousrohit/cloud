import Link from "next/link";

const SupportPageSupport = () => {
  return (
    <>
       <div className="pt-120 pb-120">
        <div className="pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7 text-center" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <span className="fs-18 fw-semibold text-primary mb-2">
                            Support Overview
                        </span>
                        <h2 className="mb-0">
                            Get the Help You Need Now
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 col-xl-3" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="card border-0 rounded-3 h-100">
                        <div className="card-body p-md-10 p-lg-6 p-xl-10 text-center">
                            <div className="w-20 h-20 d-grid place-content-center rounded-circle bg-primary-subtle mb-6 mx-auto">
                                <img src="/img/icon-support-1.png" alt="image" className="img-fluid"/>
                            </div>
                            <h6>
                                24/7 Live Support
                            </h6>
                            <p className="mb-8">
                                Chat with one of our support experts in real-time
                            </p>
                            <Link href="#" className="text-decoration-none d-inline-flex justify-content-center align-items-center gap-2 text-primary fw-semibold btn-arrow mx-auto">
                                <span className="d-inline-block btn-arrow__text">
                                    Live Chat
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                    <div className="card border-0 rounded-3 h-100">
                        <div className="card-body p-md-10 p-lg-6 p-xl-10 text-center">
                            <div className="w-20 h-20 d-grid place-content-center rounded-circle bg-warning-subtle mb-6 mx-auto">
                                <img src="/img/icon-support-2.png" alt="image" className="img-fluid"/>
                            </div>
                            <h6>
                                Knowledge Base
                            </h6>
                            <p className="mb-8">
                                Our knowledge base has all the answers to your most pressing questions
                            </p>
                            <Link href="#" className="text-decoration-none d-inline-flex justify-content-center align-items-center gap-2 text-primary fw-semibold btn-arrow mx-auto">
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
                <div className="col-md-6 col-lg-4 col-xl-3" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                    <div className="card border-0 rounded-3 h-100">
                        <div className="card-body p-md-10 p-lg-6 p-xl-10 text-center">
                            <div className="w-20 h-20 d-grid place-content-center rounded-circle bg-success-subtle mb-6 mx-auto">
                                <img src="/img/icon-support-3.png" alt="image" className="img-fluid"/>
                            </div>
                            <h6>
                                Video Tutorials
                            </h6>
                            <p className="mb-8">
                                Watch our latest video tutorials on YouTube for expert tips and advice.
                            </p>
                            <Link href="#" className="text-decoration-none d-inline-flex justify-content-center align-items-center gap-2 text-primary fw-semibold btn-arrow mx-auto">
                                <span className="d-inline-block btn-arrow__text">
                                    Watch Now
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="600" data-sal-easing="ease-in-out-sine">
                    <div className="card border-0 rounded-3 h-100">
                        <div className="card-body p-md-10 p-lg-6 p-xl-10 text-center">
                            <div className="w-20 h-20 d-grid place-content-center rounded-circle bg-primary-subtle mb-6 mx-auto">
                                <img src="/img/icon-support-4.png" alt="image" className="img-fluid"/>
                            </div>
                            <h6>
                                News
                            </h6>
                            <p className="mb-8">
                                Stay up-to-date with the latest news and feature
                                updates
                            </p>
                            <Link href="#" className="text-decoration-none d-inline-flex justify-content-center align-items-center gap-2 text-primary fw-semibold btn-arrow mx-auto">
                                <span className="d-inline-block btn-arrow__text">
                                    Read Now
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
    </>
  )
};

export default SupportPageSupport
