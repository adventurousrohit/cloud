import Link from "next/link";

const VpsHostingCta = () => {
  return (
    <>
      <div className="pt-60 pb-60 bg-primary-subtle">
        <div className="pt-60 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-6">
                        <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="mb-4">
                                Got Questions? We Have Answers!
                            </h2>
                            <p className="mb-8 max-text-52 mx-auto" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                Get started by reaching out to our awesome support team today! Our english to help you with
                                answers to your questions.
                            </p>
                            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                               <Link href="/price" className="btn btn-lg btn-primary btn-arrow fs-14 fw-medium rounded">
                                    <span className="d-inline-block me-1 flex-shrink-0">
                                        <i className="las la-comment-dots"></i>
                                    </span>
                                    <span className="btn-arrow__text">
                                        Get Started
                                        <span className="btn-arrow__icon">
                                            <i className="las la-arrow-right"></i>
                                        </span>
                                    </span>
                                </Link>
                                <Link href="/contact/" className="btn btn-lg btn-dark btn-arrow fs-14 fw-medium rounded">
                                    <span className="d-inline-block me-1 flex-shrink-0">
                                        <i className="las la-comment-dots"></i>
                                    </span>
                                    <span className="btn-arrow__text">
                                        Chat with Expert
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
    </>
  )
};

export default VpsHostingCta
