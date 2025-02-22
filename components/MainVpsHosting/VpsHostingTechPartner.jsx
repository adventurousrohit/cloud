import { TabList, TabPanel,Tab, Tabs } from "react-tabs";
import { techPartnersApps, techPartnersOperatingSystem } from "../../utils/data";
import { useState } from "react";

const VpsHostingTechPartner = () => {
    const [activeTab,setActiveTab]=useState("operating")
  return (
    <>
      <section className="pt-120 pb-120">
        <div className="pb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xxl-7">
                        <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="mb-2">Our Technology Partners</h2>
                            <p className="mb-0 max-text-52 mx-auto">With over two decades of experience in high-quality,
                                secure web hosting HostCity Strategic.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Tabs className="container">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-center border-bottom" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="pricing-nav-pills d-inline-block mx-auto border-bottom">
                            <TabList className="nav nav-pills" role="tablist">
                                <Tab className="nav-item" onClick={()=>setActiveTab("operating")} >
                                    <a type="button" className={`partner-tab-nev d-inline-block text-decoration-none text-body fw-bold px-3 pb-2 ${activeTab==="operating"?"active":""}`}>
                                        Operating System
                                    </a>
                                </Tab>
                                <Tab className="nav-item" onClick={()=>setActiveTab("apps")}>
                                <a type="button" className={`partner-tab-nev d-inline-block text-decoration-none text-body fw-bold px-3 pb-2 ${activeTab==="apps"?"active":""}`}>
                                        Panels & Apps
                                    </a>
                                </Tab>
                            </TabList>
                        </div>
                    </div>
                    <div className="tab-content mt-6">
                        <TabPanel className={`tab-pane fade ${activeTab==="operating"?"show active":""}`}>
                            <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 justify-content-center">
                                {
                                    techPartnersOperatingSystem.map((item,i)=><div key={i} className="col">
                                    <div className="card shadow-sm h-100">
                                        <div className="card-body d-flex align-items-center gap-3">
                                            <div className="w-12 h-12 d-flex justify-content-center align-items-center flex-shirnk-0">
                                                <img src={item.imgSrc} alt="icon" className="w-100 h-100 object-fit-contain"/>
                                            </div>
                                            <h6 className="m-0 flex-grow-1 fs-16 fw-bold">{item.title}</h6>
                                        </div>
                                    </div>
                                </div>)
                                }
                               
                            </div>
                        </TabPanel>
                        <TabPanel className={`tab-pane fade ${activeTab==="apps"?"show active":""}`}>
                            <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 justify-content-center">
                               {
                                techPartnersApps.map((item,i)=> <div key={i} className="col">
                                <div className="card shadow-sm">
                                    <div className="card-body d-flex align-items-center gap-3">
                                        <div className="w-12 h-12 d-flex justify-content-center align-items-center flex-shirnk-0">
                                            <img src={item.imgSrc} alt="icon" className="w-100 h-100 object-fit-contain"/>
                                        </div>
                                        <h6 className="m-0 flex-grow-1 fs-16 fw-bold">{item.title}</h6>
                                    </div>
                                </div>
                            </div>)
                               }
                               
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

export default VpsHostingTechPartner
