import Link from "next/link";

const SslSecurityCta = () => {
  return (
    <>
        <section className="bg-secondary pt-120 pb-60">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    <div className="text-center">
                        <h2 className="mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Queries? Connect
                            for Swift Solutions Today!</h2>
                        <p className="mb-8" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Powerful Bare Metal Servers at low prices, so you can do more
                            for less starting</p>
                        <Link href="/contact/" className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <span className="btn-arrow__text">
                                Register Now
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

export default SslSecurityCta
