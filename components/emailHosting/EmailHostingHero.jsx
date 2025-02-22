import Link from "next/link";

const EmailHostingHero = () => {
  return (
    <>
       <div className="pt-32 pb-32 position-relative z-1">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card rounded-4 border-0 position-unset">
                        <div className="card-body pt-60 pb-60 px-md-8 px-xxl-12">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-6">
                                    <small className="d-inline-block mb-2 fw-bold" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                        🔥 Email Hosting <a href="#" className="text-decoration-none">Up to 71% off</a>
                                    </small>
                                    <h1 className="mb-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                        Business Email That
                                        Builds Your Brand
                                    </h1>
                                    <p className="max-text-52 mb-6" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                        Managed Web Hosting Solutions bringing the success of your next
                                        online mission! Starting at <a href="#" className="text-decoration-none fw-bold">$2.49 including</a>
                                    </p>
                                    <Link href="/price" className="btn btn-primary btn-arrow btn-arrow-md fs-14 fw-medium rounded" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                        <span className="btn-arrow__text">
                                            Plan & Pricing
                                            <span className="btn-arrow__icon">
                                                <i className="las la-arrow-right"></i>
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="col-lg-6" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                    <img src="/img/email-hero-img.png" alt="image" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul className="list-unstyled p-0 d-none d-xl-flex flex-xl-column align-items-center flex-wrap gap-3 vertical-social-media top-50 end-0 translate-middle">
            <li>
                <a href="#" className="text-decoration-none d-inline-block text-body hover:text-primary fs-24 transition">
                    <i className="lab la-twitter"></i>
                </a>
            </li>
            <li>
                <a href="#" className="text-decoration-none d-inline-block text-body hover:text-primary fs-24 transition">
                    <i className="lab la-facebook"></i>
                </a>
            </li>
            <li>
                <a href="#" className="text-decoration-none d-inline-block text-body hover:text-primary fs-24 transition">
                    <i className="lab la-linkedin-in"></i>
                </a>
            </li>
            <li>
                <a href="#" className="text-decoration-none d-inline-block text-body hover:text-primary fs-24 transition">
                    <i className="lab la-discord"></i>
                </a>
            </li>
            <li>
                <span className="vertical-social-media__text d-inline-flex align-items-center gap-2 fw-semibold">Follow
                    on <span className="vertical-social-media__text-stroke"></span> </span>
            </li>
        </ul>
    </div>
    </>
  )
};

export default EmailHostingHero
