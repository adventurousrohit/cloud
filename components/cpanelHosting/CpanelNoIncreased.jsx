import Link from "next/link";

const CpanelNoIncreased = () => {
  return (
    <>
       <div className="pt-60 pb-60">
        <div className="pt-60 pb-60">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="ps-lg-8 pe-xxl-12">
                            <span className="d-block mb-2 text-primary fs-18 fw-semibold" data-sal="slide-up"
                                data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                No increased latency
                            </span>
                            <h3 className="mb-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                Control customer accounts via WHM control panel
                            </h3>
                            <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                The Loading Speed of every website is undoubtedly one of the leading SEO ranking factors
                                today. With that in mind, we meticulously optimized
                            </p>
                            <p className="mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                Our Web Hosting plans to meet the Loading Speed requirements of every website
                                out-of-the-box. Of course, that is not always optimal due to the website optimization for
                                every website that we host.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <img src="/img/cpanel-img-2.png" alt="image" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="pb-60">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <img src="/img/cpanel-img-3.png" alt="image" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6">
                        <div className="ps-lg-8 pe-xxl-12">
                            <span className="d-block mb-2 text-primary fs-18 fw-semibold" data-sal="slide-up"
                                data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                Powerful Hosting Management
                            </span>
                            <h3 className="mb-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                Advanced hosting management tools via cPanel control panel
                            </h3>
                            <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                The Loading Speed of every website is undoubtedly one of the leading SEO ranking factors
                                today. With that in mind, we meticulously optimized
                            </p>
                            <p className="mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                Our Web Hosting plans to meet the Loading Speed requirements of every website
                                out-of-the-box. Of course, that is not always optimal due to the website optimization for
                                every website that we host.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pb-60">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="ps-lg-8 pe-xxl-12">
                            <span className="d-block mb-2 text-primary fs-18 fw-semibold" data-sal="slide-up"
                                data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                24/7 Technical Support
                            </span>
                            <h3 className="mb-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                Our technical team is here to help you 24/7!
                            </h3>
                            <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                The Loading Speed of every website is undoubtedly one of the leading SEO ranking factors
                                today. With that in mind, we meticulously optimized
                            </p>
                            <p className="mb-8" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                Our Web Hosting plans to meet the Loading Speed requirements of every website
                                out-of-the-box. Of course, that is not always optimal due to the website optimization for
                                every website that we host.
                            </p>
                            <Link href="/price" className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded">
                                <span className="btn-arrow__text">
                                    Get Started Now
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <img src="/img/cpanel-img-4.png" alt="image" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default CpanelNoIncreased
