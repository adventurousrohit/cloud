import { IotData } from "../../utils/data";
import FeatureCard from "../common/card/FeatureCard";
const SharedHostingFeature = () => {
  return (
    <>
       <div className="pt-120 pb-120 bg-primary bg-opacity-5">
        <div className="pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-10 text-center" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <h3 className="mb-0">
                        Choose the Future of Connectivity with CloudMinister Internet of Things (IoT) Services
                        </h3>
                        <p className="mt-4">Use CloudMinister's IoT services to explore the superpower of your linked devices. Utilize real-time data, streamline processes, and promote more intelligent decision-making with the support of cutting-edge technology and seamless cloud integration for improved business expansion.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4">
               {
                IotData?.map((f,i)=><FeatureCard feature={f} key={i}/> )
               }
            
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingFeature
