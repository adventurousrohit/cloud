import Link from "next/link";

const DomainPageAbout = () => {
  return (
    <>
       <section className="pt-40 pb-60">
        <div className="container">
            <div className="row align-items-center g-4">
                <div className="col-lg-6">
                    <div className="d-inline-flex align-items-center gap-2 mb-2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="w-2 h-2 rounded-circle bg-primary"></div>
                        <small className="text-primary fw-bold">Get In touch</small>
                    </div>
                    <h2 className="mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Questions About Domain Registration?</h2>
                    <p className="mb-8" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Contact one of our friendly technical advisors now. Our team is available live chat and is ready to answer any questions you may have.</p>
                    <Link href="/contact" className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded transition" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <span className="btn-arrow__text">
                            Live Chat
                            <span className="btn-arrow__icon">
                                <i className="las la-arrow-right"></i>
                            </span>
                        </span>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <img src="/img/about-5.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default DomainPageAbout
