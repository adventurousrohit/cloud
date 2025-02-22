import Link from "next/link";

const VpsHostingSupport = () => {
  return (
    <>
      <div className="pt-60 pb-60 bg-primary-subtle">
        <div className="pt-60 pb-60">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="position-relative" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <img src="/img/about-img-3.png" alt="image" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ps-lg-8">
                            <h2 className="mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                VPS Hosting Support That's Always Online
                            </h2>
                            <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                The Loading Speed of every website is undoubtedly one of the leading SEO ranking factors
                                today. With that in mind, we meticulously optimized
                            </p>
                            <p className="mb-8" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                Our Web Hosting plans to meet the Loading Speed requirements of every website
                                out-of-the-box. Of course, that is not always optimal due to the website optimization for
                                every website that we host.
                            </p>
                            <Link href="/contact/" className="btn btn-dark btn-arrow btn-lg fs-14 fw-medium rounded" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                <span className="btn-arrow__text">
                                    Speek Sales Team
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

export default VpsHostingSupport
