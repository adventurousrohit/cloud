import {Tabs } from "react-tabs";
import {techPartnersOperatingSystem } from "../../utils/data";


const CloudHostingTechPartner = () => {

  return (
    <>
      <section className="pt-60 pb-60">
        <div className="pb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xxl-7">
                        <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="mb-2">Cloud Hosting India</h2>
                            <p className="mb-0 max-text-52 mx-auto">Best Operating System in 2025</p>
                            <p>Choose the right OS for your cloud hosting server—Windows, Linux, and more. Our experts handle installation, ensuring maximum performance, security, and reliable hosting for your website or application.</p>
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

export default CloudHostingTechPartner
