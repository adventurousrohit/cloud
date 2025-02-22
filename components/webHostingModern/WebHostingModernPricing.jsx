import Link from "next/link";

const WebHostingModernPricing = () => {
  return (
    <>
         <section className="bg-warning-2 pt-60 pb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="text-center">
                        <h3 className="mb-8">We’ve got a Pricing Plan that’s Perfect for you</h3>
                    </div>
                </div>
                <div className="col-10">
                    <div className="d-flex justify-content-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="pricing-nav-pills d-inline-block mx-auto py-2 px-3 border rounded-pill overflow-x-auto">
                            <ul className="nav nav-pills tab-nav-9 flex-nowrap">
                                <li className="nav-item flex-shrink-0">
                                    <a className="text-black nav-link rounded-pill fs-14 active" href="#" data-bs-toggle="pill" data-bs-target="#plan-1">
                                        Shared Hosting
                                    </a>
                                </li>
                                <li className="nav-item flex-shrink-0">
                                    <a className="text-black nav-link rounded-pill fs-14" href="#" data-bs-toggle="pill" data-bs-target="#plan-2">
                                        WordPress Hosting
                                    </a>
                                </li>
                                <li className="nav-item flex-shrink-0">
                                    <a className="text-black nav-link rounded-pill fs-14" href="#" data-bs-toggle="pill" data-bs-target="#plan-3">
                                        Reseller Hosting
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content mt-12" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="tab-pane fade show active" id="plan-1">
                            <div className="row g-4 g-lg-2 g-xl-4">
                                <div className="col-lg-4 col-md-6 sal-animate" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                    <div className="card border-0">
                                        <div className="card-body position-relative overflow-hidden px-4 px-md-6 px-xl-8 px-xxl-10 py-8 py-md-10 shadow-lg rounded-3 text-center">
                                            <h6 className="mb-1">WordPress Starter</h6>
                                            <small>
                                                Our most affordable, single domain,
                                                WordPress Hosting plan.
                                            </small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <h4>$30.99</h4>
                                                    <small>Normally $99.99</small>
                                                </div>
                                                <div className="yearly-price">
                                                    <h4>$299.00</h4>
                                                    <small>Normally $24.91</small>
                                                </div>
                                            </div>
                                            <div className="my-6">
                                                <ul className="list-unstyled d-flex flex-column gap-3 m-0">
                                                    <li>
                                                        <small>Standard&nbsp; <span className="fw-bold">Performance</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 <span className="fw-bold">Websites</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">&nbsp;Free SSL</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Warranty <span className="fw-bold">&nbsp;10,000</span></small>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="monthly-price">
                                              <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$7.99/mo when you renew</small>
                                            </div>
                                            <div className="yearly-price">
                                              <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$24.91/mo when you renew</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 sal-animate" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                                    <div className="card border-0">
                                        <div className="card-body position-relative overflow-hidden px-4 px-md-6 px-xl-8 px-xxl-10 py-8 py-md-10 shadow-lg rounded-3 text-center">
                                            <div className="discount-badge gradient-bg">
                                                <p className="text-white fw-bold mb-0">30% Sale</p>
                                            </div>
                                            <h6 className="mb-1">WordPress Standard</h6>
                                            <small>
                                                Our most affordable, single domain,
                                                WordPress Hosting plan.
                                            </small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <h4>$30.99</h4>
                                                    <small>Normally $99.99</small>
                                                </div>
                                                <div className="yearly-price">
                                                    <h4>$299.00</h4>
                                                    <small>Normally $24.91</small>
                                                </div>
                                            </div>
                                            <div className="my-6">
                                                <ul className="list-unstyled d-flex flex-column gap-3 m-0">
                                                    <li>
                                                        <small>Standard&nbsp; <span className="fw-bold">Performance</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 <span className="fw-bold">Websites</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">&nbsp;Free SSL</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Warranty <span className="fw-bold">&nbsp;10,000</span></small>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="monthly-price">
                                              <Link href="/price" className="btn btn-warning btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$7.99/mo when you renew</small>
                                            </div>
                                            <div className="yearly-price">
                                              <Link href="/price" className="btn btn-success btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$24.91/mo when you renew</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 sal-animate" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                                    <div className="card border-0">
                                        <div className="card-body position-relative overflow-hidden px-4 px-md-6 px-xl-8 px-xxl-10 py-8 py-md-10 shadow-lg rounded-3 text-center">
                                            <h6 className="mb-1">WordPress Premium</h6>
                                            <small>
                                                Our most affordable, single domain,
                                                WordPress Hosting plan.
                                            </small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <h4>$30.99</h4>
                                                    <small>Normally $99.99</small>
                                                </div>
                                                <div className="yearly-price">
                                                    <h4>$299.00</h4>
                                                    <small>Normally $24.91</small>
                                                </div>
                                            </div>
                                            <div className="my-6">
                                                <ul className="list-unstyled d-flex flex-column gap-3 m-0">
                                                    <li>
                                                        <small>Standard&nbsp; <span className="fw-bold">Performance</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 <span className="fw-bold">Websites</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">&nbsp;Free SSL</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Warranty <span className="fw-bold">&nbsp;10,000</span></small>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="monthly-price">
                                              <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$7.99/mo when you renew</small>
                                            </div>
                                            <div className="yearly-price">
                                              <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$24.91/mo when you renew</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="plan-2">
                            <div className="row g-4 g-lg-2 g-xl-4">
                                <div className="col-lg-4 col-md-6 sal-animate" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                    <div className="card border-0">
                                        <div className="card-body position-relative overflow-hidden px-4 px-md-6 px-xl-8 px-xxl-10 py-8 py-md-10 shadow-lg rounded-3 text-center">
                                            <h6 className="mb-1">WordPress Starter</h6>
                                            <small>
                                                Our most affordable, single domain,
                                                WordPress Hosting plan.
                                            </small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <h4>$30.99</h4>
                                                    <small>Normally $99.99</small>
                                                </div>
                                                <div className="yearly-price">
                                                    <h4>$299.00</h4>
                                                    <small>Normally $24.91</small>
                                                </div>
                                            </div>
                                            <div className="my-6">
                                                <ul className="list-unstyled d-flex flex-column gap-3 m-0">
                                                    <li>
                                                        <small>Standard&nbsp; <span className="fw-bold">Performance</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 <span className="fw-bold">Websites</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">&nbsp;Free SSL</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Warranty <span className="fw-bold">&nbsp;10,000</span></small>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="monthly-price">
                                              <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$7.99/mo when you renew</small>
                                            </div>
                                            <div className="yearly-price">
                                              <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$24.91/mo when you renew</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 sal-animate" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                                    <div className="card border-0">
                                        <div className="card-body position-relative overflow-hidden px-4 px-md-6 px-xl-8 px-xxl-10 py-8 py-md-10 shadow-lg rounded-3 text-center">
                                            <div className="discount-badge gradient-bg">
                                                <p className="text-white fw-bold mb-0">30% Sale</p>
                                            </div>
                                            <h6 className="mb-1">WordPress Standard</h6>
                                            <small>
                                                Our most affordable, single domain,
                                                WordPress Hosting plan.
                                            </small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <h4>$30.99</h4>
                                                    <small>Normally $99.99</small>
                                                </div>
                                                <div className="yearly-price">
                                                    <h4>$299.00</h4>
                                                    <small>Normally $24.91</small>
                                                </div>
                                            </div>
                                            <div className="my-6">
                                                <ul className="list-unstyled d-flex flex-column gap-3 m-0">
                                                    <li>
                                                        <small>Standard&nbsp; <span className="fw-bold">Performance</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 <span className="fw-bold">Websites</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">&nbsp;Free SSL</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Warranty <span className="fw-bold">&nbsp;10,000</span></small>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="monthly-price">
                                              <Link href="/price" className="btn btn-warning btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$7.99/mo when you renew</small>
                                            </div>
                                            <div className="yearly-price">
                                              <Link href="/price" className="btn btn-success btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$24.91/mo when you renew</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 sal-animate" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                                    <div className="card border-0">
                                        <div className="card-body position-relative overflow-hidden px-4 px-md-6 px-xl-8 px-xxl-10 py-8 py-md-10 shadow-lg rounded-3 text-center">
                                            <h6 className="mb-1">WordPress Premium</h6>
                                            <small>
                                                Our most affordable, single domain,
                                                WordPress Hosting plan.
                                            </small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <h4>$30.99</h4>
                                                    <small>Normally $99.99</small>
                                                </div>
                                                <div className="yearly-price">
                                                    <h4>$299.00</h4>
                                                    <small>Normally $24.91</small>
                                                </div>
                                            </div>
                                            <div className="my-6">
                                                <ul className="list-unstyled d-flex flex-column gap-3 m-0">
                                                    <li>
                                                        <small>Standard&nbsp; <span className="fw-bold">Performance</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 <span className="fw-bold">Websites</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">&nbsp;Free SSL</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Warranty <span className="fw-bold">&nbsp;10,000</span></small>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="monthly-price">
                                              <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$7.99/mo when you renew</small>
                                            </div>
                                            <div className="yearly-price">
                                              <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$24.91/mo when you renew</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="plan-3">
                            <div className="row g-4 g-lg-2 g-xl-4">
                                <div className="col-lg-4 col-md-6 sal-animate" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                    <div className="card border-0">
                                        <div className="card-body position-relative overflow-hidden px-4 px-md-6 px-xl-8 px-xxl-10 py-8 py-md-10 shadow-lg rounded-3 text-center">
                                            <h6 className="mb-1">WordPress Starter</h6>
                                            <small>
                                                Our most affordable, single domain,
                                                WordPress Hosting plan.
                                            </small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <h4>$30.99</h4>
                                                    <small>Normally $99.99</small>
                                                </div>
                                                <div className="yearly-price">
                                                    <h4>$299.00</h4>
                                                    <small>Normally $24.91</small>
                                                </div>
                                            </div>
                                            <div className="my-6">
                                                <ul className="list-unstyled d-flex flex-column gap-3 m-0">
                                                    <li>
                                                        <small>Standard&nbsp; <span className="fw-bold">Performance</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 <span className="fw-bold">Websites</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">&nbsp;Free SSL</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Warranty <span className="fw-bold">&nbsp;10,000</span></small>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="monthly-price">
                                              <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$7.99/mo when you renew</small>
                                            </div>
                                            <div className="yearly-price">
                                              <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$24.91/mo when you renew</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 sal-animate" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                                    <div className="card border-0">
                                        <div className="card-body position-relative overflow-hidden px-4 px-md-6 px-xl-8 px-xxl-10 py-8 py-md-10 shadow-lg rounded-3 text-center">
                                            <div className="discount-badge gradient-bg">
                                                <p className="text-white fw-bold mb-0">30% Sale</p>
                                            </div>
                                            <h6 className="mb-1">WordPress Standard</h6>
                                            <small>
                                                Our most affordable, single domain,
                                                WordPress Hosting plan.
                                            </small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <h4>$30.99</h4>
                                                    <small>Normally $99.99</small>
                                                </div>
                                                <div className="yearly-price">
                                                    <h4>$299.00</h4>
                                                    <small>Normally $24.91</small>
                                                </div>
                                            </div>
                                            <div className="my-6">
                                                <ul className="list-unstyled d-flex flex-column gap-3 m-0">
                                                    <li>
                                                        <small>Standard&nbsp; <span className="fw-bold">Performance</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 <span className="fw-bold">Websites</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">&nbsp;Free SSL</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Warranty <span className="fw-bold">&nbsp;10,000</span></small>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="monthly-price">
                                              <Link href="/price" className="btn btn-warning btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$7.99/mo when you renew</small>
                                            </div>
                                            <div className="yearly-price">
                                              <Link href="/price" className="btn btn-success btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$24.91/mo when you renew</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 sal-animate" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                                    <div className="card border-0">
                                        <div className="card-body position-relative overflow-hidden px-4 px-md-6 px-xl-8 px-xxl-10 py-8 py-md-10 shadow-lg rounded-3 text-center">
                                            <h6 className="mb-1">WordPress Premium</h6>
                                            <small>
                                                Our most affordable, single domain,
                                                WordPress Hosting plan.
                                            </small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <h4>$30.99</h4>
                                                    <small>Normally $99.99</small>
                                                </div>
                                                <div className="yearly-price">
                                                    <h4>$299.00</h4>
                                                    <small>Normally $24.91</small>
                                                </div>
                                            </div>
                                            <div className="my-6">
                                                <ul className="list-unstyled d-flex flex-column gap-3 m-0">
                                                    <li>
                                                        <small>Standard&nbsp; <span className="fw-bold">Performance</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 <span className="fw-bold">Websites</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Unlimited <span className="fw-bold">&nbsp;Free SSL</span></small>
                                                    </li>
                                                    <li>
                                                        <small>Warranty <span className="fw-bold">&nbsp;10,000</span></small>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="monthly-price">
                                              <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$7.99/mo when you renew</small>
                                            </div>
                                            <div className="yearly-price">
                                              <Link href="/price" className="btn btn-dark btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded">
                                                    <span className="btn-arrow__text">
                                                        Add to Cart
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                            </Link>
                                                <small className="d-block fw-medium mt-2">$24.91/mo when you renew</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default WebHostingModernPricing
