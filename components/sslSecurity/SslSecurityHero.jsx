import Link from "next/link";

const SslSecurityHero = () => {
  return (
    <>
       <section className="hero-4 position-relative z-1 bg-dark banner-security">
        <div className="container">
            <div className="row align-items-center g-4">
                <div className="col-xl-7">
                    <div className="pb-40">  
                        <h1 className="text-white mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Stay Secure, Stay Trusted: Get Your  <span className="fs-18 fw-bold text-primary mb-2" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="300" data-sal-easing="ease-in-out-sine">SSL Certificate</span> Today!</h1>
                        <p className="text-white mb-8 max-text-60 text-opacity-75" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Keep your site secure! Build trust among
                            visitors and
                            outperform in the search
                            engines with an SSL certificate <span className="text-warning fw-bold">Starting @just $11/Yr.</span>
                        </p>
                        <Link href="/price" className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <span className="btn-arrow__text">
                                View All Plans
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-5">
                    <img src="/img/ssl-banner.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default SslSecurityHero
