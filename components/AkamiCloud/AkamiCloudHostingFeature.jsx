import {AkamifeatureData } from "../../utils/data";
import FeatureCard from "../common/card/FeatureCard";
const SharedHostingFeature = () => {
  return (
    <>
       <div className="pt-120 pb-120 bg-primary bg-opacity-5">
        <div className="pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-10 text-center" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <h2 className="mb-0">
                        Akamai Cloud Features: Simplify Your Hosting Journey
                        </h2>
                        <p className="mt-4">
                        Discover the power of effortless cloud hosting with Akamai, your trusted partner in cutting-edge cloud management. Whether you need an all-inclusive suite for a singular application or an expansive global network, Akamai provides a solution crafted to meet your every business need.
</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4">
               {
                AkamifeatureData?.map((f,i)=><FeatureCard feature={f} key={i}/> )
               }
            
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingFeature
