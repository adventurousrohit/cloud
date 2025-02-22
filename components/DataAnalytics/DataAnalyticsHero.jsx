import Link from "next/link";
const SharedHostingHero = () => {
  return (
    <>
          <section className="banner banner-security bg-dark control-panel-banner">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-xl-6"> 
                    <h1 className="text-white mb-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        
                    <span className="text-success-new">Data Analytics</span> {" "}Services - Turning Complex Data into Clear Strategies
                    </h1>
                    <p className="mb-8 text-white max-text-72 text-opacity-75" data-sal="slide-up" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    We at Data Analytics are going to turn raw data into meaningful insights using the innovation of combining with our expert service. It starts with trending, forecast outcome, and ultimately puts you and your business a step ahead of competitors. Turn data into strategic strength. Get results you want in life now. Discover smarter today!
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
                    <img src="/email/Data Analytics.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default SharedHostingHero
