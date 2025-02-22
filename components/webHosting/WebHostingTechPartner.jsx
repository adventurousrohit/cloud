import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { techPartnersApps, techPartnersOperatingSystem } from "../../utils/data";


const WebHostingTechPartner = () => {
const [activeTab,setActiveTab]=useState("operating")
  return (
    <Tabs className="pt-120 pb-60">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xxl-7">
                <div className="text-center">
                    <h2 className="mb-2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Our Technology Partners</h2>
                    <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">With over two decades of experience in high-quality, secure web hosting HostCity Strategic.</p>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center border-bottom mt-5" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <div className="pricing-nav-pills d-inline-block mx-auto border-bottom">
                <TabList className="nav nav-pills">
                    <Tab className="nav-item " onClick={()=>setActiveTab("operating")}>
                        <a type="button" className={`partner-tab-nev cursor-pointer  d-inline-block text-decoration-none text-body fw-bold px-3 pb-2  ${activeTab==="operating"?"active":""}`}>
                            Operating System
                        </a>
                    </Tab>
                    <Tab className="nav-item" onClick={()=>setActiveTab("apps")}>
                    <a type="button" className={`partner-tab-nev d-inline-block text-decoration-none text-body fw-bold px-3 pb-2  ${activeTab==="apps"?"active":""}`}>
                            Panels & Apps
                        </a>
                    </Tab>
                </TabList>
            </div>
        </div>
        <div className="tab-content mt-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <TabPanel className={`tab-pane fade ${activeTab==="operating"?"active show":""}`}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-3">
      {techPartnersOperatingSystem.map((partner, index) => (
        <div className="col" key={index}>
          <div className="tech-partner transition bg-white px-6 py-8 rounded-2 shadow-sm text-center h-100">
            <img src={partner.imgSrc} alt={partner.altText} className="img-fluid w-12" />
            <h6 className="fs-16 fw-bold mt-4">{partner.title}</h6>
          </div>
        </div>
      ))}
    </div>
            </TabPanel>
            <TabPanel className={`tab-pane fade ${activeTab==="apps"?"active show":""}`}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-3">
      {techPartnersApps.map((partner, index) => (
        <div className="col" key={index}>
          <div className="tech-partner transition bg-white px-6 py-8 rounded-2 shadow-sm text-center h-100">
            <img src={partner.imgSrc} alt={partner.altText} className="img-fluid w-12" />
            <h6 className="fs-16 fw-bold mt-4">{partner.title}</h6>
          </div>
        </div>
      ))}
    </div>
            </TabPanel>
        </div>
    </div>
</Tabs>
  );
};

export default WebHostingTechPartner;
