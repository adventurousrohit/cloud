import { TabList, TabPanel,Tab, Tabs } from "react-tabs";
import { techPartnersApps, techPartnersOperatingSystem } from "../../utils/data";
import { useState } from "react";

const VpsHostingTechPartner = () => {
    const [activeTab,setActiveTab]=useState("operating")
  return (
    <>
      <section className="pt-60 pb-60">
        <div className="pb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xxl-10">
                        <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="mb-2">Choose the Perfect Operating System for Your Linux VPS Server</h2>
                            <p>The right OS with VPS hosting ensures optimal performance. Whether you are a developer or a business owner, we can offer you the flexibility and power to meet your specific requirements through seamless reliability and efficiency using our Linux VPS hosting.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Tabs className="container">
            <div className="row">
                <div className="col-12">
                    <div className="tab-content mt-6">

                            <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 justify-content-center">
                                {
                                    techPartnersOperatingSystem?.map((item,i)=><div key={i} className="col">
                                    <div className="card shadow-sm h-100 hover-text-white">
                                        <div className="card-body d-flex align-items-center gap-3">
                                            <div className="w-12 h-12 d-flex justify-content-center align-items-center flex-shirnk-0">
                                                {/* <img src={item.imgSrc} alt="icon" className="w-100 h-100 object-fit-contain"/> */}
                                                <i className={`fab ${item?.imgSrc}`}  style={{fontSize:"50px",color:item?.altText}}></i>
                                            </div>
                                            <h6 className="m-0 flex-grow-1 fs-16 fw-bold hover-text-white">{item.title}</h6>
                                        </div>
                                    </div>
                                </div>)
                                }
                               
                            </div>
                    </div>
                </div>
            </div>
        </Tabs>
    </section>
    </>
  )
};

export default VpsHostingTechPartner
