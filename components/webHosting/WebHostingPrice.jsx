import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const WebHostingPrice = () => {
    const [selectedTab, setSelectedTab] = useState("3 years");
  return (
    <>
       <Tabs className="price-area-2 pt-120 pb-60 position-relative z-1">
        <div className="pt-80 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xxl-7">
                        <div className="text-center">
                            <h2 className="text-white mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">100% Green Hosting that’s
                                Right for you</h2>
                            <p className="text-white text-opacity-75" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">A ton of website hosting options,
                                99.9% uptime guarantee,
                                free SSL
                                certificate installs.</p>
                            <div className="d-flex justify-content-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                <div className="pricing-nav-pills d-inline-block mx-auto py-2 px-3 border rounded-pill overflow-x-auto">
                                <TabList className="nav nav-pills flex-nowrap">
                                        <Tab  onClick={()=>setSelectedTab("3 years")} className="nav-item flex-shrink-0  ">
                                            <button   className={`text-white  nav-link rounded-pill fs-14 cursor-pointer ${selectedTab==="3 years" ?"active":""}`}>
                                                3 Years <span
                                                    className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                    15%</span>
                                            </button>
                                        </Tab>
                                        <Tab  onClick={()=>setSelectedTab("2 years")}  className="nav-item flex-shrink-0">
                                        <button   className={`text-white  nav-link rounded-pill fs-14 cursor-pointer ${selectedTab==="2 years" ?"active":""}`}>
                                                2 Years <span
                                                    className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                    15%</span>
                                            </button>
                                        </Tab>
                                        <Tab onClick={()=>setSelectedTab("1 years")} className="nav-item flex-shrink-0">
                                        <button className={`text-white  nav-link rounded-pill fs-14 cursor-pointer ${selectedTab==="1 years" ?"active":""}`}>
                                                1 Years <span
                                                    className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                    5%</span>
                                            </button>
                                        </Tab>
                                        <Tab onClick={()=>setSelectedTab("monthly")} className="nav-item flex-shrink-0">
                                        <button className={` text-white nav-link rounded-pill fs-14 cursor-pointer ${selectedTab==="monthly" ?"active":""}`}>
                                                Monthly
                                            </button>
                                        </Tab>
                                    </TabList>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="tab-content" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <TabPanel className={`tab-pane fade ${selectedTab==="3 years"? "show active":""}`} >
                            <div className="row g-4">
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end rounded-3">
                                        <div className="text-center">
                                            <img src="/img/price-2-icon.png" alt="image" className="img-fluid mb-5"/>
                                            <h6 className="mb-1">SSL Gold</h6>
                                            <small>Our most affordable, single domain,
                                                WordPress Hosting plan.</small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                                                        <del className="fw-bold text-body">$8.95</del>
                                                        <span
                                                            className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                            15%</span>
                                                    </div>
                                                    <h4 className="mb-0">$45.99</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mt-6">
                                            <h6 className="mb-5">Top Featured</h6>
                                            <ul className="price-service-wrapper list-unstyled d-flex flex-column gap-3 mb-0">
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 <span className="fw-bold">Websites</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                            </ul>
                                            <a href="javascript:void(0)" className="price-control-btn text-decoration-none  d-flex align-items-center justify-content-center gap-3 mt-5">
                                                <p className="text-body fw-bold mb-0">Expand Feature</p>
                                                <div className="w-6 h-6 rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fs-14">
                                                    <i className="las la-angle-down"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end rounded-3">
                                        <div className="discount-badge gradient-bg">
                                            <p className="text-white fw-bold mb-0">30% Sale</p>
                                        </div>
                                        <div className="text-center">
                                            <img src="/img/price-2-icon.png" alt="image" className="img-fluid mb-5"/>
                                            <h6 className="mb-1">SSL Gold</h6>
                                            <small>Our most affordable, single domain,
                                                WordPress Hosting plan.</small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                                                        <del className="fw-bold text-body">$8.95</del>
                                                        <span
                                                            className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                            15%</span>
                                                    </div>
                                                    <h4 className="mb-0">$45.99</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mt-6">
                                            <h6 className="mb-5">Top Featured</h6>
                                            <ul className="price-service-wrapper list-unstyled d-flex flex-column gap-3 mb-0">
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 <span className="fw-bold">Websites</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                            </ul>
                                            <a href="javascript:void(0)" className="price-control-btn text-decoration-none  d-flex align-items-center justify-content-center gap-3 mt-5">
                                                <p className="text-body fw-bold mb-0">Expand Feature</p>
                                                <div className="w-6 h-6 rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fs-14">
                                                    <i className="las la-angle-down"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end rounded-3">
                                        <div className="text-center">
                                            <img src="/img/price-2-icon.png" alt="image" className="img-fluid mb-5"/>
                                            <h6 className="mb-1">SSL Gold</h6>
                                            <small>Our most affordable, single domain,
                                                WordPress Hosting plan.</small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                                                        <del className="fw-bold text-body">$8.95</del>
                                                        <span
                                                            className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                            15%</span>
                                                    </div>
                                                    <h4 className="mb-0">$45.99</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mt-6">
                                            <h6 className="mb-5">Top Featured</h6>
                                            <ul className="price-service-wrapper list-unstyled d-flex flex-column gap-3 mb-0">
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 <span className="fw-bold">Websites</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                            </ul>
                                            <a href="javascript:void(0)" className="price-control-btn text-decoration-none  d-flex align-items-center justify-content-center gap-3 mt-5">
                                                <p className="text-body fw-bold mb-0">Expand Feature</p>
                                                <div className="w-6 h-6 rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fs-14">
                                                    <i className="las la-angle-down"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className={`tab-pane fade ${selectedTab==="2 years"? "show active":""}`} >
                            <div className="row g-4">
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end rounded-3">
                                        <div className="text-center">
                                            <img src="/img/price-2-icon.png" alt="image" className="img-fluid mb-5"/>
                                            <h6 className="mb-1">SSL Gold</h6>
                                            <small>Our most affordable, single domain,
                                                WordPress Hosting plan.</small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                                                        <del className="fw-bold text-body">$8.95</del>
                                                        <span
                                                            className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                            15%</span>
                                                    </div>
                                                    <h4 className="mb-0">$35.99</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mt-6">
                                            <h6 className="mb-5">Top Featured</h6>
                                            <ul className="price-service-wrapper list-unstyled d-flex flex-column gap-3 mb-0">
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 <span className="fw-bold">Websites</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                            </ul>
                                            <a href="javascript:void(0)" className="price-control-btn text-decoration-none  d-flex align-items-center justify-content-center gap-3 mt-5">
                                                <p className="text-body fw-bold mb-0">Expand Feature</p>
                                                <div className="w-6 h-6 rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fs-14">
                                                    <i className="las la-angle-down"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end rounded-3">
                                        <div className="discount-badge gradient-bg">
                                            <p className="text-white fw-bold mb-0">30% Sale</p>
                                        </div>
                                        <div className="text-center">
                                            <img src="/img/price-2-icon.png" alt="image" className="img-fluid mb-5"/>
                                            <h6 className="mb-1">SSL Gold</h6>
                                            <small>Our most affordable, single domain,
                                                WordPress Hosting plan.</small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                                                        <del className="fw-bold text-body">$8.95</del>
                                                        <span
                                                            className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                            15%</span>
                                                    </div>
                                                    <h4 className="mb-0">$35.99</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mt-6">
                                            <h6 className="mb-5">Top Featured</h6>
                                            <ul className="price-service-wrapper list-unstyled d-flex flex-column gap-3 mb-0">
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 <span className="fw-bold">Websites</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                            </ul>
                                            <a href="javascript:void(0)" className="price-control-btn text-decoration-none  d-flex align-items-center justify-content-center gap-3 mt-5">
                                                <p className="text-body fw-bold mb-0">Expand Feature</p>
                                                <div className="w-6 h-6 rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fs-14">
                                                    <i className="las la-angle-down"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end rounded-3">
                                        <div className="text-center">
                                            <img src="/img/price-2-icon.png" alt="image" className="img-fluid mb-5"/>
                                            <h6 className="mb-1">SSL Gold</h6>
                                            <small>Our most affordable, single domain,
                                                WordPress Hosting plan.</small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                                                        <del className="fw-bold text-body">$8.95</del>
                                                        <span
                                                            className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                            15%</span>
                                                    </div>
                                                    <h4 className="mb-0">$45.99</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mt-6">
                                            <h6 className="mb-5">Top Featured</h6>
                                            <ul className="price-service-wrapper list-unstyled d-flex flex-column gap-3 mb-0">
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 <span className="fw-bold">Websites</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                            </ul>
                                            <a href="javascript:void(0)" className="price-control-btn text-decoration-none  d-flex align-items-center justify-content-center gap-3 mt-5">
                                                <p className="text-body fw-bold mb-0">Expand Feature</p>
                                                <div className="w-6 h-6 rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fs-14">
                                                    <i className="las la-angle-down"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className={`tab-pane fade ${selectedTab==="1 years"? "show active":""}`} >
                            <div className="row g-4">
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end rounded-3">
                                        <div className="text-center">
                                            <img src="/img/price-2-icon.png" alt="image" className="img-fluid mb-5"/>
                                            <h6 className="mb-1">SSL Gold</h6>
                                            <small>Our most affordable, single domain,
                                                WordPress Hosting plan.</small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                                                        <del className="fw-bold text-body">$8.95</del>
                                                        <span
                                                            className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                            15%</span>
                                                    </div>
                                                    <h4 className="mb-0">$45.99</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mt-6">
                                            <h6 className="mb-5">Top Featured</h6>
                                            <ul className="price-service-wrapper list-unstyled d-flex flex-column gap-3 mb-0">
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 <span className="fw-bold">Websites</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                            </ul>
                                            <a href="javascript:void(0)" className="price-control-btn text-decoration-none  d-flex align-items-center justify-content-center gap-3 mt-5">
                                                <p className="text-body fw-bold mb-0">Expand Feature</p>
                                                <div className="w-6 h-6 rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fs-14">
                                                    <i className="las la-angle-down"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end rounded-3">
                                        <div className="discount-badge gradient-bg">
                                            <p className="text-white fw-bold mb-0">30% Sale</p>
                                        </div>
                                        <div className="text-center">
                                            <img src="/img/price-2-icon.png" alt="image" className="img-fluid mb-5"/>
                                            <h6 className="mb-1">SSL Gold</h6>
                                            <small>Our most affordable, single domain,
                                                WordPress Hosting plan.</small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                                                        <del className="fw-bold text-body">$8.95</del>
                                                        <span
                                                            className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                            15%</span>
                                                    </div>
                                                    <h4 className="mb-0">$45.99</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mt-6">
                                            <h6 className="mb-5">Top Featured</h6>
                                            <ul className="price-service-wrapper list-unstyled d-flex flex-column gap-3 mb-0">
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 <span className="fw-bold">Websites</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                            </ul>
                                            <a href="javascript:void(0)" className="price-control-btn text-decoration-none  d-flex align-items-center justify-content-center gap-3 mt-5">
                                                <p className="text-body fw-bold mb-0">Expand Feature</p>
                                                <div className="w-6 h-6 rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fs-14">
                                                    <i className="las la-angle-down"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end rounded-3">
                                        <div className="text-center">
                                            <img src="/img/price-2-icon.png" alt="image" className="img-fluid mb-5"/>
                                            <h6 className="mb-1">SSL Gold</h6>
                                            <small>Our most affordable, single domain,
                                                WordPress Hosting plan.</small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                                                        <del className="fw-bold text-body">$8.95</del>
                                                        <span
                                                            className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                            15%</span>
                                                    </div>
                                                    <h4 className="mb-0">$45.99</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mt-6">
                                            <h6 className="mb-5">Top Featured</h6>
                                            <ul className="price-service-wrapper list-unstyled d-flex flex-column gap-3 mb-0">
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 <span className="fw-bold">Websites</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                            </ul>
                                            <a href="javascript:void(0)" className="price-control-btn text-decoration-none  d-flex align-items-center justify-content-center gap-3 mt-5">
                                                <p className="text-body fw-bold mb-0">Expand Feature</p>
                                                <div className="w-6 h-6 rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fs-14">
                                                    <i className="las la-angle-down"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className={`tab-pane fade ${selectedTab==="monthly"? "show active":""}`} >
                            <div className="row g-4">
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end rounded-3">
                                        <div className="text-center">
                                            <img src="/img/price-2-icon.png" alt="image" className="img-fluid mb-5"/>
                                            <h6 className="mb-1">SSL Gold</h6>
                                            <small>Our most affordable, single domain,
                                                WordPress Hosting plan.</small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                                                        <del className="fw-bold text-body">$8.95</del>
                                                        <span
                                                            className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                            15%</span>
                                                    </div>
                                                    <h4 className="mb-0">$2.99</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mt-6">
                                            <h6 className="mb-5">Top Featured</h6>
                                            <ul className="price-service-wrapper list-unstyled d-flex flex-column gap-3 mb-0">
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 <span className="fw-bold">Websites</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                            </ul>
                                            <a href="javascript:void(0)" className="price-control-btn text-decoration-none  d-flex align-items-center justify-content-center gap-3 mt-5">
                                                <p className="text-body fw-bold mb-0">Expand Feature</p>
                                                <div className="w-6 h-6 rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fs-14">
                                                    <i className="las la-angle-down"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end rounded-3">
                                        <div className="discount-badge gradient-bg">
                                            <p className="text-white fw-bold mb-0">30% Sale</p>
                                        </div>
                                        <div className="text-center">
                                            <img src="/img/price-2-icon.png" alt="image" className="img-fluid mb-5"/>
                                            <h6 className="mb-1">SSL Gold</h6>
                                            <small>Our most affordable, single domain,
                                                WordPress Hosting plan.</small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                                                        <del className="fw-bold text-body">$8.95</del>
                                                        <span
                                                            className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                            15%</span>
                                                    </div>
                                                    <h4 className="mb-0">$20.99</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mt-6">
                                            <h6 className="mb-5">Top Featured</h6>
                                            <ul className="price-service-wrapper list-unstyled d-flex flex-column gap-3 mb-0">
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 <span className="fw-bold">Websites</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                            </ul>
                                            <a href="javascript:void(0)" className="price-control-btn text-decoration-none  d-flex align-items-center justify-content-center gap-3 mt-5">
                                                <p className="text-body fw-bold mb-0">Expand Feature</p>
                                                <div className="w-6 h-6 rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fs-14">
                                                    <i className="las la-angle-down"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card-item-one position-relative overflow-hidden bg-white px-7 py-9 border-end rounded-3">
                                        <div className="text-center">
                                            <img src="/img/price-2-icon.png" alt="image" className="img-fluid mb-5"/>
                                            <h6 className="mb-1">SSL Gold</h6>
                                            <small>Our most affordable, single domain,
                                                WordPress Hosting plan.</small>
                                            <div className="mt-5">
                                                <div className="monthly-price">
                                                    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                                                        <del className="fw-bold text-body">$8.95</del>
                                                        <span
                                                            className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                            15%</span>
                                                    </div>
                                                    <h4 className="mb-0">$45.99</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-dark btn-arrow btn-lg w-100 fs-14 fw-bolder rounded mt-6" href="#">
                                            <span className="btn-arrow__text">
                                                Add to Cart
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mt-6">
                                            <h6 className="mb-5">Top Featured</h6>
                                            <ul className="price-service-wrapper list-unstyled d-flex flex-column gap-3 mb-0">
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Standard  <span className="fw-bold">Performance</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 <span className="fw-bold">Websites</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>100 GB <span className="fw-bold">SSD Storage</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Warranty <span className="fw-bold"> 10,000</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Free</small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold">Bandwidth</span></small>
                                                </li>
                                                <li className="d-flex align-items-center gap-3">
                                                    <div className="w-4 h-4 bg-success rounded-circle fs-12 text-white d-flex align-items-center justify-content-center">
                                                        <i className="las la-check"></i>
                                                    </div>
                                                    <small>Unlimited <span className="fw-bold"> Free SSL</span></small>
                                                </li>
                                            </ul>
                                            <a href="javascript:void(0)" className="price-control-btn text-decoration-none  d-flex align-items-center justify-content-center gap-3 mt-5">
                                                <p className="text-body fw-bold mb-0">Expand Feature</p>
                                                <div className="w-6 h-6 rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fs-14">
                                                    <i className="las la-angle-down"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </div>
            </div>
        </div>
    </Tabs>
    </>
  )
};

export default WebHostingPrice
