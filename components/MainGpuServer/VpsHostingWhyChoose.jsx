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
                    Why Choose GPU Server from Cloudminister?
                    </h2>
                    <p>Take your hosting to the next level with exclusive access to powerful bare-metal hardware. Say goodbye to shared resources, slow performance, and confusing pricing. With CloudMinister, experience unparalleled GPU server hosting designed to effortlessly meet your business needs.</p>
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
                                <h3 className="mb-0 flex-grow-1">
                                 Unlimited 24/7 Support
                                </h3>
                            </div>
                            <p className="mb-0">
                            Our round-the-clock dedicated GPU server support team ensures smooth operations for you. Be it an easy question or a critical issue, we provide timely solutions for your GPU hosting server requirements. Get your hassle-free GPU cloud server support whenever you need it the most.
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
                                <h3 className="mb-0 flex-grow-1">
                                Zero Setup Fees
                                </h3>
                            </div>
                            <p className="mb-0">
                            CloudMinister offers free NVIDIA GPU server setup for your AI or Linux-based environments without hidden costs. All aspects of operating systems, control panels, and software installations are taken care of by us. Focus on business growth while we work on setting up your GPU-dedicated server.
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
                                <h3 className="mb-0 flex-grow-1">
                                Uptime Guarantee
                                </h3>
                            </div>
                            <p className="mb-0">
                            Enjoy industry-leading 99.99% uptime with CloudMinister's dedicated NVIDIA GPU servers. Built for maximum reliability, our hosting solutions ensure smooth operations even during unexpected traffic surges. Trust us to deliver uninterrupted GPU cloud server performance.
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
