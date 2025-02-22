import Link from "next/link";

const VpsHostingWhyChoose = () => {
  return (
    <>
       <section className="pt-60 pb-60 bg-primary bg-opacity-5">
        <div className="pb-60">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-12">
                    <h2 className="mb-4 text-align-center m-auto">
                    Reasons to Trust CloudMinister for Your Linux VPS Hosting Needs
                    </h2>
                    <p>Because we believe and deliver high performance, reliability, and expert support to elevate your online presence.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4">
                <div className="col-sm-6 col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="card" style={{height:"100%"}}>
                        <div className="card-body p-xl-8">
                            <div className="hstack gap-3 mb-4">
                                <span className="d-inline-block flex-shrink-0">
                                    <img src="/img/icon-hosting-info-1.png" alt="image" className="img-fluid"/>
                                </span>
                                <h6 className="mb-0 flex-grow-1">
                                24/7 Expert Support
                                </h6>
                            </div>
                            <p className="mb-0">
                            Dedicated team ensures that your linux hosting vps server is optimized and running smoothly at all times, providing round-the-clock assistance for all your technical needs.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                    <div className="card" style={{height:"100%"}}>
                        <div className="card-body p-xl-8">
                            <div className="hstack gap-3 mb-4">
                                <span className="d-inline-block flex-shrink-0">
                                    <img src="/img/why-icon-3-dark.png" alt="image" className="img-fluid" />
                                </span>
                                <h6 className="mb-0 flex-grow-1">
                                Fully Managed Servers
                                </h6>
                            </div>
                            <p className="mb-0">
                            Enjoy server management worry-free experience with our professionals managing a complete server from security update installations to patches.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                    <div className="card" style={{height:"100%"}}>
                        <div className="card-body p-xl-8">
                            <div className="hstack gap-3 mb-4">
                                <span className="d-inline-block flex-shrink-0">
                                    <img src="/img/cash.png" alt="image" className="img-fluid" style={{width:"56",height:"56px"}}/>
                                </span>
                                <h6 className="mb-0 flex-grow-1">
                                7-Day Money-Back Guarantee:
                                </h6>
                            </div>
                            <p className="mb-0">
                            Don't like it? Have a full refund within 7 days. Our Linux VPS hosting plans come with no risk whatsoever as your satisfaction is pur priority.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default VpsHostingWhyChoose
