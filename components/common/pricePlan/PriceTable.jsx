
import { useState } from "react";

const PriceTable = ({title,price}) => {
    const [monthly,setMonthly]=useState(false)
    const handelToggle=()=>{
        setMonthly(!monthly)
    }
  return (
    <>
      <section className={`pt-60 pb-120 ${price?"bg-primary-subtle":""}`}>
        <div className="pb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="text-center">
                            <h2 data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine"> {title}</h2>
                            <h6 className="mb-4  mx-auto" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                            Our Best Cloud Web Hosting Pricing</h6>
                            <p className="mb-0 mx-auto" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">Go through with our amazing yet pocket-friendly Cloud Web Hosting plans and deals and choose according to website needs.</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center gap-3 mt-5" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                            <small className="fw-semibold">Monthly</small>
                            <div className="form-check form-switch toggle-switch">
                                <input onClick={handelToggle} className="form-check-input pricing-toggle" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            </div>
                            <small className="fw-semibold">Yearly</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-3 g-xl-0">
                <div className="col-xl-4 col-md-6">
                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end" data-sal="slide-up" data-sal-duration="350" data-sal-delay="50" data-sal-easing="ease-in-out-sine">
                    <div className="discount-badge gradient-bg">
                            <p className="text-white fw-bold mb-0">50% Sale</p>
                        </div>
                        <h6 className="mb-1">Startup Shared Hosting</h6>
                        <small>Affordable hosting for startups, offering shared resources for web projects.</small>
                        <div className="mt-5">
                            {
                                !monthly ? <><div className="monthly-price">
                                    <small className="fw-bold">Start From </small>
                                <h4>₹ 100.00</h4>
                                
                            </div></> :  <div className="monthly-price">
                                <h4>₹ 1680.00</h4>
                                <small className="fw-bold">Start From <del>₹ 2400.00</del></small>
                            </div>
                            }
                           
                        </div>
                        <div className="monthly-price">
                            <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                <span className="btn-arrow__text">
                                    Add to Cart
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </a>
                        
                        </div>
                        <div className="yearly-price">
                            <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                <span className="btn-arrow__text">
                                    Add to Cart
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </a>
                       
                        </div>

                        <div className="mt-6">
                            <h6 className="mb-5">Top Featured</h6>
                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>1 <span className="fw-bold">Websites</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>5 GB <span className="fw-bold">SSD Storage</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>512 MB <span className="fw-bold">RAM</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>1 <span className="fw-bold">Email Account</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>100 GB <span className="fw-bold">Bandwidth</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                </li>
                                {/* <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end" data-sal="slide-up" data-sal-duration="400" data-sal-delay="100" data-sal-easing="ease-in-out-sine">
                    <div className="discount-badge gradient-bg">
                            <p className="text-white fw-bold mb-0">50% Sale</p>
                        </div>
                        <h6 className="mb-1">Plus Shared Hosting</h6>
                        <small>Enhanced shared hosting with more resources for growing websites.</small>
                            <div className="mt-5">
                            {
                                !monthly ? <><div className="monthly-price">
                                    <small className="fw-bold">Start From </small>
                                <h4>₹ 125.00</h4>
                                
                            </div></> :  <div className="monthly-price">
                                <h4>₹ 2100.00</h4>
                                <small className="fw-bold">Start From <del>₹ 3000.00</del></small>
                            </div>
                            }
                           
                        </div>
                        <div className="monthly-price">
                            <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                <span className="btn-arrow__text">
                                    Add to Cart
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div className="yearly-price">
                            <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                <span className="btn-arrow__text">
                                    Add to Cart
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div className="mt-6">
                            <h6 className="mb-5">Top Featured</h6>
                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>2 <span className="fw-bold">Websites</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>10 GB <span className="fw-bold">SSD Storage</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>512 MB <span className="fw-bold">RAM</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>10 <span className="fw-bold">Email Account</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>100 GB <span className="fw-bold">Bandwidth</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                </li>
                                {/* <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end" data-sal="slide-up" data-sal-duration="450" data-sal-delay="150" data-sal-easing="ease-in-out-sine">
                        <div className="discount-badge gradient-bg">
                            <p className="text-white fw-bold mb-0">50% Sale</p>
                        </div>
                        <h6 className="mb-1">Pro Shared Hosting</h6>
                        <small>
                        Pro shared hosting offers better performance, security, support, and resources.</small>
                            <div className="mt-5">
                            {
                                !monthly ? <><div className="monthly-price">
                                    <small className="fw-bold">Start From </small>
                                <h4>₹ 400.00</h4>
                                
                            </div></> :  <div className="monthly-price">
                                <h4>₹ 6720.00</h4>
                                <small className="fw-bold">Start From <del>₹ 9600.00</del></small>
                            </div>
                            }
                           
                        </div>
                        <div className="monthly-price">
                            <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                <span className="btn-arrow__text">
                                    Add to Cart
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div className="yearly-price">
                            <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                <span className="btn-arrow__text">
                                    Add to Cart
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div className="mt-6">
                            <h6 className="mb-5">Top Featured</h6>
                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>20 <span className="fw-bold">Websites</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>1 GB <span className="fw-bold">RAM</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Unlimited <span className="fw-bold">Email Account</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                </li>
                                {/* <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="col-xl-3 col-md-6">
                    <div className="price-card-item-one bg-white px-7 py-9" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                        <h6 className="mb-1">SSL Diamond</h6>
                        <small>Our most affordable, single domain,
                            WordPress Hosting plan.</small>
                            <div className="mt-5">
                            {
                               ! monthly ? <><div className="monthly-price">
                                <h4>$30.99</h4>
                                <small className="fw-bold">Start From $99.99</small>
                            </div></> :  <div className="monthly-price">
                                <h4>$299.00</h4>
                                <small className="fw-bold">Start From $24.91</small>
                            </div>
                            }
                           
                        </div>
                        <div className="monthly-price">
                            <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                <span className="btn-arrow__text">
                                    Add to Cart
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </a>
                            <small className="d-block fw-medium mt-2">$7.99/mo when you renew</small>
                        </div>
                        <div className="yearly-price">
                            <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                <span className="btn-arrow__text">
                                    Add to Cart
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </a>
                            <small className="d-block fw-medium mt-2">$5.99/mo when you renew</small>
                        </div>
                        <div className="mt-6">
                            <h6 className="mb-5">Top Featured</h6>
                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>100 <span className="fw-bold">Websites</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                </li>
                                <li className="d-flex align-items-center gap-3">
                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center flex-shrink-0">
                                        <i className="las la-check"></i>
                                    </div>
                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        <div className="pt-40">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="400" data-sal-delay="100" data-sal-easing="ease-in-out-sine">
                        <h6>Free Setup & Installation*</h6>
                        <p>Need help? We will set up and install your SSL
                            certificate free of charge!*</p>
                    </div>
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="450" data-sal-delay="150" data-sal-easing="ease-in-out-sine">
                        <h6>Best in Class Encryption</h6>
                        <p>Need help? We will set up and install your SSL
                            certificate free of charge!*</p>
                    </div>
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                        <h6>24x7 Support</h6>
                        <p>Need help? We will set up and install your SSL
                            certificate free of charge!*</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default PriceTable
