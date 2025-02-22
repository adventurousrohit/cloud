import Link from "next/link";

const WebHostingSupport = () => {
  return (
    <>
       <section className="pt-60 pb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="text-center">
                        <h2 className="mb-2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Need Some Help?</h2>
                        <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Whether you're stuck or just want some tips on where to
                            start, hit up our experts anytime. We're
                            here to help!</p>
                    </div>
                </div>
            </div>
            <div className="pt-40">
                <div className="row g-4">
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="support-card bg-white shadow-sm px-6 py-9 rounded-3 position-relative z-1 overflow-hidden">
                            <img src="/img/support-icon-1.png" alt="icon" className="img-fluid"/>
                            <h6 className="mt-4">HostCity Sales Team</h6>
                            <p>24/7/365 Through the Chat Widget</p>
                            <Link href="/contact/" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-bold btn-arrow">
                                <span className="d-inline-block btn-arrow__text">
                                    Chat Now
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                            <img src="/img/shape/support-shape.png" alt="image" className="img-fluid support-shape position-absolute top-0 end-0 opacity-0 transition"/>
                        </div>
                    </div>
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                        <div className="support-card bg-white shadow-sm px-6 py-9 rounded-3 position-relative z-1 overflow-hidden">
                            <img src="/img/support-icon-2.png" alt="icon" className="img-fluid"/>
                            <h6 className="mt-4">Customer Support Chat</h6>
                            <p>24/7/365 Through the Chat Widget</p>
                            <Link href="/control-panel" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-bold btn-arrow">
                                <span className="d-inline-block btn-arrow__text">
                                    Control Panel
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                            <img src="/img/shape/support-shape.png" alt="image" className="img-fluid support-shape position-absolute top-0 end-0 opacity-0 transition"/>
                        </div>
                    </div>
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                        <div className="support-card bg-white shadow-sm px-6 py-9 rounded-3 position-relative z-1 overflow-hidden">
                            <img src="/img/support-icon-3.png" alt="icon" className="img-fluid"/>
                            <h6 className="mt-4">Customer Support Email</h6>
                            <p>24/7/365 Through the Chat Widget</p>
                            <Link href="/contact/" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-bold btn-arrow">
                                <span className="d-inline-block btn-arrow__text">
                                    Chat Now
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                            <img src="/img/shape/support-shape.png" alt="image" className="img-fluid support-shape position-absolute top-0 end-0 opacity-0 transition"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default WebHostingSupport
