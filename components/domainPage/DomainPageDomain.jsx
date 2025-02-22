import Link from "next/link";

const DomainPageDomain = () => {
  return (
    <>
       <section className="domain-3-area pt-120 pb-120">
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-lg-5" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="bg-white p-8 shadow-lg">
                        <h5 className="mb-5">Free Domain Name With a Web
                            Hosting Plans*</h5>
                        <p className="fw-medium mb-6">Experience our high-speed web hosting, with 24/7
                            a novice or a thriving e-commerce enterprise, our hosting solutions are tailored to you!"</p>
                        <Link href="/price" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-medium btn-arrow">
                            <span className="d-inline-block btn-arrow__text">
                                Explore Hosting Plans
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

export default DomainPageDomain
