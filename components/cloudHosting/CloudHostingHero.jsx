import Link from "next/link";
import VideoModal from "../common/others/VideoModal";
import { useState } from "react";

const CloudHostingHero = () => {
    const [isOpen,setOpen]=useState(false)
  return (
    <>
     <VideoModal isOpen={isOpen} setOpen={setOpen}/>
       <div className="cloud-hero">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="cloud-hero__content">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-7 col-xl-6">
                                <span className="d-flex align-items-center gap-2 mb-3">
                                    <span className="d-block w-2 h-2 rounded-circle bg-success"></span>
                                <span className="d-block text-white">
                                        <span className="text-success">WordPress Hosting</span> Up To 75% OFF
                                </span>
                                </span>
                                <h1 className="text-white mb-6">
                                    Fast & Secure <span className="d-none d-md-inline-block position-relative z-1">
                                        <img src="/img/hero-title-1.png" alt="image" className="img-fluid"/>
                                        <a  type="submit" onClick={()=>setOpen(true)}
                                            className="video-btn popup-init position-absolute top-50 start-50 translate-middle">
                                            <span
                                                className="w-7 h-7 rounded-circle d-flex align-items-center justify-content-center bg-primary">
                                                <span className="text-white fs-14">
                                                    <i className="las la-play"></i>
                                                </span>
                                    </span>
                                    </a>
                                    </span> Cloud <span className="d-none d-md-inline-block position-relative z-1">
                                        <img src="/img/hero-title-2.png" alt="image" className="img-fluid"/>
                                    </span> Server's Solutions
                                </h1>
                                <p className="mb-12 fw-medium text-white max-text-56">
                                    Experience a new way to WordPress. Build, launch, and manage high-performance one
                                    powerful
                                    dashboard.
                                </p>
                                <div className="d-flex align-items-center gap-6 flex-wrap" data-sal="fade" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                                    <Link href="/contact/" className="btn btn-success btn-arrow btn-arrow-lg btn-lg fs-14 fw-semibold rounded-pill">
                                        <span className="btn-arrow__text">
                                            Get Started
                                            <span className="btn-arrow__icon">
                                                <i className="las la-arrow-right"></i>
                                            </span>
                                        </span>
                                    </Link>
                                    <Link href="/server-location" className="btn btn-light btn-arrow btn-arrow-lg btn-lg fs-14 fw-semibold rounded-pill transition">
                                        <span className="btn-arrow__text">
                                            View All Plan
                                            <span className="btn-arrow__icon">
                                                <i className="las la-arrow-right"></i>
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="cloud-hero__brand mt-12 mt-lg-0">
                                    <p className="cloud-hero__brand-text mb-4 mb-lg-2 fs-14 fw-semibold" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                        Trusted by 100,000+ businesses & Counting.
                                    </p>
                                    <div className="d-flex align-items-center gap-4 flex-wrap">
                                        <a href="#" className="d-inline-block" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                                            <img src="/img/brand-sm-1.png" alt="image" className="img-fluid transition opacity-50 brand-img"/>
                                        </a>
                                        <a href="#" className="d-inline-block" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                                            <img src="/img/brand-sm-2.png" alt="image" className="img-fluid transition opacity-50 brand-img"/>
                                        </a>
                                        <a href="#" className="d-inline-block" data-sal="slide-up" data-sal-duration="500" data-sal-delay="600" data-sal-easing="ease-in-out-sine">
                                            <img src="/img/brand-sm-3.png" alt="image" className="img-fluid transition opacity-50 brand-img"/>
                                        </a>
                                        <a href="#" className="d-inline-block" data-sal="slide-up" data-sal-duration="500" data-sal-delay="700" data-sal-easing="ease-in-out-sine">
                                            <img src="/img/brand-sm-4.png" alt="image" className="img-fluid transition opacity-50 brand-img"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-6">
                                <div className="cloud-hero__img">
                                    <img src="/img/partner-1.png" alt="image" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default CloudHostingHero
