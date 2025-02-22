import Link from "next/link";

const EcommerceHostingNoIncreasedThree = () => {
  return (
    <>
      <div className="pt-120 pb-120 bg-primary bg-opacity-5">
        <div className="container">
            <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                    <div className="pe-xl-12">
                        <span className="d-inline-block fs-18 fw-semibold text-primary mb-2" data-sal="slide-up"
                            data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            No increased latency
                        </span>
                        <h2 className="mb-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            Launch Quickly, Scale Effortlessly
                        </h2>
                        <p data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            From physical goods to digital downloads and services, our Managed WooCommerce hosting has
                            everything you need to build a profitable online business. Our top-notch support team is a
                            source of pride.
                        </p>
                        <p className="mb-8" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            From physical goods to digital downloads and services, our Managed WooCommerce hosting has
                            everything you need to build a profitable online business. Our top-notch support team is a
                            source of pride.
                        </p>
                        <Link href="/price" className="btn btn-primary btn-arrow btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <span className="btn-arrow__text">
                                Get Started
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <img src="/img/ecom-img-4.png" alt="image" className="img-fluid"/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default EcommerceHostingNoIncreasedThree
