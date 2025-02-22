
const AboutUsStory = () => {
  return (
    <>
      <div className="pt-120 pb-120">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <img src="/img/about.svg" alt="imge" className="img-fluid"/>
                </div>
                <div className="col-lg-8">
                    <h2 className="h5 d-inline-flex align-items-center gap-2 mb-4 text-primary" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <span className="d-inline-block">
                        About CloudMinister Technologies
                        </span>
                        <span className="d-inline-block w-15 h-1 bg-primary"></span>
                    </h2>
                    <p className="mb-6 fw-medium" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                   
At CloudMinister, we don't just become an IT services provider; we partner with you through digital transformation. Based in Jaipur, a vibrant city in India, our company specializes in delivering IT services and solutions that empower businesses to thrive digitally as well as globally.

                    </p>
                    <p className="mb-6 fw-medium" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    Our Mission – To become the leading provider of innovative and reliable IT solutions, accelerating business growth and driving success in the digital world.
                    </p>
                    <p className="mb-6 fw-medium" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    We bring years of experience and the highest level of professionalism to our work, while 24/7 support assures a seamless customer service and support process across borders. Let's be your reliable partner in the digital journey together. 
                    </p>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-xl-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <div className="card">
                                <div className="card-body">
                                    <div className="hstack gap-2">
                                        <span className="d-inline-block flex-shrink-0">
                                            <img src="/img/transaction.png" alt="image" className="img-fluid"  style={{maxWidth:"60px"}}/>
                                        </span>
                                        <h6 className="mb-0 flex-grow-1 fs-16">
                                        7-days Money Back Guarantee
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                            <div className="card">
                                <div className="card-body">
                                    <div className="hstack gap-2">
                                        <span className="d-inline-block flex-shrink-0">
                                            <img src="/img/quick.png" alt="image" className="img-fluid"  style={{maxWidth:"60px"}}/>
                                        </span>
                                        <h6 className="mb-0 flex-grow-1 fs-16">
                                         
                                       Fast & Secure With 99% Uptime
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                            <div className="card">
                                <div className="card-body">
                                    <div className="hstack gap-2">
                                        <span className="d-inline-block flex-shrink-0">
                                            <img src="/img/support.png" alt="image" className="img-fluid"  style={{maxWidth:"60px"}}/>
                                        </span>
                                        <h6 className="mb-0 flex-grow-1 fs-16" >
                                        24/7 Customer Support
                                        </h6>
                                    </div>
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

export default AboutUsStory
