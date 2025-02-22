import Link from "next/link";
import IsomaticMap from "../isomatic/IsomaticMap";

const CloudHostingDatacenterLocation = () => {
  return (
    <>
       <div className="server-location-section pt-120 pb-120">
        <div className="pb-60">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-8 col-lg-7 col-xl-5">
                        <h2 className="h5 mb-4">
                            Round-the-Clock Customer <br/>
                            Support Availability 24/7
                        </h2>
                        <p className="mb-0 max-text-48">
                            Our high-performance storage network, combined with enterprise
                            all- makes our cloud servers transactional.
                        </p>
                    </div>
                    <div className="col-xl-7">
                        <div className="row g-4">
                            <div className="col-sm-6 col-md-4">
                                <div className="card support-card h-100">
                                    <div className="card-body p-xl-6">
                                        <div className="mb-4">
                                            <img src="/img/icon-message.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6 className="fs-16">
                                            Live Chat
                                        </h6>
                                        <p>
                                            24/7/365 Through the Chat Widget
                                        </p>
                                        <Link href="/contact" className="text-decoration-none d-inline-flex align-items-center gap-2 text-dark fw-semibold btn-arrow">
                                            <span className="d-inline-block btn-arrow__text">
                                                Chat Now
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="card support-card h-100">
                                    <div className="card-body p-xl-6">
                                        <div className="mb-4">
                                            <img src="/img/icon-call.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6 className="fs-16">
                                            Get In touch
                                        </h6>
                                        <p>
                                            9.00AM to 8.00PM Through the Call Center
                                        </p>
                                        <Link href="/contact" className="text-decoration-none d-inline-flex align-items-center gap-2 text-dark fw-semibold btn-arrow">
                                            <span className="d-inline-block btn-arrow__text">
                                                Get in touch
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="card support-card h-100">
                                    <div className="card-body p-xl-6">
                                        <div className="mb-4">
                                            <img src="/img/icon-sale-team.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6 className="fs-16">
                                            Sales Team
                                        </h6>
                                        <p>
                                            +880 1633 082 302
                                        </p>
                                        <Link href="/contact" className="text-decoration-none d-inline-flex align-items-center gap-2 text-dark fw-semibold btn-arrow">
                                            <span className="d-inline-block btn-arrow__text">
                                                Get in touch
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
        <div className="pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="text-center">
                            <div className="w-30 h-30 d-flex align-items-center justify-content-center flex-column border border-primary rounded-circle text-center p-2 mx-auto mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                <h4 className="mb-1 text-primary"><span className="counter">64</span>+</h4>
                                <span className="fs-12 text-primary fw-bold">Our Availability</span>
                            </div>
                            <h2 className="h3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Build Locally, Launch Worldwide</h2>
                            <p className="mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Hostcity offers the largest worldwide network, enabling
                                you to spin
                                up and easily scale a low latency infrastructure solution no matter where you or your
                                customers may be!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* map */}
        <IsomaticMap/>
        </div>
    </>
  )
};

export default CloudHostingDatacenterLocation
