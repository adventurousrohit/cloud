import Link from "next/link";
const SharedHostingHero = () => {
  return (
    <>
          <section className="banner banner-security bg-dark control-panel-banner">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-xl-6"> 
                    <h1 className="text-white mb-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        {" "}
                        Exploring the Infinite Possibilities of the  <span className="text-success-new">Internet of Things (IoT)</span>
                    </h1>
                    <p className="mb-8 text-white max-text-72 text-opacity-75" data-sal="slide-up" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    Living, working, and even interacting is changing as a result of the Internet of Things. IoT enables smooth communication across commonplace devices by linking them to the internet, spurring innovation in smart homes, manufacturing, and healthcare. Examine how the Internet of Things is transforming technology into a smart, real-time solution for our world.
                    </p>
                    <div className="d-flex align-items-center gap-5 flex-wrap" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <Link href="/contact/" className="btn btn-primary btn-arrow btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded">
                            <span className="btn-arrow__text">
                                Get Started
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                        {/* <h4 className="text-white mb-0">₹ 200.00<span className="fw-normal fs-16">/mo</span></h4> */}
                    </div>
                    {/* <span className="d-block fs-14 text-white text-opacity-75 mt-2" data-sal="slide-up" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        Worry-free - 45 Days Money Back
                    </span> */}
                </div>
                <div className="col-lg-5 col-xl-6 text-lg-end">
                    <img src="/email/Internet of Things.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default SharedHostingHero
