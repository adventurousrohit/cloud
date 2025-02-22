import Link from "next/link";

const PricingCta = () => {
  return (
    <>
       <section className="pb-120">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="bg-white px-8 py-10 rounded-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="d-flex align-items-center justify-content-xl-between justify-content-center gap-5 flex-wrap">
                            <div className="d-flex align-items-center gap-5 flex-wrap justify-content-center justify-content-lg-start">
                                <img src="/img/cta-user.png" alt="image" className="img-fluid"/>
                                <div>
                                    <h5 className="mb-2">Got Questions? We Have Answers!</h5>
                                    <p className="mb-0">Get started by reaching out to our awesome support team today!</p>
                                </div>
                            </div>
                            <Link href="/contact/" className="btn btn-dark btn-arrow btn-lg fs-14 fw-medium rounded">
                                <span className="btn-arrow__text">
                                    Chat with Us
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

export default PricingCta
