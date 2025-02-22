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
                    Reasons Why to Choose Windows GPU Server From CloudMinister?
                    </h2>
                    <p>CloudMinister's Windows GPU Servers remove shared resources, delays, and unclear pricing by providing unique, on-demand access to powerful bare-metal hardware. Improve your hosting experience with better control, speed, and dependability.</p>
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
                            Our dedicated technical support team is available 24/7, and our team will be there to troubleshoot and solve the issues you are experiencing. Whether it's a simple question or a complex challenge, we've got you covered. We ensure seamless assistance around the clock so you can focus on your goals without having to worry about your servers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                    <div className="card" style={{height:"100%"}}>
                        <div className="card-body p-xl-8">
                            <div className="hstack gap-3 mb-4">
                                <span className="d-inline-block flex-shrink-0">
                                    <img src="/img/cash.png" alt="image" className="img-fluid" style={{width:"56",height:"56px"}}/>
                                </span>
                                <h6 className="mb-0 flex-grow-1">
                                Zero Setup Fees
                                </h6>
                            </div>
                            <p className="mb-0">
                            At CloudMinister, we provide free-of-cost hassle-free Windows GPU server setup with no setup fees. Enjoy a smooth, no-cost installation of the control panel, OS, and essential software by our expert team, so you can focus on your business growth.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                    <div className="card" style={{height:"100%"}}>
                        <div className="card-body p-xl-8">
                            <div className="hstack gap-3 mb-4">
                                <span className="d-inline-block flex-shrink-0">
                                    <img src="/img/why-icon-3-dark.png" alt="image" className="img-fluid"/>
                                </span>
                                <h6 className="mb-0 flex-grow-1">
                                99.99% Uptime Guarantee
                                </h6>
                            </div>
                            <p className="mb-0">
                            With CloudMinister's Windows GPU servers, enjoy unmatched reliability with a 99.99% uptime guarantee. Our servers are optimized to handle traffic spikes, ensuring that your business keeps running smoothly without any disruptions.
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
