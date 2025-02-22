import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
const IsomaticPricing = () => {
    const [selectedTab, setSelectedTab] = useState("3 years");
  return (
    <>
       <Tabs className="pt-40 pb-40">
        <div className="pb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="text-center">
                            <h2 data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                100% Green Hosting that’s Right for you
                            </h2>
                            <p data-sal="slide-up" data-sal-duration="700" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                A ton of website hosting options, 99.9% uptime guarantee, free SSL certificate installs.
                            </p>
                            <div className="d-flex justify-content-center" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                <div className="pricing-nav-pills d-inline-block mx-auto py-2 px-3 border rounded-pill overflow-x-auto">
                                    <TabList className="nav nav-pills flex-nowrap">
                                        <Tab  onClick={()=>setSelectedTab("3 years")} className="nav-item flex-shrink-0  ">
                                            <button   className={`nav-link rounded-pill fs-14 cursor-pointer ${selectedTab==="3 years" ?"active":""}`}>
                                                3 Years <span
                                                    className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                    15%</span>
                                            </button>
                                        </Tab>
                                        <Tab onClick={()=>setSelectedTab("2 years")} className="nav-item flex-shrink-0 pointer">
                                        <button className={`nav-link rounded-pill fs-14 ${selectedTab==="2 years" ?"active":""}`}>
                                                2 Years <span
                                                    className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                    15%</span>
                                            </button>
                                        </Tab>
                                        <Tab onClick={()=>setSelectedTab("1 years")} className="nav-item flex-shrink-0">
                                        <button className={`nav-link rounded-pill fs-14 cursor-pointer ${selectedTab==="1 years" ?"active":""}`}>
                                                1 Years <span
                                                    className="badge rounded-pill bg-primary-subtle text-primary-emphasis">Save
                                                    5%</span>
                                            </button>
                                        </Tab>
                                        <Tab onClick={()=>setSelectedTab("monthly")} className="nav-item flex-shrink-0">
                                        <button className={`nav-link rounded-pill fs-14 cursor-pointer ${selectedTab==="monthly" ?"active":""}`}>
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
            <div className="row">
                <div className="col-12">
                    <div className="tab-content" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <TabPanel className={`tab-pane fade ${selectedTab==="3 years"? "show active":""}`} >
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-1.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            WordPress Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-2.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            VPS Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-3.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            Reseller Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-4.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            Sheared Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                        </TabPanel>
                        <TabPanel className={`tab-pane fade ${selectedTab==="2 years"? "show active":""}`}>
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-2.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            VPS Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-1.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            WordPress Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-3.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            Reseller Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-4.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            Sheared Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                        </TabPanel>
                        <TabPanel className={`tab-pane fade ${selectedTab==="1 years"? "show active":""}`}>
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-1.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            WordPress Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-2.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            VPS Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-3.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            Reseller Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-4.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            Sheared Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                        </TabPanel>
                        <TabPanel className={`tab-pane fade ${selectedTab==="monthly"? "show active":""}`}>
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-2.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            VPS Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-1.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            WordPress Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-3.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            Reseller Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="price-card-item-one position-relative bg-white px-7 py-9 text-center rounded h-100">
                                        <div className="mb-2">
                                            <img src="/img/icon-pricing-4.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <h6>
                                            Sheared Hosting
                                        </h6>
                                        <small className="d-block mb-2">
                                            Reviewed by thousands of customers
                                            Stands out as one most.
                                        </small>
                                        <p>
                                            Starting at: <strong
                                                className="text-primary text-decoration-line-through">$20.00/mo</strong>
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
                        </TabPanel>
                    </div>
                </div>
            </div>
        </div>
    </Tabs>
    </>
  )
};

export default IsomaticPricing
