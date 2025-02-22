import Link from "next/link";

const DdosBreadcumb = () => {
  return (
    <>
       <section className="banner-bg bg-dark ddos-banner">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-7 col-xl-8">
                    <div className="text-center">
                        <span className="fs-18 fw-bold text-primary mb-2" data-sal="slide-up" data-sal-duration="500"
                            data-sal-delay="300" data-sal-easing="ease-in-out-sine">Hostcity Security</span>
                        <h1 className="text-white mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Effortless and_Effective DDoS Protection</h1>
                        <p className="text-white mb-8 max-text-60 mx-auto text-opacity-75" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Add an
                            additional layer of protection
                            to keep your hosting infrastructure online and operating optimally even when they are the target
                            of attacks.</p>
                        <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <Link href="/contact" className="btn btn-primary btn-arrow btn-arrow-lg btn-lg fs-14 fw-semibold rounded">
                                <span className="btn-arrow__text">
                                    Create Accout
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                            <Link href="/price" className="btn btn-light btn-arrow btn-arrow-lg btn-lg fs-14 fw-semibold rounded transition">
                                <span className="btn-arrow__text">
                                    View Pricing
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

export default DdosBreadcumb
