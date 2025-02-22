import Link from "next/link";

const CpanelNoIncreased = () => {
  return (
    <>
       <div className="pt-60 pb-10">
        <div className="pb-60">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <img src="/Middle/IOT (1).png" alt="image" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6">
                        <div className="ps-lg-8 pe-xxl-12">
                            <span className="d-block mb-2 text-primary fs-18 fw-semibold" data-sal="slide-up"
                                data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                           Custom IoT Development Services
                            </span>
                            <h3 className="mb-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            Leverage cloud-based IoT solutions with CloudMinister
                            </h3>
                            <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            Experience the future of IoT with advanced features designed to optimize performance and connectivity. While speed boosts SEO, our advanced IoT solutions guarantee seamless integration and unmatched efficiency that delivers excellence out of the box. Tailored for scalability and precision, we bring smarter technology right to your fingertips to transform your IoT network into a powerhouse of innovation.
                            </p>
                            
                            {/* <Link href="/price" className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded mt-5">
                                <span className="btn-arrow__text">
                                Explore IoT Solutions
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default CpanelNoIncreased
