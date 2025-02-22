import Link from "next/link";

const ModernHomePrice = () => {
  return (
    <>
       <section className="price-8 mb-4">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="text-center">
                        <h2 className="mb-8">We’ve got a Pricing Plan that’s Perfect for you</h2>
                    </div>
                </div>
                <div className="col-10">
                    <div className="d-flex justify-content-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="pricing-nav-pills d-inline-block mx-auto py-2 px-3 border rounded-pill overflow-x-auto">
                            <ul className="nav nav-pills tab-nav-8 flex-nowrap">
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
                            <div className="row g-4">
                                <div className="col-md-6 col-xl-4">
                                    <div className="price-card-8 bg-white px-7 py-9 rounded-4 transition">
                                        <h6 className="fw-bold mb-3">Basic Plan</h6>
                                        <h3 className="mb-7">$35.99</h3>
                                        <div className="d-inline-block px-6 py-1 rounded-pill border border-warning mb-7">
                                            <p className="mb-0"><span className="text-black fw-bold">1</span> year’s</p>
                                        </div>
                                        <ul className="list-unstyled d-flex flex-column gap-3 mb-7">
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Standard Performance</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 Websites</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Bandwidth</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Free SSL</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Warranty 10,000</p>
                                            </li>
                                        </ul>
                                        <Link href="/price" className="btn btn-primary border-0 gradient-bg-2 btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="price-card-8 bg-white px-7 py-9 rounded-4 transition">
                                        <h6 className="fw-bold mb-3">Business Plan</h6>
                                        <h3 className="mb-7">$35.99</h3>
                                        <div className="d-inline-block px-6 py-1 rounded-pill border border-warning mb-7">
                                            <p className="mb-0"><span className="text-black fw-bold">1</span> year’s</p>
                                        </div>
                                        <ul className="list-unstyled d-flex flex-column gap-3 mb-7">
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Standard Performance</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 Websites</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Bandwidth</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Free SSL</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Warranty 10,000</p>
                                            </li>
                                        </ul>
                                        <Link href="/price" className="btn btn-primary border-0 gradient-bg-2 btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="price-card-8 bg-white px-7 py-9 rounded-4 transition">
                                        <h6 className="fw-bold mb-3">Enterprise Plan</h6>
                                        <h3 className="mb-7">$35.99</h3>
                                        <div className="d-inline-block px-6 py-1 rounded-pill border border-warning mb-7">
                                            <p className="mb-0"><span className="text-black fw-bold">1</span> year’s</p>
                                        </div>
                                        <ul className="list-unstyled d-flex flex-column gap-3 mb-7">
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Standard Performance</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 Websites</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Bandwidth</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Free SSL</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Warranty 10,000</p>
                                            </li>
                                        </ul>
                                        <Link href="/price" className="btn btn-primary border-0 gradient-bg-2 btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="plan-2">
                            <div className="row g-4">
                                <div className="col-md-6 col-xl-4">
                                    <div className="price-card-8 bg-white px-7 py-9 rounded-4 transition">
                                        <h6 className="fw-bold mb-3">Basic Plan</h6>
                                        <h3 className="mb-7">$35.99</h3>
                                        <div className="d-inline-block px-6 py-1 rounded-pill border border-warning mb-7">
                                            <p className="mb-0"><span className="text-black fw-bold">1</span> year’s</p>
                                        </div>
                                        <ul className="list-unstyled d-flex flex-column gap-3 mb-7">
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Standard Performance</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 Websites</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Bandwidth</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Free SSL</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Warranty 10,000</p>
                                            </li>
                                        </ul>
                                        <Link href="/price" className="btn btn-primary border-0 gradient-bg-2 btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="price-card-8 bg-white px-7 py-9 rounded-4 transition">
                                        <h6 className="fw-bold mb-3">Business Plan</h6>
                                        <h3 className="mb-7">$35.99</h3>
                                        <div className="d-inline-block px-6 py-1 rounded-pill border border-warning mb-7">
                                            <p className="mb-0"><span className="text-black fw-bold">1</span> year’s</p>
                                        </div>
                                        <ul className="list-unstyled d-flex flex-column gap-3 mb-7">
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Standard Performance</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 Websites</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Bandwidth</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Free SSL</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Warranty 10,000</p>
                                            </li>
                                        </ul>
                                        <Link href="/price" className="btn btn-primary border-0 gradient-bg-2 btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="price-card-8 bg-white px-7 py-9 rounded-4 transition">
                                        <h6 className="fw-bold mb-3">Enterprise Plan</h6>
                                        <h3 className="mb-7">$35.99</h3>
                                        <div className="d-inline-block px-6 py-1 rounded-pill border border-warning mb-7">
                                            <p className="mb-0"><span className="text-black fw-bold">1</span> year’s</p>
                                        </div>
                                        <ul className="list-unstyled d-flex flex-column gap-3 mb-7">
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Standard Performance</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 Websites</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Bandwidth</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Free SSL</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Warranty 10,000</p>
                                            </li>
                                        </ul>
                                        <Link href="/price" className="btn btn-primary border-0 gradient-bg-2 btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="plan-3">
                            <div className="row g-4">
                                <div className="col-md-6 col-xl-4">
                                    <div className="price-card-8 bg-white px-7 py-9 rounded-4 transition">
                                        <h6 className="fw-bold mb-3">Basic Plan</h6>
                                        <h3 className="mb-7">$35.99</h3>
                                        <div className="d-inline-block px-6 py-1 rounded-pill border border-warning mb-7">
                                            <p className="mb-0"><span className="text-black fw-bold">1</span> year’s</p>
                                        </div>
                                        <ul className="list-unstyled d-flex flex-column gap-3 mb-7">
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Standard Performance</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 Websites</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Bandwidth</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Free SSL</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Warranty 10,000</p>
                                            </li>
                                        </ul>
                                        <Link href="/price" className="btn btn-primary border-0 gradient-bg-2 btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="price-card-8 bg-white px-7 py-9 rounded-4 transition">
                                        <h6 className="fw-bold mb-3">Business Plan</h6>
                                        <h3 className="mb-7">$35.99</h3>
                                        <div className="d-inline-block px-6 py-1 rounded-pill border border-warning mb-7">
                                            <p className="mb-0"><span className="text-black fw-bold">1</span> year’s</p>
                                        </div>
                                        <ul className="list-unstyled d-flex flex-column gap-3 mb-7">
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Standard Performance</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 Websites</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Bandwidth</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Free SSL</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Warranty 10,000</p>
                                            </li>
                                        </ul>
                                        <Link href="/price" className="btn btn-primary border-0 gradient-bg-2 btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="price-card-8 bg-white px-7 py-9 rounded-4 transition">
                                        <h6 className="fw-bold mb-3">Enterprise Plan</h6>
                                        <h3 className="mb-7">$35.99</h3>
                                        <div className="d-inline-block px-6 py-1 rounded-pill border border-warning mb-7">
                                            <p className="mb-0"><span className="text-black fw-bold">1</span> year’s</p>
                                        </div>
                                        <ul className="list-unstyled d-flex flex-column gap-3 mb-7">
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Standard Performance</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 Websites</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">100 GB SSD Storage</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Bandwidth</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Unlimited Free SSL</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <div className="w-4 h-4 border border-dark-subtle rounded-circle fs-12 d-flex align-items-center justify-content-center">
                                                    <i className="las la-check"></i>
                                                </div>
                                                <p className="mb-0">Warranty 10,000</p>
                                            </li>
                                        </ul>
                                        <Link href="/price" className="btn btn-primary border-0 gradient-bg-2 btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                            <span className="btn-arrow__text">
                                                Add to Cart
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
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default ModernHomePrice
