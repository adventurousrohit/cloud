import VideoModal from "../common/others/VideoModal";
import {useState} from "react"
const DataCenterVideo = () => {
    const [isOpen,setOpen]=useState(false)
  return (
    
    <>
    {/* <VideoModal isOpen={isOpen} setOpen={setOpen}/> */}
        <section className="video-area-one pt-120 pb-60 position-relative z-0">
        
        <div className="pb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="text-center">
                            <h2 className="text-white mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">Hostcity Hosting is the Industry’s Best Hosting Solution
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    <div className="bg-white p-3 shadow-lg rounded position-relative" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                        <img src="/img/video-bg.png" alt="" className="img-fluid w-100"/>
                        <a  type="submit" onClick={()=>setOpen(true)} className="video-btn popup-init position-absolute top-50 start-50 translate-middle">
                            <span
                                className="w-16 h-16 rounded-circle d-flex align-items-center justify-content-center bg-primary">
                                <span className="text-white fs-5">
                                    <i className="las la-play"></i>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default DataCenterVideo
