import Link from "next/link";

const AboutUsCta = () => {
  return (
    <>
       <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="card rounded-3 cta-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="card-body px-6 pt-80 pb-80">
                        <div className="row justify-content-center">
                            <div className="col-md-11 col-lg-8 col-xl-6">
                                <div className="text-center">
                                    <h3>
                                        Quality Hosting Support 
                                    </h3>
                                    <p className="mb-6">
                                        With over two decades of experience in high-quality, secure web hosting
                                        HostCity is the strategic partner for your online journey.
                                    </p>
                                    <Link href="/contact" className="btn btn-primary btn-arrow btn-arrow-xl btn-lg fs-14 fw-medium rounded">
                                        <span className="d-inline-block me-1 flex-shrink-0">
                                            <i className="las la-comments"></i>
                                        </span>
                                        <span className="btn-arrow__text">
                                            Talk to a Specialist
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
    </div>
    </>
  )
};

export default AboutUsCta
