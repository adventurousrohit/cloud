import Link from "next/link";

const PricingHero = () => {
  return (
    <>
        <section className="banner-bg bg-dark price-banner">
        <div className="container">
            <div className="row">
                <div className="col-xxl-7 col-lg-9">
                    <div className="pb-60">
                        <span className="fs-18 fw-bold text-primary mb-2" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="300" data-sal-easing="ease-in-out-sine">SSL CERTIFICATE</span>
                        <h1 className="text-white mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">A Simple Price Structure for Great Products</h1>
                        <p className="text-white mb-8 max-text-60 text-opacity-75" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Keep your site secure! Build trust among
                            visitors and
                            outperform in the search
                            engines with an SSL certificate <span className="text-warning fw-semibold">Starting
                                @just&nbsp;$11/Yr.</span></p>
                        <Link href="/price" className="btn btn-primary btn-arrow btn-arrow-md fs-14 fw-medium rounded" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <span className="btn-arrow__text">
                                Plan &amp; Pricing
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

export default PricingHero
