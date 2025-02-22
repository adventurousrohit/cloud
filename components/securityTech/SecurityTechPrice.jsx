import Link from "next/link";

const SecurityTechPrice = () => {
  return (
    <>
       <div className="pt-120 pb-120">
        <div className="pb-40">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-8 col-xl-7" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <h2 className="mb-0">
                            Tailored Hosting Plans to Suit Every Website
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 col-xl-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                        <div className="mb-2">
                            <img src="assets/img/icon-pricing-2.png" alt="image" className="img-fluid"/>
                        </div>
                        <h6>
                            VPS Hosting
                        </h6>
                        <small className="d-block mb-2">
                            Reviewed by thousands of customers
                            Stands out as one most.
                        </small>
                        <p>
                            Starting at: <strong className="text-primary text-decoration-line-through">$20.00/mo</strong>
                        </p>
                        <div className="mt-5">
                            <h3><sup>$</sup>18 <span className="fs-24">.30</span></h3>
                        </div>
                       <Link href="/price" className="btn btn-dark btn-arrow btn-lg fs-14 fw-medium rounded transition mt-6">
                            <span className="btn-arrow__text">
                                Explore Plan
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                        <div className="mb-2">
                            <img src="assets/img/icon-pricing-1.png" alt="image" className="img-fluid"/>
                        </div>
                        <h6>
                            WordPress Hosting
                        </h6>
                        <small className="d-block mb-2">
                            Reviewed by thousands of customers
                            Stands out as one most.
                        </small>
                        <p>
                            Starting at: <strong className="text-primary text-decoration-line-through">$20.00/mo</strong>
                        </p>
                        <div className="mt-5">
                            <h3><sup>$</sup>20 <span className="fs-24">.99</span></h3>
                        </div>
                       <Link href="/price" className="btn btn-dark btn-arrow btn-lg fs-14 fw-medium rounded transition mt-6">
                            <span className="btn-arrow__text">
                                Explore Plan
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                        <div className="mb-2">
                            <img src="assets/img/icon-pricing-3.png" alt="image" className="img-fluid"/>
                        </div>
                        <h6>
                            Reseller Hosting
                        </h6>
                        <small className="d-block mb-2">
                            Reviewed by thousands of customers
                            Stands out as one most.
                        </small>
                        <p>
                            Starting at: <strong className="text-primary text-decoration-line-through">$20.00/mo</strong>
                        </p>
                        <div className="mt-5">
                            <h3><sup>$</sup>25 <span className="fs-24">.50</span></h3>
                        </div>
                       <Link href="/price" className="btn btn-dark btn-arrow btn-lg fs-14 fw-medium rounded transition mt-6">
                            <span className="btn-arrow__text">
                                Explore Plan
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="600" data-sal-easing="ease-in-out-sine">
                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                        <div className="mb-2">
                            <img src="assets/img/icon-pricing-4.png" alt="image" className="img-fluid"/>
                        </div>
                        <h6>
                            Sheared Hosting
                        </h6>
                        <small className="d-block mb-2">
                            Reviewed by thousands of customers
                            Stands out as one most.
                        </small>
                        <p>
                            Starting at: <strong className="text-primary text-decoration-line-through">$20.00/mo</strong>
                        </p>
                        <div className="mt-5">
                            <h3><sup>$</sup>25 <span className="fs-24">.50</span></h3>
                        </div>
                       <Link href="/price" className="btn btn-dark btn-arrow btn-lg fs-14 fw-medium rounded transition mt-6">
                            <span className="btn-arrow__text">
                                Explore Plan
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default SecurityTechPrice
