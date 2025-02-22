import { useState } from "react";
import Link from "next/link";
import { TabList, TabPanel, Tabs,Tab } from "react-tabs";
const VpsHostingPlanThree = () => {
    const [activeTab,setActiveTab]=useState("linux")
    // linux 
    const [linuxActiveTable,setLinuxActiveTable]=useState("L-feature-1")
        // windows 
        const [windowsActiveTable,setWindowsActiveTable]=useState("W-feature-1")
         // cloud 
         const [cloudActiveTable,setCloudActiveTable]=useState("C-feature-1")
  return (
    <>
      <div className="pt-60 pb-60 bg-primary-subtle">
        
        <div className="pb-60">
            <div className="pb-40">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                <h2>
                                    Managed VPS Hosting Plans
                                </h2>
                                <p className="mb-0 max-text-52 mx-auto">
                                    Take your online presence to the next level with our all-inclusive shared hosting plans,
                                    crafted for faster page load times!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tabs className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="pricing-nav-pills d-block mx-auto">
                            <TabList className="nav nav-pills justify-content-center">
                                <Tab onClick={()=>setActiveTab("linux")} className="nav-item">
                                    <a type="button" className={`partner-tab-nev d-inline-block text-decoration-none text-body fw-bold px-3 pb-2 ${activeTab==="linux"?"active":""}`}>
                                        Linux VPS Hosting
                                    </a>
                                </Tab>
                                <Tab onClick={()=>setActiveTab("windows")} className="nav-item">
                                    <a type="button" className={`partner-tab-nev d-inline-block text-decoration-none text-body fw-bold px-3 pb-2 ${activeTab==="windows"?"active":""}`}>
                                        Windows VPS Hosting
                                    </a>
                                </Tab>
                                <Tab onClick={()=>setActiveTab("cloud")} className="nav-item">
                                    <a type="button" className={`partner-tab-nev d-inline-block text-decoration-none text-body fw-bold px-3 pb-2 ${activeTab==="cloud"?"active":""}`}>
                                       Cloud VPS Hosting
                                    </a>
                                </Tab>
                            </TabList>
                        </div>
                        <div>
                            <TabPanel className={`tab-pane fade ${activeTab==="linux"?"show active":""}`}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered table-collapsible mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <div className="h5 mb-0">
                                                                        Compare Our Cloud VPS Hosting Plans
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="text-center">
                                                                        <p className="mb-1 fw-bold text-light-emphasis">
                                                                            Cloud VPS_1
                                                                        </p>
                                                                        <div className="h5">
                                                                            $27.40
                                                                        </div>
                                                                        <span
                                                                            className="d-block fw-normal mb-4 fs-12 text-light-emphasis">
                                                                            (on a 12 month plan)
                                                                        </span>
                                                                       <Link href="/price" className="btn btn-sm btn-primary btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                                                            <span className="btn-arrow__text">
                                                                                Get Started
                                                                                <span className="btn-arrow__icon">
                                                                                    <i className="las la-arrow-right"></i>
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="text-center">
                                                                        <p className="mb-1 fw-bold text-light-emphasis">
                                                                            Cloud VPS_2
                                                                        </p>
                                                                        <div className="h5">
                                                                            $40.40
                                                                        </div>
                                                                        <span
                                                                            className="d-block fw-normal mb-4 fs-12 text-light-emphasis">
                                                                            (on a 12 month plan)
                                                                        </span>
                                                                       <Link href="/price" className="btn btn-sm btn-dark btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                                                            <span className="btn-arrow__text">
                                                                                Get Started
                                                                                <span className="btn-arrow__icon">
                                                                                    <i className="las la-arrow-right"></i>
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="text-center">
                                                                        <p className="mb-1 fw-bold text-light-emphasis">
                                                                            Cloud VPS_3
                                                                        </p>
                                                                        <div className="h5">
                                                                            $48.50
                                                                        </div>
                                                                        <span
                                                                            className="d-block fw-normal mb-4 fs-12 text-light-emphasis">
                                                                            (on a 12 month plan)
                                                                        </span>
                                                                       <Link href="/price" className="btn btn-sm btn-dark btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                                                            <span className="btn-arrow__text">
                                                                                Get Started
                                                                                <span className="btn-arrow__icon">
                                                                                    <i className="las la-arrow-right"></i>
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="text-center">
                                                                        <p className="mb-1 fw-bold text-light-emphasis">
                                                                            Cloud VPS_4
                                                                        </p>
                                                                        <div className="h5">
                                                                            $90.00
                                                                        </div>
                                                                        <span
                                                                            className="d-block fw-normal mb-4 fs-12 text-light-emphasis">
                                                                            (on a 12 month plan)
                                                                        </span>
                                                                       <Link href="/price" className="btn btn-sm btn-dark btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                                                            <span className="btn-arrow__text">
                                                                                Get Started
                                                                                <span className="btn-arrow__icon">
                                                                                    <i className="las la-arrow-right"></i>
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion accordion-table-pricing">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button  onClick={() => 
                                                   setLinuxActiveTable(prev => prev === "L-feature-1" ? null : "L-feature-1")
                                                   }  className="accordion-button fs-14 fw-bold">
                                                        EXCLUSIVE VPS HOSTING FEATURES-1
                                                    </button>
                                                </h2>
                                                <div className={`accordion-collapse collapse ${linuxActiveTable==="L-feature-1"?"show":""}`}>
                                                    <div className="accordion-body p-0">
                                                        <div className="card border-0">
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <table className="table table-bordered table-collapsible mb-0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Websites Hosted
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Bandwidth
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        12 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24 TB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        CPU (Cores)
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Memory
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        16GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24GB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Free cPanel/WHM
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Full Management
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Priority Technical Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Softaculous 1-Click Install
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        7-Days MoneyBack Guarantee
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Multiple Server Locations
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button  onClick={() => 
                                                   setLinuxActiveTable(prev => prev === "L-feature-2" ? null : "L-feature-2")
                                                   }  className="accordion-button fs-14 fw-bold">
                                                        EXCLUSIVE VPS HOSTING FEATURES-2
                                                    </button>
                                                </h2>
                                                <div className={`accordion-collapse collapse ${linuxActiveTable==="L-feature-2"?"show":""}`}>
                                                    <div className="accordion-body p-0">
                                                        <div className="card border-0">
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <table className="table table-bordered table-collapsible mb-0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Websites Hosted
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Bandwidth
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        12 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24 TB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        CPU (Cores)
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Memory
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        16GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24GB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Free cPanel/WHM
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Full Management
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Priority Technical Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Softaculous 1-Click Install
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        7-Days MoneyBack Guarantee
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Multiple Server Locations
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button  onClick={() => 
                                                   setLinuxActiveTable(prev => prev === "L-feature-3" ? null : "L-feature-3")
                                                   }  className="accordion-button fs-14 fw-bold">
                                                        EXCLUSIVE VPS HOSTING FEATURES-3
                                                    </button>
                                                </h2>
                                                <div className={`accordion-collapse collapse ${linuxActiveTable==="L-feature-3"?"show":""}`}>
                                                    <div className="accordion-body p-0">
                                                        <div className="card border-0">
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <table className="table table-bordered table-collapsible mb-0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Websites Hosted
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Bandwidth
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        12 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24 TB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        CPU (Cores)
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Memory
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        16GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24GB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Free cPanel/WHM
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Full Management
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Priority Technical Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Softaculous 1-Click Install
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        7-Days MoneyBack Guarantee
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Multiple Server Locations
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className={`tab-pane fade ${activeTab==="windows"?"show active":""}`}>
                            <div className="card">
                                    <div className="card-body">
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered table-collapsible mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <div className="h5 mb-0">
                                                                        Compare Our Cloud VPS Hosting Plans
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="text-center">
                                                                        <p className="mb-1 fw-bold text-light-emphasis">
                                                                            Cloud VPS_1
                                                                        </p>
                                                                        <div className="h5">
                                                                            $27.40
                                                                        </div>
                                                                        <span
                                                                            className="d-block fw-normal mb-4 fs-12 text-light-emphasis">
                                                                            (on a 12 month plan)
                                                                        </span>
                                                                       <Link href="/price" className="btn btn-sm btn-primary btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                                                            <span className="btn-arrow__text">
                                                                                Get Started
                                                                                <span className="btn-arrow__icon">
                                                                                    <i className="las la-arrow-right"></i>
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="text-center">
                                                                        <p className="mb-1 fw-bold text-light-emphasis">
                                                                            Cloud VPS_2
                                                                        </p>
                                                                        <div className="h5">
                                                                            $40.40
                                                                        </div>
                                                                        <span
                                                                            className="d-block fw-normal mb-4 fs-12 text-light-emphasis">
                                                                            (on a 12 month plan)
                                                                        </span>
                                                                       <Link href="/price" className="btn btn-sm btn-dark btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                                                            <span className="btn-arrow__text">
                                                                                Get Started
                                                                                <span className="btn-arrow__icon">
                                                                                    <i className="las la-arrow-right"></i>
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="text-center">
                                                                        <p className="mb-1 fw-bold text-light-emphasis">
                                                                            Cloud VPS_3
                                                                        </p>
                                                                        <div className="h5">
                                                                            $48.50
                                                                        </div>
                                                                        <span
                                                                            className="d-block fw-normal mb-4 fs-12 text-light-emphasis">
                                                                            (on a 12 month plan)
                                                                        </span>
                                                                       <Link href="/price" className="btn btn-sm btn-dark btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                                                            <span className="btn-arrow__text">
                                                                                Get Started
                                                                                <span className="btn-arrow__icon">
                                                                                    <i className="las la-arrow-right"></i>
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="text-center">
                                                                        <p className="mb-1 fw-bold text-light-emphasis">
                                                                            Cloud VPS_4
                                                                        </p>
                                                                        <div className="h5">
                                                                            $90.00
                                                                        </div>
                                                                        <span
                                                                            className="d-block fw-normal mb-4 fs-12 text-light-emphasis">
                                                                            (on a 12 month plan)
                                                                        </span>
                                                                       <Link href="/price" className="btn btn-sm btn-dark btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                                                            <span className="btn-arrow__text">
                                                                                Get Started
                                                                                <span className="btn-arrow__icon">
                                                                                    <i className="las la-arrow-right"></i>
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion accordion-table-pricing">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button  onClick={() => 
                                                   setWindowsActiveTable(prev => prev === "W-feature-1" ? null : "W-feature-1")
                                                   }  className="accordion-button fs-14 fw-bold">
                                                        EXCLUSIVE VPS HOSTING FEATURES-1
                                                    </button>
                                                </h2>
                                                <div className={`accordion-collapse collapse ${windowsActiveTable==="W-feature-1"?"show":""}`}>
                                                    <div className="accordion-body p-0">
                                                        <div className="card border-0">
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <table className="table table-bordered table-collapsible mb-0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Websites Hosted
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Bandwidth
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        12 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24 TB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        CPU (Cores)
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Memory
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        16GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24GB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Free cPanel/WHM
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Full Management
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Priority Technical Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Softaculous 1-Click Install
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        7-Days MoneyBack Guarantee
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Multiple Server Locations
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button  onClick={() => 
                                                   setWindowsActiveTable(prev => prev === "W-feature-2" ? null : "W-feature-2")
                                                   }  className="accordion-button fs-14 fw-bold">
                                                        EXCLUSIVE VPS HOSTING FEATURES-2
                                                    </button>
                                                </h2>
                                                <div className={`accordion-collapse collapse ${windowsActiveTable==="W-feature-2"?"show":""}`}>
                                                    <div className="accordion-body p-0">
                                                        <div className="card border-0">
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <table className="table table-bordered table-collapsible mb-0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Websites Hosted
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Bandwidth
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        12 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24 TB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        CPU (Cores)
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Memory
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        16GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24GB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Free cPanel/WHM
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Full Management
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Priority Technical Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Softaculous 1-Click Install
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        7-Days MoneyBack Guarantee
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Multiple Server Locations
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button  onClick={() => 
                                                   setWindowsActiveTable(prev => prev === "W-feature-3" ? null : "W-feature-3")
                                                   }  className="accordion-button fs-14 fw-bold">
                                                        EXCLUSIVE VPS HOSTING FEATURES-3
                                                    </button>
                                                </h2>
                                                <div className={`accordion-collapse collapse ${windowsActiveTable==="W-feature-3"?"show":""}`}>
                                                    <div className="accordion-body p-0">
                                                        <div className="card border-0">
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <table className="table table-bordered table-collapsible mb-0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Websites Hosted
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Bandwidth
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        12 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24 TB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        CPU (Cores)
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Memory
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        16GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24GB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Free cPanel/WHM
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Full Management
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Priority Technical Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Softaculous 1-Click Install
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        7-Days MoneyBack Guarantee
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Multiple Server Locations
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className={`tab-pane fade ${activeTab==="cloud"?"show active":""}`}>
                            <div className="card">
                                    <div className="card-body">
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered table-collapsible mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <div className="h5 mb-0">
                                                                        Compare Our Cloud VPS Hosting Plans
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="text-center">
                                                                        <p className="mb-1 fw-bold text-light-emphasis">
                                                                            Cloud VPS_1
                                                                        </p>
                                                                        <div className="h5">
                                                                            $27.40
                                                                        </div>
                                                                        <span
                                                                            className="d-block fw-normal mb-4 fs-12 text-light-emphasis">
                                                                            (on a 12 month plan)
                                                                        </span>
                                                                       <Link href="/price" className="btn btn-sm btn-primary btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                                                            <span className="btn-arrow__text">
                                                                                Get Started
                                                                                <span className="btn-arrow__icon">
                                                                                    <i className="las la-arrow-right"></i>
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="text-center">
                                                                        <p className="mb-1 fw-bold text-light-emphasis">
                                                                            Cloud VPS_2
                                                                        </p>
                                                                        <div className="h5">
                                                                            $40.40
                                                                        </div>
                                                                        <span
                                                                            className="d-block fw-normal mb-4 fs-12 text-light-emphasis">
                                                                            (on a 12 month plan)
                                                                        </span>
                                                                       <Link href="/price" className="btn btn-sm btn-dark btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                                                            <span className="btn-arrow__text">
                                                                                Get Started
                                                                                <span className="btn-arrow__icon">
                                                                                    <i className="las la-arrow-right"></i>
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="text-center">
                                                                        <p className="mb-1 fw-bold text-light-emphasis">
                                                                            Cloud VPS_3
                                                                        </p>
                                                                        <div className="h5">
                                                                            $48.50
                                                                        </div>
                                                                        <span
                                                                            className="d-block fw-normal mb-4 fs-12 text-light-emphasis">
                                                                            (on a 12 month plan)
                                                                        </span>
                                                                       <Link href="/price" className="btn btn-sm btn-dark btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                                                            <span className="btn-arrow__text">
                                                                                Get Started
                                                                                <span className="btn-arrow__icon">
                                                                                    <i className="las la-arrow-right"></i>
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="text-center">
                                                                        <p className="mb-1 fw-bold text-light-emphasis">
                                                                            Cloud VPS_4
                                                                        </p>
                                                                        <div className="h5">
                                                                            $90.00
                                                                        </div>
                                                                        <span
                                                                            className="d-block fw-normal mb-4 fs-12 text-light-emphasis">
                                                                            (on a 12 month plan)
                                                                        </span>
                                                                       <Link href="/price" className="btn btn-sm btn-dark btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                                                            <span className="btn-arrow__text">
                                                                                Get Started
                                                                                <span className="btn-arrow__icon">
                                                                                    <i className="las la-arrow-right"></i>
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion accordion-table-pricing">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button  onClick={() => 
                                                   setCloudActiveTable(prev => prev === "C-feature-1" ? null : "C-feature-1")
                                                   }  className="accordion-button fs-14 fw-bold">
                                                        EXCLUSIVE VPS HOSTING FEATURES-1
                                                    </button>
                                                </h2>
                                                <div className={`accordion-collapse collapse ${cloudActiveTable==="C-feature-1"?"show":""}`}>
                                                    <div className="accordion-body p-0">
                                                        <div className="card border-0">
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <table className="table table-bordered table-collapsible mb-0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Websites Hosted
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Bandwidth
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        12 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24 TB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        CPU (Cores)
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Memory
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        16GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24GB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Free cPanel/WHM
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Full Management
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Priority Technical Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Softaculous 1-Click Install
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        7-Days MoneyBack Guarantee
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Multiple Server Locations
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button  onClick={() => 
                                                   setCloudActiveTable(prev => prev === "C-feature-2" ? null : "C-feature-2")
                                                   }  className="accordion-button fs-14 fw-bold">
                                                        EXCLUSIVE VPS HOSTING FEATURES-2
                                                    </button>
                                                </h2>
                                                <div className={`accordion-collapse collapse ${cloudActiveTable==="C-feature-2"?"show":""}`}>
                                                    <div className="accordion-body p-0">
                                                        <div className="card border-0">
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <table className="table table-bordered table-collapsible mb-0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Websites Hosted
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Bandwidth
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        12 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24 TB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        CPU (Cores)
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Memory
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        16GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24GB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Free cPanel/WHM
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Full Management
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Priority Technical Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Softaculous 1-Click Install
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        7-Days MoneyBack Guarantee
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Multiple Server Locations
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button  onClick={() => 
                                                   setCloudActiveTable(prev => prev === "C-feature-3" ? null : "C-feature-3")
                                                   }  className="accordion-button fs-14 fw-bold">
                                                        EXCLUSIVE VPS HOSTING FEATURES-3
                                                    </button>
                                                </h2>
                                                <div className={`accordion-collapse collapse ${cloudActiveTable==="C-feature-3"?"show":""}`}>
                                                    <div className="accordion-body p-0">
                                                        <div className="card border-0">
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <table className="table table-bordered table-collapsible mb-0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Websites Hosted
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Bandwidth
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        12 TB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24 TB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        CPU (Cores)
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        2 x 2.20GHz
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Memory
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        4GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        8GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        16GB
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24GB
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Free cPanel/WHM
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Full Management
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        24/7 Support
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Priority Technical Support
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Softaculous 1-Click Install
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        7-Days MoneyBack Guarantee
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="d-block text-success">
                                                                                        <i className="las la-check"></i>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="d-block fw-semibold fs-14">
                                                                                        Multiple Server Locations
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span
                                                                                        className="d-block text-light-emphasis fs-14">
                                                                                        Unlimited
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
        </div>
    </>
  )
};

export default VpsHostingPlanThree
