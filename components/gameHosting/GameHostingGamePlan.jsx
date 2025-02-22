import { useState } from "react";
import Link from "next/link";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const GameHostingGamePlan = () => {
    const [activeTab,setActiveTab]=useState("trending")
  return (
    <>
       <section className="pt-60 pb-60">
        <div className="pb-40">
            <div className="container">
                <div className="row g-4 align-items-center justify-content-between">
                    <div className="col-lg-6 col-xxl-5">
                        <h2 className="h3 text-white mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Easy-to-Use & Powerful Game Panel</h2>
                    </div>
                    <div className="col-lg-4">
                        <p className="text-white mb-0 max-text-36 text-opacity-75" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Whether it’s for a competitive match, or
                            just a casual game
                            server with
                            friends. Streamline-Servers has the perfect!</p>
                    </div>
                </div>
            </div>
        </div>
        <Tabs className="container">
            <div className="row g-4">
                <div className="col-12" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="pricing-nav-pills game-plan w-100" data-simplebar>
                        <TabList className="nav nav-pills gap-3 justify-content-around" role="tablist">
                            <Tab onClick={()=>setActiveTab("trending")} className="nav-item" >
                                <a type="button" className={`game-tab d-inline-flex flex-column align-items-center text-decoration-none text-white fw-bold p-4 p-xl-6 ${activeTab==="trending"?"active":""}`}>
                                    <span
                                        className="w-14 h-14 rounded-circle bg-white bg-opacity-10 d-inline-flex align-items-center justify-content-center p-4 mb-2">
                                        <img src="/img/gt-icon-1.png" alt="icon" className="img-fluid gt-icon"/>
                                        <img src="/img/gt-icon-1-color.png" alt="icon"
                                            className="img-fluid gt-icon-color"/>
                                    </span>
                                    <span className="d-block">Trending Games</span>
                                </a>
                            </Tab>
                            <Tab className="nav-item"   onClick={()=>setActiveTab("easy")}>
                            <a type="button" className={`game-tab d-inline-flex flex-column align-items-center text-decoration-none text-white fw-bold p-4 p-xl-6 ${activeTab==="easy"?"active":""}`}>
                                    <span
                                        className="w-14 h-14 rounded-circle bg-white bg-opacity-10 d-inline-flex align-items-center justify-content-center p-4 mb-2">
                                        <img src="/img/gt-icon-2.png" alt="icon" className="img-fluid gt-icon"/>
                                        <img src="/img/gt-icon-2-color.png" alt="icon"
                                            className="img-fluid gt-icon-color"/>
                                    </span>
                                    <span className="d-block">Easy Update</span>
                                </a>
                            </Tab>
                            <Tab className="nav-item" onClick={()=>setActiveTab("config")}>
                            <a type="button" className={`game-tab d-inline-flex flex-column align-items-center text-decoration-none text-white fw-bold p-4 p-xl-6 ${activeTab==="config"?"active":""}`}>
                                    <span
                                        className="w-14 h-14 rounded-circle bg-white bg-opacity-10 d-inline-flex align-items-center justify-content-center p-4 mb-2">
                                        <img src="/img/gt-icon-3.png" alt="icon" className="img-fluid gt-icon"/>
                                        <img src="/img/gt-icon-3-color.png" alt="icon"
                                            className="img-fluid gt-icon-color"/>
                                    </span>
                                    <span className="d-block">Config Editor</span>
                                </a>
                            </Tab>
                            <Tab className="nav-item" onClick={()=>setActiveTab("mod")}>
                            <a type="button" className={`game-tab d-inline-flex flex-column align-items-center text-decoration-none text-white fw-bold p-4 p-xl-6 ${activeTab==="mod"?"active":""}`}>
                                    <span
                                        className="w-14 h-14 rounded-circle bg-white bg-opacity-10 d-inline-flex align-items-center justify-content-center p-4 mb-2">
                                        <img src="/img/gt-icon-4.png" alt="icon" className="img-fluid gt-icon"/>
                                        <img src="/img/gt-icon-4-color.png" alt="icon"
                                            className="img-fluid gt-icon-color"/>
                                    </span>
                                    <span className="d-block"> Mod Manager</span>
                                </a>
                            </Tab>
                            <Tab className="nav-item" onClick={()=>setActiveTab("web")}>
                            <a type="button" className={`game-tab d-inline-flex flex-column align-items-center text-decoration-none text-white fw-bold p-4 p-xl-6 ${activeTab==="web"?"active":""}`}>
                                    <span
                                        className="w-14 h-14 rounded-circle bg-white bg-opacity-10 d-inline-flex align-items-center justify-content-center p-4 mb-2">
                                        <img src="/img/gt-icon-5.png" alt="icon" className="img-fluid gt-icon"/>
                                        <img src="/img/gt-icon-5-color.png" alt="icon"
                                            className="img-fluid gt-icon-color"/>
                                    </span>
                                    <span className="d-block">Web Console</span>
                                </a>
                            </Tab>
                        </TabList>
                    </div>
                </div>
                <div className="col-12">
                    <div className="tab-content">
                        <TabPanel className={`tab-pane fade ${activeTab==="trending"?"active show":""}`} >
                            <div className="row align-items-center g-4">
                                <div className="col-lg-6">
                                    <h3 className="text-white mb-3">Always stay Updated</h3>
                                    <p className="text-white max-text-48 mb-6 text-opacity-75">Guarantee reliability for
                                        websites, apps or
                                        Servers. We
                                        deliver
                                        round-the-clock, for your fast expanding business with experts
                                        7 days a week, rated 4.9 out of 5 stars!</p>
                                    <Link href="/server-location" className="btn btn-primary btn-arrow btn-arrow-lg btn-lg fs-14 fw-medium rounded">
                                        <span className="btn-arrow__text">
                                            Game Server
                                            <span className="btn-arrow__icon">
                                                <i className="las la-arrow-right"></i>
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <img src="/img/game-tab.png" alt="image" className="img-fluid"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className={`tab-pane fade ${activeTab==="easy"?"active show":""}`} >
                            <div className="row align-items-center g-4">
                                <div className="col-lg-6">
                                    <h3 className="text-white mb-3">Updated Always stay </h3>
                                    <p className="text-white max-text-48 mb-6 text-opacity-75">Guarantee reliability deliver
                                        round-the-clock, for your fast expanding business with experts
                                        7 days a week, rated 4.9 out of 5 stars! for
                                        websites, apps or
                                        Servers. We
                                        </p>
                                    <Link href="/server-location" className="btn btn-primary btn-arrow btn-arrow-lg btn-lg fs-14 fw-medium rounded">
                                        <span className="btn-arrow__text">
                                            Game Server
                                            <span className="btn-arrow__icon">
                                                <i className="las la-arrow-right"></i>
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <img src="/img/game-tab.png" alt="image" className="img-fluid"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className={`tab-pane fade ${activeTab==="config"?"active show":""}`} >
                            <div className="row align-items-center g-4">
                                <div className="col-lg-6">
                                    <h3 className="text-white mb-3">Always Updated</h3>
                                    <p className="text-white max-text-48 mb-6 text-opacity-75"> round-the-clock, for your fast expanding business with experts
                                    7 days a week, rated 4.9 out of 5 stars Guarantee reliability for
                                        websites, apps or
                                        Servers. We
                                        deliver
                                       !</p>
                                    <Link href="/server-location" className="btn btn-primary btn-arrow btn-arrow-lg btn-lg fs-14 fw-medium rounded">
                                        <span className="btn-arrow__text">
                                            Game Server
                                            <span className="btn-arrow__icon">
                                                <i className="las la-arrow-right"></i>
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <img src="/img/game-tab.png" alt="image" className="img-fluid"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className={`tab-pane fade ${activeTab==="mod"?"active show":""}`} >
                            <div className="row align-items-center g-4">
                                <div className="col-lg-6">
                                    <h3 className="text-white mb-3">Always Updated stay </h3>
                                    <p className="text-white max-text-48 mb-6 text-opacity-75">reliability for
                                        websites, apps or
                                        Servers. WeGuarantee 
                                        deliver
                                        round-the-clock, for your fast expanding business with experts
                                        7 days a week, rated 4.9 out of 5 stars!</p>
                                    <Link href="/server-location" className="btn btn-primary btn-arrow btn-arrow-lg btn-lg fs-14 fw-medium rounded">
                                        <span className="btn-arrow__text">
                                            Game Server
                                            <span className="btn-arrow__icon">
                                                <i className="las la-arrow-right"></i>
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <img src="/img/game-tab.png" alt="image" className="img-fluid"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className={`tab-pane fade ${activeTab==="web"?"active show":""}`} >
                            <div className="row align-items-center g-4">
                                <div className="col-lg-6">
                                    <h3 className="text-white mb-3">Always stay Updated-2</h3>
                                    <p className="text-white max-text-48 mb-6 text-opacity-75">reliability for
                                        websites, apps or
                                        Servers. We Guarantee 
                                        deliver
                                        round-the-clock, for your fast expanding business with experts
                                        7 days a week, rated 4.9 out of 5 stars!</p>
                                    <Link href="/server-location" className="btn btn-primary btn-arrow btn-arrow-lg btn-lg fs-14 fw-medium rounded">
                                        <span className="btn-arrow__text">
                                            Game Server
                                            <span className="btn-arrow__icon">
                                                <i className="las la-arrow-right"></i>
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <img src="/img/game-tab.png" alt="image" className="img-fluid"/>
                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </div>
            </div>
        </Tabs>
    </section>
    </>
  )
};

export default GameHostingGamePlan
